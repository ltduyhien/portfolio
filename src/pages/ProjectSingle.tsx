import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useCallback } from 'react';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import rehypeRaw from 'rehype-raw';
import hljs from 'highlight.js';

import CollapsibleSection from '../components/CollapsibleSection';
import Chip from '../components/Chip';
import ConsoleBlock from '../components/ConsoleBlock';
import ClickableImage from '../components/ClickableImage';

import { PROJECTS_ORDER } from './projectsOrder';
import 'highlight.js/styles/github-dark.css';

// Configure highlight.js
hljs.configure({
  ignoreUnescapedHTML: true,
});

interface Screenshot {
  image: string;
  caption: string;
}

interface Appendix {
  label: string;
  url: string;
}

export interface ProjectData {
  subtext?: string;
  slug?: string;
  title: string;
  productName?: string;
  summary: string;
  problem: string;
  constraints: string;
  keyDecisions: string[];
  outcomes: string;
  screenshots: Screenshot[];
  appendices?: Appendix[];
  banner?: string;
  timeSpent?: string;
  role?: string;
  industries?: string[];
  ideation?: string;
  api?: string; // Added for API section
  apiSection?: string; // Added for API section
  ideationImages?: { image: string; caption: string }[]; // Added for ideationImages
  aiSuggestionDesign?: string; // Added for AI Suggestion Design section
  aiFeatures?: string; // Added for AI Features section
  interactiveMode?: string; // Added for Interactive Mode section
}

// Section keys for tracking open state
const SECTION_KEYS = [
  'challenges',
  'collaboration',
  'ideation',
  'api',
  'aiSuggestionDesign',
  'decisions',
  'prototypes',
  'outcomes',
];

// Custom remark plugin to pair adjacent bash+json code blocks as consoleBlock nodes
function remarkConsoleBlock() {
  return (tree: Node) => {
    const treeWithChildren = tree as { children?: unknown[] };
    if (!Array.isArray(treeWithChildren.children)) return;
    const children = treeWithChildren.children;
    const newChildren = [];
    let i = 0;
    while (i < children.length) {
      const node = children[i] as { type?: string; lang?: string; value?: string };
      const next = children[i + 1] as { type?: string; lang?: string; value?: string };
      if (
        node.type === 'code' &&
        node.lang === 'bash' &&
        next &&
        next.type === 'code' &&
        next.lang === 'json'
      ) {
        // Escape quotes and newlines for HTML attribute
        const escapedCode = (node.value || '').replace(/"/g, '&quot;').replace(/\n/g, '&#10;');
        const escapedResponse = (next.value || '').replace(/"/g, '&quot;').replace(/\n/g, '&#10;');
        newChildren.push({
          type: 'html',
          value: `<console-block code="${escapedCode}" response="${escapedResponse}" code-lang="bash" response-lang="json"></console-block>`,
        });
        i += 2;
      } else {
        newChildren.push(node);
        i++;
      }
    }
    (tree as unknown as { children: unknown[] }).children = newChildren;
  };
}

// Custom rehype plugin to handle console-block HTML elements
function rehypeConsoleBlock() {
  return (tree: Node) => {
    visit(
      tree,
      'element',
      (node: { tagName?: string; properties?: Record<string, unknown>; children?: unknown[] }) => {
        if (node.tagName === 'console-block') {
          // Convert to a div with special class for ReactMarkdown to handle
          node.tagName = 'div';
          node.properties = node.properties || {};
          node.properties.className = 'console-block-wrapper';
          node.properties['data-code'] = node.properties.code;
          node.properties['data-response'] = node.properties.response;
          node.properties['data-code-lang'] = node.properties['code-lang'];
          node.properties['data-response-lang'] = node.properties['response-lang'];
          node.children = [];
        }
      },
    );
  };
}

// Custom renderer for markdown components
const markdownComponents = {
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-6 list-disc pl-6 text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed [&:last-child]:mb-0"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => {
    const text =
      typeof props.children === 'string'
        ? props.children
        : Array.isArray(props.children)
          ? props.children.join('')
          : '';
    const isLong = (text.match(/\n/g) || []).length > 0;
    return <li className={isLong ? 'mb-4' : ''} {...props} />;
  },
  strong: (props: React.HTMLAttributes<HTMLElement>) => {
    const content = typeof props.children === 'string' ? props.children : '';
    // Check if the content contains numbers (digits)
    const hasNumbers = /\d/.test(content);
    return (
      <strong
        className={`font-bold ${hasNumbers ? '!text-[#d17a15] dark:!text-[#F58918]' : ''}`}
        {...props}
      />
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-6 text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    const { slug } = useParams();
    const imageSrc = slug && src ? getImageUrl(slug, src) : src;

    return (
      <img
        src={imageSrc}
        alt={alt || ''}
        className="w-full [border-radius:6px_/_6px] object-cover mb-4 border-2 border-zinc-200 dark:border-zinc-700"
        {...rest}
      />
    );
  },
  code: ({
    className = '',
    children,
    ...props
  }: React.PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLElement>>) => (
    <pre className="mb-6 w-full max-w-full overflow-x-auto [border-radius:6px_/_6px] border border-zinc-200 dark:border-0">
      <code
        className={
          className +
          ' bg-white text-zinc-800 dark:bg-zinc-900 dark:text-inherit p-4 text-sm block whitespace-pre font-medium'
        }
        style={{ borderRadius: 0 }}
        {...props}
      >
        {children}
      </code>
    </pre>
  ),
  div: (
    props: React.HTMLAttributes<HTMLDivElement> & {
      'data-code'?: string;
      'data-response'?: string;
      'data-code-lang'?: string;
      'data-response-lang'?: string;
    },
  ) => {
    if (props.className === 'console-block-wrapper') {
      return (
        <ConsoleBlock
          code={props['data-code']?.replace(/&#10;/g, '\n') || ''}
          response={props['data-response']?.replace(/&#10;/g, '\n') || ''}
          codeLang={props['data-code-lang'] || 'bash'}
          responseLang={props['data-response-lang'] || 'json'}
        />
      );
    }
    return <div {...props} />;
  },
};

// Image component that handles dynamic imports
const DynamicImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  style?: React.CSSProperties;
  isProjectThumbnail?: boolean;
  onOpenLightbox?: () => void; 
  onCloseLightbox?: () => void; 
  caption?: string 
}> = ({ src, alt, className, style, isProjectThumbnail, onOpenLightbox, onCloseLightbox, caption }) => {
  const { slug } = useParams();
  const imageSrc = slug ? getImageUrl(slug, src) : src;

  return (
    <ClickableImage
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      isProjectThumbnail={isProjectThumbnail}
      onOpenLightbox={onOpenLightbox}
      onCloseLightbox={onCloseLightbox}
      caption={caption}
    />
  );
};

// Dynamic image imports using Vite glob
const projectImages = import.meta.glob('../projects/*/*.{png,jpg,jpeg}', { eager: true });

// Helper function to get image URL
const getImageUrl = (slug: string, imageName: string): string => {
  const key = `../projects/${slug}/${imageName}`;
  return projectImages[key] ? (projectImages[key] as { default: string }).default : `/src/projects/${slug}/${imageName}`;
};

const ProjectSingle = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const leftRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [buttonLeft, setButtonLeft] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Track open/closed state for each section
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const handleSectionToggle = useCallback((key: string, open: boolean) => {
    setOpenSections((prev) => ({ ...prev, [key]: open }));
  }, []);

  const handleCollapseAll = useCallback(() => {
    const closed = Object.fromEntries(SECTION_KEYS.map((k) => [k, false]));
    setOpenSections(closed);
  }, []);

  const handleLightboxOpen = useCallback(() => {
    setIsLightboxOpen(true);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setIsLightboxOpen(false);
    // Force button position update after lightbox closes
    setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const left = rect.left + rect.width / 2;
        setButtonLeft(`${left}px`);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (!slug) return;
    import(`../projects/${slug}/data.json`).then((mod) => {
      setProject(mod.default || mod);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    function syncHeights() {
      if (leftRef.current && imgContainerRef.current) {
        imgContainerRef.current.style.height = leftRef.current.offsetHeight + 'px';
      }
    }
    syncHeights();
    window.addEventListener('resize', syncHeights);
    return () => window.removeEventListener('resize', syncHeights);
  }, [project]);

  useEffect(() => {
    function updateButtonPosition() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const left = rect.left + rect.width / 2;
        setButtonLeft(`${left}px`);
      }
    }
    updateButtonPosition();
  }, [openSections, isLightboxOpen]);

  // Additional effect to ensure button position is set when sections are open
  useEffect(() => {
    if (Object.values(openSections).some(Boolean) && !isLightboxOpen && !buttonLeft) {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const left = rect.left + rect.width / 2;
          setButtonLeft(`${left}px`);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [openSections, isLightboxOpen, buttonLeft]);

  if (loading || !project) {
    return (
      <div className="container-custom px-8 pt-20 pb-16 md:py-16 max-w-3xl mx-auto">Loading...</div>
    );
  }

  // Find current, previous, and next project
  const idx = PROJECTS_ORDER.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PROJECTS_ORDER[idx - 1] : null;
  const next = idx < PROJECTS_ORDER.length - 1 ? PROJECTS_ORDER[idx + 1] : null;

  // Build dynamic sections array
  const sections = [
    project.problem && {
      key: 'challenges',
      title: 'Challenges',
      content: (
        <ReactMarkdown
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
          components={markdownComponents}
        >
          {project.problem}
        </ReactMarkdown>
      ),
    },
    project.constraints && {
      key: 'collaboration',
      title: 'Collaboration',
      content: (
        <ReactMarkdown
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
          components={markdownComponents}
        >
          {project.constraints}
        </ReactMarkdown>
      ),
    },
    project.ideation && {
      key: 'ideation',
      title: 'Research & Ideation',
      content: (
        <>
          <ReactMarkdown
            remarkPlugins={[remarkConsoleBlock]}
            rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
            components={markdownComponents}
          >
            {project.ideation}
          </ReactMarkdown>
          {project.ideationImages && project.ideationImages.length > 0 && (
            <div className="flex flex-col gap-8">
              {project.ideationImages.map((img, idx) => (
                <figure key={idx}>
                  <DynamicImage
                    src={img.image}
                    alt={img.caption}
                    className="w-full [border-radius:6px_/_6px] object-cover mb-2 border-2 border-zinc-200 dark:border-zinc-700"
                    onOpenLightbox={handleLightboxOpen}
                    onCloseLightbox={handleLightboxClose}
                    caption={img.caption}
                  />
                  <figcaption className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </>
      ),
      hasImages: true,
    },
    project.aiSuggestionDesign && {
      key: 'aiSuggestionDesign',
      title: 'AI Features',
      content: (
        <ReactMarkdown
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
          components={markdownComponents}
        >
          {project.aiSuggestionDesign}
        </ReactMarkdown>
      ),
    },
    project.interactiveMode && {
      key: 'interactiveMode',
      title: '3DMark Interactive Mode',
      content: (
        <>
          <ReactMarkdown
            remarkPlugins={[remarkConsoleBlock]}
            rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
            components={markdownComponents}
          >
            {project.interactiveMode}
          </ReactMarkdown>
          <div className="flex flex-col gap-8 mt-8">
            <figure>
              <DynamicImage
                src="prototype4.png"
                alt="3DMark Interactive Mode prototype"
                className="w-full [border-radius:6px_/_6px] object-cover mb-2 border-2 border-zinc-200 dark:border-zinc-700"
                onOpenLightbox={handleLightboxOpen}
                onCloseLightbox={handleLightboxClose}
                caption="The Interactive Mode allows users to explore graphics settings and see real-time changes in rendering quality, helping them understand the relationship between hardware and visual performance"
              />
              <figcaption className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                The Interactive Mode allows users to explore graphics settings and see real-time
                changes in rendering quality, helping them understand the relationship between
                hardware and visual performance
              </figcaption>
            </figure>
          </div>
        </>
      ),
      hasImages: true,
    },
    project.keyDecisions && {
      key: 'decisions',
      title: 'Key Decisions',
      content: (
        <ReactMarkdown
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
          components={markdownComponents}
        >
          {Array.isArray(project.keyDecisions)
            ? project.keyDecisions.join('\n')
            : project.keyDecisions}
        </ReactMarkdown>
      ),
    },
    (project.api || project.apiSection) && {
      key: 'api',
      title: 'API Design & Integration',
      content: (() => {
        const markdown = project.api || project.apiSection || '';
        return (
          <ReactMarkdown
            remarkPlugins={[remarkConsoleBlock]}
            rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
            components={markdownComponents}
          >
            {markdown}
          </ReactMarkdown>
        );
      })(),
    },
    project.screenshots &&
      project.screenshots.length > 0 && {
        key: 'prototypes',
        title: 'Prototypes',
        content: (
          <>
            <p className="mb-6 text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
              These drafts represent specific sections of the UI and are intended to showcase
              particular functionalities, not the complete interface.
            </p>
            <div className="flex flex-col gap-8">
              {project.screenshots.map((shot, idx) => (
                <figure key={idx}>
                  <DynamicImage
                    src={shot.image}
                    alt={shot.caption}
                    className="w-full [border-radius:6px_/_6px] object-cover mb-2 border-2 border-zinc-200 dark:border-zinc-700"
                    onOpenLightbox={handleLightboxOpen}
                    onCloseLightbox={handleLightboxClose}
                    caption={shot.caption}
                  />
                  <figcaption className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        ),
        hasImages: true,
      },
    project.outcomes && {
      key: 'outcomes',
      title: 'Business Impact & Testing',
      content: (
        <ReactMarkdown
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeConsoleBlock]}
          components={markdownComponents}
        >
          {project.outcomes}
        </ReactMarkdown>
      ),
    },
  ].filter(Boolean);

  return (
    <div
      ref={containerRef}
      className="container-custom px-8 pt-24 pb-16 md:pt-8 md:pb-16 max-w-3xl mx-auto"
    >
      {/* Breadcrumb */}
      <div className="mb-4 text-base md:text-sm font-medium flex items-center gap-2">
        <Link to="/projects" className="text-brand font-semibold">
          All Projects
        </Link>
        <span className="text-zinc-400">&gt;</span>
        <span className="text-zinc-900 dark:text-zinc-200">
          {project.productName || project.title}
        </span>
      </div>
      {/* Top Section: Title, Info, Banner */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-stretch">
        <div className="flex-1 flex flex-col" ref={leftRef}>
          <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 leading-normal">
            {project.title}
          </h1>
          {project.timeSpent && (
            <div
              className="mb-1 text-base font-medium text-zinc-900 dark:text-zinc-100"
              dangerouslySetInnerHTML={{
                __html: project.timeSpent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
              }}
            />
          )}
          {project.role && (
            <div
              className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100"
              dangerouslySetInnerHTML={{
                __html: `Role: ${project.role.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}`,
              }}
            />
          )}
          {project.industries && project.industries.length > 0 && (
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-y-0 gap-y-2 mt-4">
              {project.industries.map((industry, idx) => (
                <Chip key={idx} text={industry} />
              ))}
            </div>
          )}
        </div>
        {project.banner && (
          <div className="md:w-80 w-full flex-shrink-0 flex" ref={imgContainerRef}>
            <DynamicImage
              src={project.banner}
              alt="Project banner"
              className="w-full h-full object-cover [border-radius:6px_/_6px] border-2 border-zinc-200 dark:border-zinc-700"
              style={{ minHeight: 180 }}
              isProjectThumbnail={true}
              onOpenLightbox={handleLightboxOpen}
            />
          </div>
        )}
      </div>
      {/* Summary */}
      <div className="mb-6 text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[remarkConsoleBlock]}
          rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeConsoleBlock]}
        >
          {project.summary}
        </ReactMarkdown>
      </div>
      {/* Explanation image below intro */}
      <figure className="mb-8">
        <DynamicImage
          src="explaination.png"
          alt="Explanation diagram"
          className="w-full max-w-3xl mx-auto rounded border-2 border-zinc-200"
          onOpenLightbox={handleLightboxOpen}
          caption={
            slug === 'test-driver-cloud'
              ? 'Overview of TDC platform and workflow'
              : 'Platform overview and workflow diagram'
          }
        />
        <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          {slug === 'test-driver-cloud'
            ? 'Overview of TDC platform and workflow'
            : 'Platform overview and workflow diagram'}
        </figcaption>
      </figure>
      {/* Render sections, filtering out falsy values */}
      {sections
        .filter(
          (
            section,
          ): section is { key: string; title: string; content: JSX.Element; hasImages?: boolean } =>
            !!section &&
            typeof section === 'object' &&
            'key' in section &&
            'title' in section &&
            'content' in section,
        )
        .map((section, idx) => (
          <CollapsibleSection
            key={section.key}
            title={`${idx + 1}. ${section.title}`}
            isOpen={!!openSections[section.key]}
            onToggle={(open) => handleSectionToggle(section.key, open)}
            extraBottomPadding={section.hasImages}
          >
            {section.content}
          </CollapsibleSection>
        ))}
      {/* Navigation Section */}
      {!prev && !next ? (
        <div className="flex justify-center mt-16 gap-4">
          <Link to="/projects" className="text-brand font-medium">
            All Projects
          </Link>
        </div>
      ) : (
        <div className="flex items-center mt-16 gap-4 relative">
          <div className="flex-1 flex justify-start">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="flex items-center gap-2 text-brand font-medium"
              >
                <span className="text-2xl">&#8592;</span>Previous
              </Link>
            ) : (
              <span />
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <Link to="/projects" className="text-brand font-medium">
              All Projects
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className="flex items-center gap-2 text-brand font-medium"
              >
                Next<span className="text-2xl">&#8594;</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      )}
      {Object.values(openSections).some(Boolean) && buttonLeft && !isLightboxOpen && (
        <button
          onClick={handleCollapseAll}
          className="fixed bottom-8 z-50 bg-zinc-900 text-zinc-100 px-6 py-3 rounded-full shadow-lg font-semibold text-sm hover:bg-zinc-800 transition"
          style={{
            left: buttonLeft,
            transform: 'translateX(-50%)',
            pointerEvents: 'auto',
          }}
        >
          Collapse All
        </button>
      )}
    </div>
  );
};

export default ProjectSingle;

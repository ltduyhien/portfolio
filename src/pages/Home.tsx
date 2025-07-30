import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Chip from '../components/Chip';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import { usePageEngagement } from '../hooks/usePageEngagement';

import type { ProjectData } from './ProjectSingle';
import { PROJECTS_ORDER } from './projectsOrder';

// Vite dynamic image import
const projectImages = import.meta.glob('../projects/*/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const Home = () => {
  // Page engagement tracking
  const { trackInteraction } = usePageEngagement({
    trackInteractions: true,
    trackScroll: true
  });
  
  const tags = [
    'SaaS',
    'Open-source',
    'AI',
    'Data Analytics',
    'Developer Tools',
    'Telecommunications',
    'Smart Devices',
    'Mobile Apps',
    'E-commerce',
    'Media Streaming',
    'File Systems',
    'Design Systems',
    'User Research',
  ];

  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    async function loadProjects() {
      // Filter out Procyon project for public display
      const publicProjects = PROJECTS_ORDER.filter(proj => proj.slug !== 'procyon-reinvention');
      const loaded = await Promise.all(
        publicProjects.slice(0, 4).map(async (proj) => {
          try {
            const mod = await import(`../projects/${proj.slug}/data.json`);
            return { ...mod.default, slug: proj.slug };
          } catch {
            return null;
          }
        }),
      );
      setProjects(loaded.filter(Boolean));
    }
    loadProjects();
  }, []);

  function getBannerUrl(slug: string, banner?: string): string {
    if (!banner) return '';
    const key = `../projects/${slug}/${banner}`;
    const url = projectImages[key];
    return typeof url === 'string' ? url : '';
  }

  return (
    <div className="container-custom px-8 pt-24 pb-16 md:pt-8 md:pb-16">
      <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white leading-relaxed">
        <span className="font-bold">Senior Product Designer</span>
        <br />
        <span className="font-medium">13+ yrs in SaaS & Technical Products</span>
      </h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Chip key={tag} text={tag} />
        ))}
      </div>
      <p className="mb-4 text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Hello, I am Hien. I am a senior product designer based in Espoo, Finland. Currently designing features that help you improve and track your computer hardware performance at UL Solutions. My work focuses on user research, iterative design, and measurable impact across SaaS platforms, enterprise tools, desktop applications, mobile applications, and AI-powered features.
      </p>
      <p className="text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Looking to learn more about my work and experience? Feel free to{' '}
        <Link 
          to="/about" 
          className="text-brand hover:underline"
          onClick={() => trackInteraction('home_link_click', { link: 'explore_projects' })}
        >
          explore my projects
        </Link>
        , or{' '}
        <Link 
          to="/about" 
          className="text-brand hover:underline"
          onClick={() => trackInteraction('home_link_click', { link: 'get_in_touch' })}
        >
          get in touch
        </Link>
        .
      </p>
      <h3 className="text-lg font-medium mb-4 mt-8 text-zinc-900 dark:text-white">My Work</h3>
      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => (
          <Link 
            key={idx} 
            to={`/projects/${project.slug}`} 
            className="block"
            onClick={() => trackInteraction('home_project_click', { 
              project_slug: project.slug,
              position: idx + 1
            })}
          >
            <ProjectCard
              title={project.title}
              subtitle={project.subtext || ''}
              tags={project.industries || []}
              imageUrl={getBannerUrl(String(project.slug || ''), String(project.banner || ''))}
            />
          </Link>
        ))}
      </div>
      <div className="mt-4 mb-10">
        <Link
          to="/projects"
          className="text-brand font-medium flex items-center gap-1 hover:underline"
        >
          See all projects <span className="inline-block">&rarr;</span>
        </Link>
      </div>
      <h3 className="text-xl font-medium mb-4 text-zinc-900 dark:text-white">My Experience</h3>
      <ExperienceCard
        title="Product Design Specialist - UL Solutions (Former Futuremark)"
        date="2023 - Present"
      >
        <p>
          Led product design for flagship benchmarking applications across desktop, mobile, and web
          platforms:
        </p>
        <ul className="list-disc pl-8 space-y-1 mt-4">
          <li>
            <strong>3DMark</strong>: Cross-platform benchmarking tool (Windows, macOS, iOS, Android)
          </li>
          <li>
            <strong>Procyon</strong>: Professional performance testing software for Windows
          </li>
          <li>
            <strong>TestDriver Cloud</strong>: Enterprise SaaS for automated PC benchmarking
          </li>
          <li>
            Established design systems and collaborated with engineering teams to modernize user
            interfaces
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard title="Senior UX Designer - Nokia Oyj" date="2022 - 2023">
        <p>Led UX design for enterprise cloud and network services solutions:</p>
        <ul className="list-disc pl-8 space-y-1 mt-4">
          <li>
            Designed <strong>AVA Open Analytics</strong> prototype through end-to-end interaction
            design process
          </li>
          <li>
            Conducted user research and usability testing to identify pain points and validate
            solutions
          </li>
          <li>Collaborated with designers, architects, and end-users across enterprise teams</li>
        </ul>
      </ExperienceCard>
      <ExperienceCard title="Lead UX Designer - Tuxera Oy" date="2012 - 2021">
        <p>Led product design and development across multiple platforms and technologies:</p>
        <ul className="list-disc pl-8 space-y-1 mt-4">
          <li>
            <strong>Tuxera Disk Manager</strong>: Native macOS app for disk management and file
            system tools
          </li>
          <li>
            <strong>TSMB Admin Panel</strong>: Web dashboard for enterprise file system
            administration
          </li>
          <li>
            <strong>Riva Speaker & Alexa Apps</strong>: Mobile apps for wireless speaker control
            (iOS/Android)
          </li>
          <li>
            <strong>AllConnect Mobile App</strong>: CES 2017 Honoree Award for media streaming
            (iOS/Android)
          </li>
          <li>
            <strong>Performance Dashboards</strong>: Web apps for monitoring MooseFS and comparing
            file system performance
          </li>
          <li>
            Designed and implemented <strong>Tuxera website</strong> and{' '}
            <strong>NTFS for Mac website</strong> with full-stack development
          </li>
          <li>
            Established Tuxera's brand identity and created marketing materials including white
            papers
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard title="UX Software Engineer - RunToShop" date="2011 - 2012">
        <p>User research and frontend development for web applications:</p>
        <ul className="list-disc pl-8 space-y-1 mt-4">
          <li>Conducted user research and designed websites and web applications</li>
          <li>Developed web frontend interfaces and user experiences</li>
        </ul>
      </ExperienceCard>
      <div className="mt-4 mb-10">
        <Link
          to="/about"
          className="text-brand font-medium flex items-center gap-1 hover:underline"
        >
          See more about me <span className="inline-block">&rarr;</span>
        </Link>
      </div>
      <h3 className="text-lg font-medium mb-4 mt-12 text-zinc-900 dark:text-white">
        Thanks for visiting :)
      </h3>
      <p className="text-base font-medium text-zinc-700 dark:text-zinc-200">
        You can get in touch with me by{' '}
        <a
          href="https://www.linkedin.com/in/hien-le-ux/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Connecting
        </a>{' '}
        with me in LinkedIn,{' '}
        <Link to="/about" className="text-brand hover:underline">
          Downloading
        </Link>{' '}
        my CV, or{' '}
        <a href="mailto:letranduyhien@gmail.com" className="text-brand hover:underline">
          Sending
        </a>{' '}
        me Email.
      </p>
    </div>
  );
};

export default Home;

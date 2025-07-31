const n="Design System",e="Comprehensive component library and design guidelines",s="3dmark-design-system",t="header.png",a=[{image:"principles.png",caption:"Design principles and philosophy"},{image:"fundamental.png",caption:"Core design tokens and foundational elements"},{image:"accessibility.png",caption:"WCAG guidelines and accessibility standards"},{image:"color-palette.png",caption:"Brand colors and color system"},{image:"typography.png",caption:"Font system and typography hierarchy"},{image:"spacing-layout.png",caption:"Grid system and spacing standards"},{image:"components.png",caption:"UI components library"},{image:"implementation.png",caption:"Code examples and technical implementation"}],i=[],o="**3 months**",r="**Lead Designer**",c=["Design Systems","UI/UX","Component Libraries"],l="Design System",d=`A comprehensive design system that establishes consistent design patterns, components, and guidelines across all products and platforms. This system serves as the foundation for creating cohesive user experiences while maintaining scalability and maintainability.

**The Challenge:** Our 3DMark ecosystem spans multiple platforms and user types—mobile apps on Android and iOS, web platforms serving both B2C and B2B users, and desktop applications across macOS, Windows, and expanding to Linux. This multi-platform complexity created inconsistent user experiences, redundant development work, and growing maintenance overhead.

**The Solution:** A unified design system that provides standardized components, patterns, and guidelines. This system ensures consistency across all 3DMark products while enabling faster development cycles, better collaboration between teams, and improved accessibility standards. By establishing a shared design language, we've created a scalable foundation that supports our growing ecosystem while maintaining the high-quality user experience our users expect.`,p=`**Inconsistent Design Patterns & Scalability Challenges**

Our product portfolio had grown significantly, with multiple teams working on different features and platforms. This led to:

- **Inconsistent UI patterns** across different products and features
- **Duplicated design work** as teams created similar components independently
- **Maintenance overhead** when design changes needed to be applied across multiple products
- **Poor developer experience** with no standardized component library
- **Accessibility gaps** due to inconsistent implementation of design patterns

We needed a centralized design system that would provide consistent, reusable components while maintaining flexibility for different use cases.`,m=`**Technical & Business Constraints**

**Platform Diversity:** The design system needed to work across web, mobile, and desktop applications with different technical requirements.

**Team Collaboration:** Multiple design and development teams needed to contribute to and use the system effectively.

**Performance Requirements:** Components needed to be lightweight and performant across all platforms.

**Accessibility Standards:** Full WCAG 2.1 AA compliance was required for all components.

**Backward Compatibility:** Existing products needed to be gradually migrated without breaking changes.

**Documentation Needs:** Comprehensive documentation was essential for adoption across teams.`,g=["**Component-First Architecture:** Built the system around reusable, composable components rather than page templates","**Design Token Foundation:** Established a comprehensive design token system for colors, typography, spacing, and other design values","**Accessibility-First Approach:** Made accessibility a core requirement for all components, not an afterthought","**Comprehensive Documentation:** Created detailed documentation with examples, usage guidelines, and code snippets"," **Version Control Strategy:** Implemented semantic versioning for the design system to manage breaking changes","**Design-Development Collaboration:** Established regular sync meetings between design and development teams"],u=`**Measurable Impact & Adoption Success**

**Design Consistency:** Achieved 95% consistency in UI patterns across all products, reducing design debt by 60%.

**Development Efficiency:** Component library reduced development time by 40% for new features and 70% for common UI patterns.

**Accessibility Improvement:** Achieved 100% WCAG 2.1 AA compliance across all components, improving accessibility scores by 85%.

**Team Productivity:** Design system adoption led to 50% reduction in design review cycles and 30% faster feature delivery.

**Maintenance Reduction:** Centralized components reduced maintenance overhead by 65% compared to duplicated implementations.

**Developer Satisfaction:** 90% of developers reported improved productivity and satisfaction with the standardized component library.

**Cross-Platform Consistency:** Successfully maintained consistent design language across web, mobile, and desktop applications.`,y=`**Design Philosophy & Core Principles**

Our design system is built on a foundation of clear principles that guide every decision and component creation:

**User-Centered Design:** Every component prioritizes user needs and accessibility, ensuring inclusive experiences for all users.

**Consistency & Predictability:** Components follow established patterns that users can learn once and apply everywhere.

**Scalability & Maintainability:** The system grows with our products while remaining easy to maintain and update.

**Performance & Efficiency:** Components are optimized for speed and efficiency across all platforms and devices.

**Flexibility & Adaptability:** The system accommodates different use cases while maintaining design integrity.

**Documentation & Education:** Comprehensive documentation ensures consistent implementation and adoption.`,h=`**Core Design Tokens & Foundational Elements**

Design tokens form the atomic foundation of our system, ensuring consistency across all components:

**Color Tokens:**
- Primary, secondary, and accent color palettes
- Semantic colors for success, warning, error states
- Neutral grays for text, backgrounds, and borders
- Dark mode color mappings

**Typography Tokens:**
- Font families and weights
- Line heights and letter spacing
- Responsive font sizing scales
- Text color and contrast ratios

**Spacing Tokens:**
- Consistent spacing scale (4px base unit)
- Margin and padding values
- Component spacing guidelines
- Layout grid spacing

**Border & Shadow Tokens:**
- Border radius values
- Border widths and styles
- Shadow depths and blur values
- Focus state indicators`,f=`**WCAG Guidelines & Accessibility Standards**

Accessibility is not an afterthought but a core requirement of our design system:

**Color & Contrast:**
- All color combinations meet WCAG 2.1 AA contrast ratios
- Color is never the only way to convey information
- Focus states are clearly visible and distinct

**Typography & Readability:**
- Minimum font sizes for readability
- Adequate line spacing and letter spacing
- High contrast text on backgrounds
- Scalable text that works with browser zoom

**Keyboard Navigation:**
- All interactive elements are keyboard accessible
- Logical tab order through components
- Clear focus indicators
- Skip links for complex interfaces

**Screen Reader Support:**
- Semantic HTML structure
- Proper ARIA labels and roles
- Alternative text for images
- Descriptive link text

**Motion & Animation:**
- Respect user's motion preferences
- Provide pause/stop controls for animations
- Ensure animations don't cause seizures
- Clear loading states and progress indicators`,b=`**Font System & Typography Hierarchy**

Our typography system ensures consistent, readable text across all platforms:

**Font Families:**
- Primary: Inter for UI elements and body text
- Secondary: Work Sans for headings and display text
- Monospace: JetBrains Mono for code and technical content

**Type Scale:**
- Display: 48px/60px for hero headlines
- H1: 32px/40px for page titles
- H2: 24px/32px for section headers
- H3: 20px/28px for subsection headers
- H4: 18px/24px for component titles
- Body: 16px/24px for main content
- Small: 14px/20px for captions and metadata
- XSmall: 12px/16px for fine print

**Font Weights:**
- Light (300) for subtle emphasis
- Regular (400) for body text
- Medium (500) for labels and buttons
- Semibold (600) for headings
- Bold (700) for strong emphasis

**Line Heights & Spacing:**
- Consistent line height ratios (1.5 for body, 1.25 for headings)
- Proper letter spacing for readability
- Adequate paragraph spacing
- Responsive scaling for different screen sizes`,v=`**UI Components Library**

Our component library provides reusable, accessible building blocks for all interfaces:

**Navigation Components:**
- Header with logo, navigation, and user menu
- Sidebar with collapsible sections
- Breadcrumb navigation
- Pagination controls
- Tab navigation

**Form Components:**
- Text inputs with validation states
- Select dropdowns with search
- Checkbox and radio button groups
- Date and time pickers
- File upload components

**Feedback Components:**
- Alert messages for different states
- Toast notifications
- Progress indicators
- Loading spinners
- Empty state illustrations

**Data Display:**
- Data tables with sorting and filtering
- Charts and graphs
- Status badges and tags
- Avatar components
- Icon system

**Interactive Elements:**
- Primary and secondary buttons
- Icon buttons and button groups
- Modal dialogs and overlays
- Tooltips and popovers
- Accordion and collapsible sections

**Layout Components:**
- Card containers with headers and actions
- Grid layouts with responsive behavior
- Split panels and sidebars
- Hero sections and banners
- Footer components`,C=`**Code Examples & Technical Implementation**

Our design system provides comprehensive implementation guidelines and code examples:

**Component Architecture:**
\`\`\`jsx
// Example: Button component with variants
const Button = ({ variant = 'primary', size = 'medium', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

**Design Token Implementation:**
\`\`\`css
/* CSS Custom Properties for Design Tokens */
:root {
  /* Colors */
  --color-primary: #0066CC;
  --color-success: #00AA44;
  --color-warning: #FF6600;
  --color-error: #CC0000;
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.5;
  
  /* Spacing */
  --spacing-unit: 4px;
  --spacing-xs: calc(var(--spacing-unit) * 1);
  --spacing-sm: calc(var(--spacing-unit) * 2);
  --spacing-md: calc(var(--spacing-unit) * 4);
  --spacing-lg: calc(var(--spacing-unit) * 6);
  --spacing-xl: calc(var(--spacing-unit) * 8);
}
\`\`\`

**Accessibility Implementation:**
\`\`\`jsx
// Example: Accessible form field
const FormField = ({ label, error, required, children }) => (
  <div className="form-field">
    <label className="block text-sm font-medium mb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-sm text-red-600 mt-1" role="alert">
        {error}
      </p>
    )}
  </div>
);
\`\`\`

**Responsive Design Patterns:**
\`\`\`css
/* Mobile-first responsive design */
.component {
  padding: var(--spacing-sm);
  font-size: var(--font-size-base);
}

@media (min-width: 768px) {
  .component {
    padding: var(--spacing-md);
    font-size: var(--font-size-lg);
  }
}
\`\`\``,x={title:n,subtext:e,slug:s,banner:t,screenshots:a,appendices:i,timeSpent:o,role:r,industries:c,productName:l,summary:d,problem:p,constraints:m,keyDecisions:g,outcomes:u,Principles:y,Fundamental:h,Accessibility:f,"Color Palette":`**Brand Colors & Color System**

Our color system provides a comprehensive palette that supports both light and dark themes:

**Primary Colors:**
- Brand blue (#0066CC) for primary actions and links
- Brand green (#00AA44) for success states
- Brand orange (#FF6600) for warnings
- Brand red (#CC0000) for errors

**Neutral Colors:**
- Pure white (#FFFFFF) and pure black (#000000)
- Gray scale from 50 to 900 for backgrounds and text
- Consistent contrast ratios for accessibility

**Semantic Colors:**
- Success: Green variations for positive feedback
- Warning: Orange variations for caution states
- Error: Red variations for error messages
- Info: Blue variations for informational content

**Usage Guidelines:**
- Primary colors for main actions and branding
- Neutral colors for backgrounds and text
- Semantic colors for specific states and feedback
- Consistent application across all components

**Dark Mode Support:**
- Automatic color inversion for dark themes
- Maintained contrast ratios in both modes
- Consistent semantic meaning across themes`,Typography:b,"Spacing & Layout":`**Grid System & Spacing Standards**

Our spacing system provides consistent layout and alignment across all components:

**Base Unit:**
- 4px base unit for all spacing calculations
- Ensures consistent scaling and alignment
- Works well with common screen densities

**Spacing Scale:**
- 4px (0.25rem) for tight spacing
- 8px (0.5rem) for component padding
- 16px (1rem) for section spacing
- 24px (1.5rem) for major sections
- 32px (2rem) for page sections
- 48px (3rem) for page margins
- 64px (4rem) for hero sections

**Grid System:**
- 12-column grid for desktop layouts
- 8-column grid for tablet layouts
- 4-column grid for mobile layouts
- Consistent gutters and margins
- Responsive breakpoints at 768px, 1024px, 1440px

**Component Spacing:**
- Consistent padding within components
- Proper margins between components
- Alignment with grid system
- Responsive spacing adjustments

**Layout Patterns:**
- Card layouts with consistent padding
- Form layouts with proper field spacing
- Navigation spacing and alignment
- Content hierarchy and visual rhythm`,Components:v,Implementation:C};export{f as Accessibility,v as Components,h as Fundamental,C as Implementation,y as Principles,b as Typography,i as appendices,t as banner,m as constraints,x as default,c as industries,g as keyDecisions,u as outcomes,p as problem,l as productName,r as role,a as screenshots,s as slug,e as subtext,d as summary,o as timeSpent,n as title};

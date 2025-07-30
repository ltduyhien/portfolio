import React from 'react';

import ExperienceCard from '../components/ExperienceCard';

const About = () => {
  return (
    <div className="container-custom px-8 pt-24 pb-16 md:pt-8 md:pb-16">
      <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white leading-relaxed">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Hien Le - Senior Product Designer"
            className="max-w-48 rounded-lg border border-zinc-200 dark:border-zinc-700"
          />
        </div>
        <div className="flex-1">
          <p className="mb-4 text-base font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed">
            I am a Senior Product Designer with over 13 years of experience in SaaS and technical
            products, based in Espoo, Finland. My journey started with coding and evolved into
            design when I realized I could bridge the gap between technical complexity and user
            needs. My work focuses on turning complex technical systems into intuitive digital
            experiences that drive real business outcomes.
          </p>
          <p className="text-base font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed">
            My background in software development gives me a unique perspective on product design.
            Having written code and built systems myself, I understand the technical constraints and
            possibilities that developers face. This knowledge helps me create designs that are not
            only user-friendly but also technically feasible and maintainable. When I design
            interfaces for complex systems, I can anticipate implementation challenges and work
            closely with engineering teams to find practical solutions that balance user needs with
            technical requirements.
          </p>
        </div>
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
          <li>
            Contributed to Nokia's enterprise analytics platform before transitioning to focus on
            benchmarking and performance tools at UL Solutions
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard title="Lead UX Designer - Tuxera Oy" date="2012 - 2021">
        <p>
          Led product design and development across multiple platforms and technologies, growing
          from UX Engineer to Lead Designer over 9 years:
        </p>
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
      <h3 className="text-xl font-medium mb-4 mt-8 text-zinc-900 dark:text-white">Education</h3>
      <ExperienceCard
        title="Metropolia University of Applied Sciences"
        date="2007 - 2011"
        expandLock={false}
      >
        <p>Bachelor Degree in IT</p>
        <p className="mt-2 text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
          Major in Information Systems with focus on software development, database
          management, and system architecture. The program covered web technologies, user interface
          design, and enterprise software solutions, providing a strong foundation for technical
          product design and development.
        </p>
      </ExperienceCard>
      <ExperienceCard
        title="Foundations of User Experience Design"
        date="Google Certificate Program"
        expandLock={false}
      >
        <p>Google Certificate Program</p>
        <p className="mt-2 text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
          Comprehensive UX design certification covering user research, wireframing, prototyping, and usability testing. The program included hands-on projects focused on creating user-centered design solutions, conducting user interviews, and developing interactive prototypes. This certification strengthened my understanding of design thinking methodologies and user experience best practices.
        </p>
      </ExperienceCard>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white">
          Looking to learn more about my work and experience?
        </h3>
        <p className="mb-2 text-base font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed">
          You can download my full CV below for a detailed look at the roles I've held, the projects
          I've led, and the impact I've made.
        </p>
        <p className="mb-8 text-base font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed">
          If you think my background could be a good fit for your team or project, I'd love to hear
          from you. Whether it's a full-time opportunity, freelance collaboration, or something in
          between—feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <a
            href="/cv_hien.pdf"
            download
            className="inline-flex items-center justify-center bg-brand text-white dark:text-black font-medium text-base px-6 [border-radius:4px_/_4px] w-full md:w-auto"
            style={{ height: 42, fontSize: 16 }}
          >
            Download my CV
          </a>
          <a
            href="https://www.linkedin.com/in/hienl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-zinc-600 dark:bg-zinc-700 text-white font-medium text-base px-6 [border-radius:4px_/_4px] w-full md:w-auto"
            style={{ height: 42, fontSize: 16 }}
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:letranduyhien@gmail.com"
            className="inline-flex items-center justify-center bg-zinc-600 dark:bg-zinc-700 text-white font-medium text-base px-6 [border-radius:4px_/_4px] w-full md:w-auto"
            style={{ height: 42, fontSize: 16 }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

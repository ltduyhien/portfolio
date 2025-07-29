import React from 'react';

const githubProjects = [
  {
    title: 'Git Hub Project Title',
    description: 'Project description could be a bit long like this',
  },
  {
    title: 'Git Hub Project Title',
    description: 'Project description could be a bit long like this',
  },
  {
    title: 'Git Hub Project Title',
    description: 'Project description could be a bit long like this',
  },
  {
    title: 'Git Hub Project Title',
    description: 'Project description could be a bit long like this',
  },
];

const Github = () => (
  <div className="container-custom px-8 pt-24 pb-16 md:pt-8 md:pb-16 max-w-2xl mx-auto">
    <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Github: ltduyhien</h2>
    <p className="mb-6 text-base font-medium text-zinc-700 dark:text-zinc-200 leading-relaxed">
      I help turn complex technical systems into intuitive digital experiences that drive real
      business outcomes, whether it is reducing onboarding time, improving conversion, or enabling
      data-driven decision-making.
    </p>
    <a
      href="https://github.com/ltduyhien"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-brand text-white dark:text-black font-medium text-base px-6 mb-8 [border-radius:4px_/_4px] w-full md:w-auto"
      style={{ height: 42, fontSize: 16 }}
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
        />
      </svg>
      Visit my GitHub
    </a>
    <div className="flex flex-col gap-6">
      {githubProjects.map((project, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div
            className="bg-zinc-700 dark:bg-zinc-800 flex-shrink-0 [border-radius:6px_/_6px]"
            style={{ width: 142, height: 80 }}
          />
          <div className="flex flex-col justify-center">
            <span className="text-base font-bold text-zinc-900 dark:text-white leading-tight mb-1">
              {project.title}
            </span>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
              {project.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Github;

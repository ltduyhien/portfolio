import React from 'react';

import Chip from './Chip';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
};

const ProjectCard = ({ title, subtitle, tags, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col md:flex-row gap-4 [border-radius:4px_/_4px] transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-36 flex items-center justify-center overflow-hidden [border-radius:4px_/_4px]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Project preview"
            className="object-cover w-full h-full [border-radius:6px_/_6px] border-2 border-zinc-200 dark:border-zinc-700"
          />
        ) : (
          <span className="text-zinc-400 dark:text-zinc-300">Project preview</span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between gap-2 py-2">
        <h3 className="text-base font-bold leading-normal text-zinc-900 dark:text-white mb-0">
          {title}
        </h3>
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-2">{subtitle}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

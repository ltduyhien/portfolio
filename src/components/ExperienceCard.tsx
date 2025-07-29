import React from 'react';

import CollapsibleSection from './CollapsibleSection';

interface ExperienceCardProps {
  title: string;
  date: string;
  children: React.ReactNode;
  expandLock?: boolean;
}

const ExperienceCard = ({ title, date, children, expandLock = false }: ExperienceCardProps) => {
  return (
    <CollapsibleSection title={title} subtext={date} expandLock={expandLock}>
      <div className="pb-4">{children}</div>
    </CollapsibleSection>
  );
};

export default ExperienceCard;

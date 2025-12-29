import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export const ProjectGrid = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

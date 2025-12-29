import { useNavigate } from 'react-router-dom';
import type { Project } from '../types/project';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className={cn(
        // Card base styling
        "group relative cursor-pointer overflow-hidden rounded-xl",
        "bg-card border border-border shadow-md",
        // Hover effect: pop-up with accent border
        "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary",
        // Flex column layout
        "flex flex-col"
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top Half: Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover",
            // Subtle zoom on hover
            "transition-transform duration-300 group-hover:scale-105"
          )}
          loading="lazy"
        />
      </div>

      {/* Bottom Half: Content Section */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        {/* Tags Section - Top of content area */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                "bg-accent text-secondary-foreground",
                "border border-border/50",
                "transition-colors duration-200 group-hover:bg-secondary group-hover:border-secondary"
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Description */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/70 line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
};

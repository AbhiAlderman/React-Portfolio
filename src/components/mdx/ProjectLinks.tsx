import { ExternalLink, Github, Presentation } from 'lucide-react';

interface ProjectLinksProps {
  demo?: string;
  demoButtonText?: string;
  github?: string;
  slides?: string;
  presentation?: string;
}

export const ProjectLinks = ({ demo, demoButtonText = 'View Demo', github, slides, presentation }: ProjectLinksProps) => (
  <div className="flex flex-wrap gap-4 justify-center my-8">
    {demo && (
      <a
        href={demo}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={18} />
        {demoButtonText}
      </a>
    )}
    {github && (
      <a
        href={github}
        className="px-6 py-3 border-2 border-border rounded-lg hover:bg-card transition-all flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={18} />
        GitHub
      </a>
    )}
    {(slides || presentation) && (
      <a
        href={slides || presentation}
        className="px-6 py-3 border-2 border-border rounded-lg hover:bg-card transition-all flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Presentation size={18} />
        Slides
      </a>
    )}
  </div>
);

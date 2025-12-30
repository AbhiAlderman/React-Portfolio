interface ProjectCaptionProps {
  children: React.ReactNode;
}

export const ProjectCaption = ({ children }: ProjectCaptionProps) => (
  <p className="text-center text-sm italic text-foreground/60 mt-2 mb-8">
    {children}
  </p>
);

interface ProjectTLDRProps {
  children: React.ReactNode;
}

export const ProjectTLDR = ({ children }: ProjectTLDRProps) => (
  <div className="max-w-[700px] mx-auto my-8 p-6 border-l-4 border-primary bg-accent/5 rounded-r-lg">
    {children}
  </div>
);

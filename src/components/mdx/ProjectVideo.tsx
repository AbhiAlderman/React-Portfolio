interface ProjectVideoProps {
  src: string;
  type?: 'local' | 'youtube' | 'vimeo';
  caption?: string;
  maxWidth?: 'text' | 'medium' | 'full';
}

export const ProjectVideo = ({ src, type = 'youtube', caption, maxWidth = 'medium' }: ProjectVideoProps) => {
  const widthClass = {
    text: 'max-w-[700px]',
    medium: 'max-w-[900px]',
    full: 'max-w-full'
  }[maxWidth];

  return (
    <figure className={`${widthClass} mx-auto my-8`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {type === 'local' ? (
          <video src={src} controls className="absolute inset-0 w-full h-full rounded-lg" />
        ) : (
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm italic text-foreground/60 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

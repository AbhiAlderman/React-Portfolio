interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  maxWidth?: 'text' | 'medium' | 'full'; // 700px | 900px | 100%
}

export const ProjectImage = ({ src, alt, caption, maxWidth = 'medium' }: ProjectImageProps) => {
  const widthClass = {
    text: 'max-w-[700px]',
    medium: 'max-w-[900px]',
    full: 'max-w-full'
  }[maxWidth];

  return (
    <figure className={`${widthClass} mx-auto my-8`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-center text-sm italic text-foreground/60 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

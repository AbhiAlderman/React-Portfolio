import type { MDXComponents } from 'mdx/types';
import { ProjectImage } from './ProjectImage';
import { ProjectVideo } from './ProjectVideo';
import { ProjectLinks } from './ProjectLinks';
import { ProjectTLDR } from './ProjectTLDR';
import { ProjectCaption } from './ProjectCaption';
import { ProjectDivider } from './ProjectDivider';

export const mdxComponents: MDXComponents = {
  ProjectImage,
  ProjectVideo,
  ProjectLinks,
  ProjectTLDR,
  ProjectCaption,
  ProjectDivider,

  // Override HTML elements with Tailwind styling
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-semibold mt-12 mb-4 text-foreground">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>,
  p: ({ children }) => <p className="mb-4 text-base leading-relaxed text-foreground">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 pl-6 list-disc space-y-2 text-foreground">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 pl-6 list-decimal space-y-2 text-foreground">{children}</ol>,
  a: ({ href, children }) => (
    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-foreground/70">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-accent/10 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto mb-4">
      {children}
    </pre>
  ),
};

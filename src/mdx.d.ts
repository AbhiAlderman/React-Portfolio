declare module '*.mdx' {
  import { ComponentType } from 'react';

  export const frontmatter: {
    title: string;
    date?: string;
    institution?: string;
    tags?: string[];
    heroImage?: string;
    heroCaption?: string;
    [key: string]: any;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}

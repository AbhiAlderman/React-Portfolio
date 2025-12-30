import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/mdx/MDXComponents';
import { NavBar } from '../components/NavBar';
import { ThemeToggle } from '../components/ThemeToggle';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [MDXContent, setMDXContent] = useState<any>(null);
  const [frontmatter, setFrontmatter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        const module = await import(`../data/projects/${id}.mdx`);
        setMDXContent(() => module.default);
        setFrontmatter(module.frontmatter);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadMDX();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (notFound) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen">
      <NavBar />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{frontmatter?.title}</h1>
          {frontmatter?.date && (
            <p className="text-sm text-foreground/60 mb-4">{frontmatter.date}</p>
          )}
          {frontmatter?.tags && (
            <div className="flex flex-wrap gap-2 justify-center">
              {frontmatter.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-accent rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <MDXProvider components={mdxComponents}>
          <div className="prose-custom">
            {MDXContent && <MDXContent />}
          </div>
        </MDXProvider>
      </article>
    </div>
  );
};

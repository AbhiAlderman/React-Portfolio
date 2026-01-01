import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/mdx/MDXComponents';
import { NavBar } from '../components/NavBar';
import { projects } from '../data/projects';
import { ProjectLinks } from '../components/mdx/ProjectLinks';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [MDXContent, setMDXContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        const module = await import(`../data/projects/${id}.mdx`);
        setMDXContent(() => module.default);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadMDX();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (notFound || !project) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen">
      <NavBar />
      <article className="max-w-4xl mx-auto px-6 py-22">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          {project.tags && (
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(project.date || project.institution) && (
            <p className="text-sm text-foreground/60 mb-2">
              {[project.date, project.institution].filter(Boolean).join(' • ')}
            </p>
          )}
        {(project.demoUrl || project.githubUrl || project.slidesUrl || project.presentationUrl) && (
          <div className="mb-2">
            <ProjectLinks
              demo={project.demoUrl}
              github={project.githubUrl}
              slides={project.slidesUrl || project.presentationUrl}
            />
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

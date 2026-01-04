import { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

type SortOption = 'featured' | 'date-desc' | 'date-asc';

// Sort projects based on selected option
const sortProjects = (projects: Project[], sortBy: SortOption): Project[] => {
  if (sortBy === 'featured') {
    return [...projects]; // Return original order
  }

  return [...projects].sort((a, b) => {
    // ISO date strings (YYYY-MM-DD) are lexicographically sortable
    const dateA = a.effectiveDate;
    const dateB = b.effectiveDate;

    if (sortBy === 'date-desc') {
      return dateB.localeCompare(dateA); // Newest first
    } else {
      return dateA.localeCompare(dateB); // Oldest first
    }
  });
};

export const ProjectGrid = () => {
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  const sortedProjects = useMemo(
    () => sortProjects(projects, sortOption),
    [sortOption]
  );

  return (
    <div className="w-full space-y-6">
      {/* Sort Controls */}
      <div className="flex justify-center items-center gap-3">
        <label htmlFor="project-sort" className="text-sm font-medium text-foreground/70">
          Sort by:
        </label>
        <select
          id="project-sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as SortOption)}
          className="px-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-medium cursor-pointer transition-colors hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="featured">Featured</option>
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

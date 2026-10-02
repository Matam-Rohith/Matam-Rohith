import React, { useState, useEffect, useMemo } from 'react';
import { ALL_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Search, 
  Code, 
  Copy, 
  Check, 
  Star, 
  GitFork, 
  LayoutGrid, 
  List, 
  ArrowUpDown,
  RefreshCw
} from 'lucide-react';

interface GitHubApiRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'language'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);
  const [liveRepoData, setLiveRepoData] = useState<Record<string, GitHubApiRepo>>({});
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Fetch live public repository stats from GitHub API
  useEffect(() => {
    let isMounted = true;
    const fetchGitHubRepos = async () => {
      setIsSyncing(true);
      try {
        const res = await fetch('https://api.github.com/users/Matam-Rohith/repos?per_page=100');
        if (res.ok) {
          const data: GitHubApiRepo[] = await res.json();
          if (isMounted) {
            const map: Record<string, GitHubApiRepo> = {};
            data.forEach((repo) => {
              map[repo.name.toLowerCase()] = repo;
            });
            setLiveRepoData(map);
          }
        }
      } catch (err) {
        // Graceful fallback to local data if rate limited or offline
        console.warn('GitHub API offline or rate-limited; using cached profile data', err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    };

    fetchGitHubRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  const copyCloneCommand = (project: ProjectItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
    setCopiedCloneId(project.id);
    setTimeout(() => setCopiedCloneId(null), 2000);
  };

  const categories = [
    { id: 'all', label: 'All Repositories', count: ALL_PROJECTS.length },
    { id: 'fullstack', label: 'Full Stack', count: ALL_PROJECTS.filter(p => p.category === 'fullstack').length },
    { id: 'aiml', label: 'AI & Vision', count: ALL_PROJECTS.filter(p => p.category === 'aiml').length },
    { id: 'analytics', label: 'Analytics & BI', count: ALL_PROJECTS.filter(p => p.category === 'analytics').length },
    { id: 'systems', label: 'Systems & Backend', count: ALL_PROJECTS.filter(p => p.category === 'systems').length },
    { id: 'utilities', label: 'Utilities & Labs', count: ALL_PROJECTS.filter(p => p.category === 'utilities' || p.category === 'frontend').length },
  ];

  const filteredAndSortedProjects = useMemo(() => {
    let result = ALL_PROJECTS.filter((project) => {
      // Category filter
      if (selectedCategory === 'fullstack' && project.category !== 'fullstack') return false;
      if (selectedCategory === 'aiml' && project.category !== 'aiml') return false;
      if (selectedCategory === 'analytics' && project.category !== 'analytics') return false;
      if (selectedCategory === 'systems' && project.category !== 'systems') return false;
      if (selectedCategory === 'utilities' && project.category !== 'utilities' && project.category !== 'frontend') return false;

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchRepo = project.repoName.toLowerCase().includes(q);
        const matchDesc = project.description.toLowerCase().includes(q);
        const matchLang = project.language.toLowerCase().includes(q);
        const matchTech = project.tech.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchRepo && !matchDesc && !matchLang && !matchTech) return false;
      }
      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'language') {
        return a.language.localeCompare(b.language);
      }
      return 0;
    });

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#080C14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Repository Catalog ({ALL_PROJECTS.length} Projects)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects & Open Source Repositories
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Complete portfolio of full-stack services, machine learning models, computer vision utilities, and data dashboards built by Matam Rohith.
          </p>
        </div>

        {/* Filter Bar, Search & Controls */}
        <div className="space-y-3 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  selectedCategory === cat.id ? 'bg-indigo-700 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search, Sort & View Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, tech or language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {/* Sort Selector */}
              <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg">
                <ArrowUpDown className="w-3 h-3 text-slate-400" />
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-slate-200 font-medium text-xs focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-slate-900 text-slate-200">Featured</option>
                  <option value="name" className="bg-slate-900 text-slate-200">Name (A-Z)</option>
                  <option value="language" className="bg-slate-900 text-slate-200">Language</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded text-xs ${
                    viewMode === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Grid View"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded text-xs ${
                    viewMode === 'list' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="List View"
                  aria-label="List view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>

              {isSyncing && (
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span className="hidden md:inline">Syncing GitHub...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredAndSortedProjects.map((project) => {
              const liveData = liveRepoData[project.repoName.toLowerCase()];
              const stars = liveData ? liveData.stargazers_count : project.stars || 0;
              const forks = liveData ? liveData.forks_count : 0;

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="flex flex-col justify-between rounded-xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 p-5 transition-all cursor-pointer group"
                >
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: project.languageColor }}
                        />
                        <span className="text-xs font-mono text-slate-300">
                          {project.language}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {stars > 0 && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400" />
                            {stars}
                          </span>
                        )}
                        {forks > 0 && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                            <GitFork className="w-3 h-3" />
                            {forks}
                          </span>
                        )}
                        {project.demoUrl ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Live
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-500 uppercase">
                            Repo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors mb-1.5">
                      {project.title}
                    </h3>

                    {/* Repo slug */}
                    <p className="text-[11px] font-mono text-slate-400 mb-2.5">
                      Matam-Rohith/{project.repoName}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                    <button
                      onClick={(e) => copyCloneCommand(project, e)}
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="Copy git clone command"
                    >
                      {copiedCloneId === project.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Cloned</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>git clone</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                        title="GitHub Source"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-white bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium shadow-sm"
                          title="Open Live App"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List / Table View */
          <div className="rounded-xl border border-slate-800 bg-[#0D1117] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#161B22] text-slate-400 font-mono">
                    <th className="py-3 px-4 font-semibold">Repository</th>
                    <th className="py-3 px-4 font-semibold">Language</th>
                    <th className="py-3 px-4 font-semibold hidden md:table-cell">Description</th>
                    <th className="py-3 px-4 font-semibold hidden sm:table-cell">Technologies</th>
                    <th className="py-3 px-4 font-semibold text-right">Links</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredAndSortedProjects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className="hover:bg-slate-900/60 cursor-pointer transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span>{project.title}</span>
                          {project.featured && (
                            <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-1.5 py-0.2 rounded border border-indigo-800/60">
                              featured
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 block font-normal">
                          {project.repoName}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: project.languageColor }}
                          />
                          {project.language}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-slate-400 max-w-xs truncate hidden md:table-cell">
                        {project.description}
                      </td>

                      <td className="py-3.5 px-4 hidden sm:table-cell">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="font-mono text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                            title="GitHub Code"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredAndSortedProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-xl border border-slate-800">
            <Code className="w-6 h-6 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 text-sm font-medium">No projects matched your criteria</p>
            <p className="text-slate-500 text-xs mt-1">Try clearing your search term or switching category filters.</p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

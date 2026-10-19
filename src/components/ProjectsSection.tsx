import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  Award, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud', label: 'Cloud & Azure' },
    { id: 'real-time', label: 'Real-Time & Caching' },
    { id: 'ai', label: 'AI & Copilot' },
    { id: 'enterprise', label: 'Enterprise & Connectors' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-term-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03. Production Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
              Production systems built for enterprise clients at Accenture. Click on any project to inspect its architecture components and data flow pipeline.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-term-surface border border-term-border">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all ${
                  selectedCategory === c.id
                    ? 'bg-term-accent text-slate-950 font-semibold shadow-glow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-term-panel'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-term-border bg-term-surface/90 hover:border-term-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/5 overflow-hidden"
            >
              <div className="p-6">
                
                {/* Top Meta: Category & Timeline & Award */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-term-panel border border-term-border text-term-accent text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-term-muted">{project.timeline}</span>
                </div>

                {/* Award Badge if present */}
                {project.award && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.award}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-term-accent transition-colors font-sans mb-2">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                  {project.summary}
                </p>

                {/* Bullet Highlights (2 key points) */}
                <ul className="space-y-1.5 text-xs text-slate-400 mb-5 font-sans">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-term-green mt-0.5">❯</span>
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-term-panel border border-term-border/70 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-term-panel/50 text-term-muted text-[10px] font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Card Action */}
              <div className="p-4 bg-term-panel/60 border-t border-term-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-term-muted">Enterprise System</span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-term-accent hover:text-cyan-300 font-semibold group/btn"
                >
                  <Layers className="w-3.5 h-3.5 text-term-accent group-hover/btn:rotate-12 transition-transform" />
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for detailed inspection */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};

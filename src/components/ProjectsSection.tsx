import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, Github, ExternalLink, Award } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Featured Projects & Open Source
            </h2>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View all on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-shadow hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Meta Badge & Timeline */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      {proj.category}
                    </span>
                    {proj.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{proj.timeline}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>{proj.title}</span>
                  {proj.award && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold">
                      <Award className="w-3 h-3 text-amber-600" />
                      {proj.award}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Tech Pills & GitHub Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-slate-400 text-[10px] font-mono">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors shrink-0"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

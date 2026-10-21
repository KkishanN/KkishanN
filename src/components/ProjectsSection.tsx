import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { FolderGit2, Briefcase, Code2, Github, Award } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'personal'>('all');

  const showWork = activeTab === 'all' || activeTab === 'work';
  const showPersonal = activeTab === 'all' || activeTab === 'personal';

  const renderProjectCard = (proj: Project) => {
    return (
      <div
        key={proj.id}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group"
      >
        <div>
          {/* Top Context & Timeline */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {proj.clientOrContext}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                proj.projectType === 'work'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                {proj.badge}
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono shrink-0">{proj.timeline}</span>
          </div>

          {/* Title & Role */}
          <div className="mb-2.5">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
              {proj.title}
            </h4>
            {proj.role && (
              <p className="text-xs font-semibold text-blue-600 mt-0.5">{proj.role}</p>
            )}
          </div>

          {/* Award Badge if present */}
          {proj.award && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
              <span>{proj.award}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {proj.description}
          </p>

          {/* Key Highlights */}
          {proj.highlights && proj.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-slate-600">
              {proj.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-sm shrink-0 leading-5" aria-hidden="true">›</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer: Tech Stack + Links */}
        <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {proj.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-slate-700 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-all shrink-0 shadow-2xs hover:shadow-xs"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Segregation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Enterprise client solutions at Accenture & graduate systems research in Approximate Computing
              </p>
            </div>
          </div>

          {/* Segmented Filter Control */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-200 self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.workProjects.length + PORTFOLIO_DATA.personalProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'work'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3 h-3" />
              <span>Enterprise ({PORTFOLIO_DATA.workProjects.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'personal'
                  ? 'bg-white text-emerald-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Research & Systems ({PORTFOLIO_DATA.personalProjects.length})</span>
            </button>
          </div>
        </div>

        {/* 1. Work & Enterprise Projects Subsection */}
        {showWork && (
          <div className="mb-12">
            {activeTab === 'all' && (
              <div className="flex items-center gap-2 mb-5 pb-2.5 border-b border-slate-200">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Enterprise Client Work (Accenture)
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PORTFOLIO_DATA.workProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* 2. Personal & Academic Research Subsection */}
        {showPersonal && (
          <div>
            {activeTab === 'all' && (
              <div className="flex items-center gap-2 mb-5 pb-2.5 border-b border-slate-200">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Graduate Research & Systems (Universität Paderborn)
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PORTFOLIO_DATA.personalProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { FolderGit2, Briefcase, Code2, Github, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'personal'>('all');

  const showWork = activeTab === 'all' || activeTab === 'work';
  const showPersonal = activeTab === 'all' || activeTab === 'personal';

  const renderProjectCard = (proj: Project) => (
    <div
      key={proj.id}
      className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Top Context & Timeline */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              {proj.clientOrContext}
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
              proj.projectType === 'work'
                ? 'bg-blue-50 text-blue-700 border-blue-100'
                : 'bg-emerald-50 text-emerald-700 border-emerald-100'
            }`}>
              {proj.badge}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono shrink-0">{proj.timeline}</span>
        </div>

        {/* Title & Award */}
        <div className="mb-2">
          <h4 className="text-base font-bold text-slate-900 leading-snug">
            {proj.title}
          </h4>
          {proj.role && (
            <p className="text-xs text-blue-600 font-medium mt-0.5">{proj.role}</p>
          )}
        </div>

        {proj.award && (
          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{proj.award}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
          {proj.description}
        </p>

        {/* Key Highlights */}
        {proj.highlights && proj.highlights.length > 0 && (
          <ul className="space-y-1 mb-4 text-xs text-slate-600">
            {proj.highlights.map((h, hIdx) => (
              <li key={hIdx} className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold mt-0.5">›</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: Tech Stack + Links */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <div className="flex flex-wrap gap-1">
          {proj.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-mono"
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
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors shrink-0 shadow-2xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-12 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Segregation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Segregated by enterprise client work and personal open-source projects
              </p>
            </div>
          </div>

          {/* Segmented Filter Control */}
          <div className="inline-flex p-1 rounded-lg bg-slate-200/80 border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.workProjects.length + PORTFOLIO_DATA.personalProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'work'
                  ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3 h-3" />
              <span>Work ({PORTFOLIO_DATA.workProjects.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'personal'
                  ? 'bg-white text-emerald-700 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Personal ({PORTFOLIO_DATA.personalProjects.length})</span>
            </button>
          </div>
        </div>

        {/* 1. Work & Enterprise Projects Subsection */}
        {showWork && (
          <div className="mb-10">
            {activeTab === 'all' && (
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Enterprise Work Projects (Accenture)
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.workProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* 2. Personal & Open-Source Projects Subsection */}
        {showPersonal && (
          <div>
            {activeTab === 'all' && (
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Personal & Academic Projects (GitHub)
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.personalProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

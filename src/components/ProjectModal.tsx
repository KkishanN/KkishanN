import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Award, CheckCircle, ArrowRight, Layers, Cpu, Server, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-term-surface border border-term-border shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-term-panel border-b border-term-border flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-term-surface border border-term-border text-term-accent text-[11px] font-mono">
                {project.category.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-term-muted">{project.timeline}</span>
              {project.award && (
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-semibold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {project.award}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">{project.title}</h3>
            <p className="text-xs text-term-muted font-mono mt-0.5">Enterprise Client Project @ {project.company}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-term-surface border border-term-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold mb-2">
              Executive Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.summary}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold mb-2.5">
              Key Engineering Accomplishments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-term-green font-bold shrink-0 mt-0.5">✔</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Breakdown */}
          <div className="p-4 rounded-xl bg-term-panel/60 border border-term-border space-y-4">
            <div>
              <h4 className="text-xs font-mono text-term-accent uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                System Architecture & Design Pattern
              </h4>
              <p className="text-xs text-slate-300">
                {project.architecture.overview}
              </p>
            </div>

            {/* Architecture Components */}
            <div>
              <p className="text-[11px] font-mono text-term-muted mb-2 font-semibold">Core Components:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {project.architecture.components.map((c, idx) => (
                  <div key={idx} className="p-2 rounded bg-term-surface border border-term-border/80 text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-term-accent" />
                    <span className="text-[11px]">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Flow Steps */}
            <div>
              <p className="text-[11px] font-mono text-term-muted mb-2 font-semibold">Data Flow Pipeline:</p>
              <div className="space-y-1.5 text-xs font-mono">
                {project.architecture.dataFlow.map((flow, idx) => (
                  <div key={idx} className="p-2 rounded bg-term-surface/70 border border-term-border/50 text-slate-300 text-[11px]">
                    {flow}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Chips */}
          <div>
            <h4 className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-term-accent/10 border border-term-accent/30 text-term-accent text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-term-panel border-t border-term-border flex items-center justify-between">
          <span className="text-xs font-mono text-term-muted">Enterprise Production System</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-term-surface border border-term-border hover:bg-term-panel text-slate-300 font-mono text-xs"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

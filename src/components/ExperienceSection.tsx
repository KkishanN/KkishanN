import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ChevronRight, Code } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-term-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02. Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            Enterprise Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
            Over 3.5 years of experience delivering mission-critical .NET backends, distributed caching, and cloud solutions at Accenture.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-term-border ml-3 sm:ml-6 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-term-bg border-2 border-term-accent flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-term-accent" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-term-border bg-term-surface/80 p-6 shadow-xl hover:border-term-border/80 transition-all duration-200">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-term-border/60">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                      {exp.role}
                      <span className="text-term-accent font-mono text-xs font-semibold px-2 py-0.5 rounded bg-term-panel border border-term-border">
                        @{exp.company}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                      {exp.summary}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-term-muted shrink-0 space-y-1">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-term-accent" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-term-green" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Achievements & Responsibilities */}
                <div className="pt-4 space-y-2.5">
                  <p className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold">
                    Core Technical Impact:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-term-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivered Projects Chips */}
                <div className="pt-4 mt-4 border-t border-term-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-term-muted">Delivered Projects:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj, prIdx) => (
                      <span
                        key={prIdx}
                        className="px-2.5 py-1 rounded-md bg-term-panel border border-term-border text-slate-200 text-xs font-mono"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="pt-3 mt-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-term-accent/10 border border-term-accent/30 text-term-accent text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              3+ years delivering enterprise cloud & backend engineering at Accenture
            </p>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-10">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-7 sm:pl-8 border-l-2 border-blue-100 hover:border-blue-400 transition-colors">
              {/* Dot */}
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {exp.role} <span className="text-blue-600 font-semibold">@{exp.company}</span>
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold text-sm shrink-0 leading-5" aria-hidden="true">›</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-mono font-medium hover:border-blue-200 hover:text-blue-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, ShieldCheck, Languages, MapPin } from 'lucide-react';

export const EducationAndCerts: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono shrink-0 font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-blue-600">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    {edu.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Languages */}
          <div className="space-y-10">
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Microsoft Certifications
                </h2>
              </div>

              <div className="space-y-3">
                {PORTFOLIO_DATA.certifications.map((c) => (
                  <div
                    key={c.code}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-mono font-bold text-blue-600">{c.code}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">{c.name}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      Microsoft
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_DATA.languages.map((l) => (
                  <div key={l.name} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900">{l.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{l.level}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

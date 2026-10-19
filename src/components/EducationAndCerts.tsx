import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, ShieldCheck, Languages, MapPin, Calendar } from 'lucide-react';

export const EducationAndCerts: React.FC = () => {
  return (
    <section id="education" className="py-12 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-blue-600">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Languages */}
          <div className="space-y-8">
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Microsoft Certifications
                </h2>
              </div>

              <div className="space-y-2.5">
                {PORTFOLIO_DATA.certifications.map((c) => (
                  <div
                    key={c.code}
                    className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900">{c.code}</p>
                      <p className="text-xs text-slate-600">{c.name}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Microsoft
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {PORTFOLIO_DATA.languages.map((l) => (
                  <div key={l.name} className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">{l.name}</p>
                    <p className="text-[11px] text-slate-500">{l.level}</p>
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

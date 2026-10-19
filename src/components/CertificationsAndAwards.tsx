import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Languages, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  MapPin 
} from 'lucide-react';

export const CertificationsAndAwards: React.FC = () => {
  return (
    <section id="credentials" className="py-20 relative bg-term-bg border-t border-term-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. Credentials & Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            Awards, Certifications & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
            Official Microsoft credentials, Accenture delivery awards, and ongoing graduate engineering studies at Universität Paderborn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Awards & Microsoft Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Accenture ACE Awards */}
            <div>
              <h3 className="text-sm font-mono text-term-accent uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Accenture ACE Awards for Delivery Excellence
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-term-surface border border-term-border hover:border-amber-500/40 transition-all duration-200 shadow-md relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-white text-base font-sans">{award.title}</h4>
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs shrink-0 font-semibold">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mb-2 leading-relaxed font-sans">
                      {award.description}
                    </p>
                    <p className="text-xs font-mono text-term-green flex items-center gap-1.5">
                      <span className="font-bold">Impact:</span> {award.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Microsoft Certifications Grid */}
            <div>
              <h3 className="text-sm font-mono text-term-accent uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-term-green" />
                Microsoft Certified Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div
                    key={cert.code}
                    className="p-4 rounded-xl bg-term-surface border border-term-border hover:border-term-accent/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          {cert.code}
                        </span>
                        <span className="text-[10px] font-mono text-term-muted">Microsoft</span>
                      </div>
                      <h4 className="font-bold text-xs text-white leading-snug mb-2 font-sans">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-term-border/40 text-[10px] font-mono text-term-green flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Certified Professional</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Spoken Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Cards */}
            <div>
              <h3 className="text-sm font-mono text-term-accent uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                Academic Background
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-term-surface border border-term-border hover:border-purple-500/40 transition-all shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-semibold">
                        {edu.status}
                      </span>
                      <span className="text-xs font-mono text-term-muted">{edu.period}</span>
                    </div>

                    <h4 className="font-bold text-white text-sm sm:text-base font-sans mt-1">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-xs font-mono text-term-accent mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-term-muted font-sans flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>

                    {edu.grade && (
                      <p className="text-xs font-mono text-term-green mt-2 font-semibold">
                        {edu.grade}
                      </p>
                    )}

                    <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-term-border/50">
                      {edu.tags.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-term-panel text-slate-300 text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-mono text-term-accent uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                <Languages className="w-4 h-4 text-cyan-400" />
                Spoken Languages
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_DATA.languages.map((lang) => (
                  <div key={lang.name} className="p-3 rounded-lg bg-term-surface border border-term-border">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{lang.flag}</span>
                      <span className="font-bold text-xs text-white font-sans">{lang.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">{lang.level}</p>
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

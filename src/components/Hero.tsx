import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Github, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span>{PORTFOLIO_DATA.personal.status}</span>
          <span className="text-emerald-300" aria-hidden="true">•</span>
          <span className="text-emerald-700 flex items-center gap-1 font-medium">
            <MapPin className="w-3 h-3 text-emerald-600" aria-hidden="true" />
            {PORTFOLIO_DATA.personal.location}
          </span>
        </div>

        {/* Main Header with photo and title */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 max-w-3xl">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hi, I'm {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-blue-600">
              {PORTFOLIO_DATA.personal.title}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.headline}
            </p>
          </div>

          {/* Profile Photo */}
          <div className="relative shrink-0 self-start sm:self-center">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              width="64"
              height="64"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-3 ring-blue-100 shadow-md"
            />
            <span
              className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"
              title="Available for opportunities"
              aria-label="Available for opportunities"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="kishan_nadageri_resume.pdf"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-xs hover:shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold transition-colors shadow-2xs"
          >
            <Github className="w-4 h-4 text-slate-700" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8">
          {PORTFOLIO_DATA.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all"
            >
              <p className="text-lg font-extrabold text-slate-900 tracking-tight">{item.value}</p>
              <p className="text-xs font-bold text-slate-700 mt-0.5">{item.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

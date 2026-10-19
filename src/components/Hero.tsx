import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Github, Linkedin, Mail, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{PORTFOLIO_DATA.personal.status}</span>
          <span className="text-emerald-300">•</span>
          <span className="text-emerald-700 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {PORTFOLIO_DATA.personal.location}
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hi, I'm {PORTFOLIO_DATA.personal.name}.
          </h1>
          <p className="text-lg sm:text-xl font-medium text-blue-600">
            {PORTFOLIO_DATA.personal.title}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {PORTFOLIO_DATA.personal.headline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Kishan_Nadageri_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
          >
            <Github className="w-4 h-4 text-slate-700" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8">
          {PORTFOLIO_DATA.highlights.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-base font-bold text-slate-900">{item.value}</p>
              <p className="text-xs font-semibold text-slate-700">{item.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

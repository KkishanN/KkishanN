import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, GitBranch, ArrowUp, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-term-border text-slate-400 font-mono text-xs">
      {/* Top Status Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 border-b border-term-border/60 flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-term-green">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>sys: healthy</span>
          </span>
          <span className="text-term-border">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <GitBranch className="w-3.5 h-3.5 text-term-accent" />
            <span>git:(main)</span>
          </span>
          <span className="text-term-border">|</span>
          <span className="text-slate-400">Node v24 • React 18 • Vite 6</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-term-accent hover:text-cyan-300 transition-colors"
        >
          <span>top()</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-term-surface border border-term-border flex items-center justify-center text-term-accent">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="text-slate-200 font-semibold font-sans text-sm">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="text-term-muted text-xs">— Paderborn, Germany</span>
        </div>

        <p className="text-[11px] text-term-muted text-center sm:text-right">
          Designed with developer terminal aesthetic • Tailored for production software engineering
        </p>
      </div>
    </footer>
  );
};

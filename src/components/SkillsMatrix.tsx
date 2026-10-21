import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Copy, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = async () => {
    try {
      const formatted = PORTFOLIO_DATA.skillGroups
        .map((g) => `${g.title}:\n${g.skills.map((s) => `• ${s}`).join('\n')}`)
        .join('\n\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(formatted);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.warn('Could not copy skills to clipboard:', err);
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Copy Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Skills & Technical Toolkit
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Core technologies, distributed architectures, and engineering frameworks
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs hover:shadow-xs cursor-pointer self-start sm:self-auto"
            title="Copy all skillsets to clipboard"
            aria-label="Copy all skillsets to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>Copy Skills List</span>
              </>
            )}
          </button>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all"
            >
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-slate-800 text-xs font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                  >
                    {skill}
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

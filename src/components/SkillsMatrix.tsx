import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Copy, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const formatted = PORTFOLIO_DATA.skillGroups
      .map((g) => `${g.title}:\n${g.skills.map((s) => `• ${s}`).join('\n')}`)
      .join('\n\n');
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Copy Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Skills & Technical Toolkit
            </h2>
          </div>

          <button
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
            title="Copy all skillsets to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Skills</span>
              </>
            )}
          </button>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs"
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

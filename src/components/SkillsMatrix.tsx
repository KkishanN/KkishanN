import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Cpu, 
  Server, 
  Cloud, 
  Zap, 
  Database, 
  Layout, 
  GitBranch, 
  Search, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-4 h-4 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-amber-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-purple-400" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-rose-400" />;
      default: return <Cpu className="w-4 h-4 text-term-accent" />;
    }
  };

  // Filter skills based on search term
  const filteredCategories = PORTFOLIO_DATA.skills.map(category => {
    const matchedSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tags?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return {
      ...category,
      skills: matchedSkills
    };
  }).filter(category => category.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-term-surface/50 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>04. Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              Production Skillset & Core Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
              Field-tested technical expertise across enterprise .NET backends, Microsoft Azure cloud, and high-frequency real-time architectures.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-term-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skills (e.g. Azure, Redis, C#)..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-term-surface border border-term-border text-slate-200 text-xs font-mono placeholder:text-term-muted focus:outline-none focus:border-term-accent transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-term-muted hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-term-border bg-term-surface/90 p-5 shadow-lg flex flex-col justify-between hover:border-term-border/80 transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-term-panel border border-term-border">
                      {getIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white font-sans">{cat.category}</h3>
                      <p className="text-[11px] text-slate-400 font-sans">{cat.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills list inside category */}
                <div className="space-y-3 pt-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-200 font-medium">{skill.name}</span>
                        {skill.tags && (
                          <div className="flex gap-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-1.5 py-0.2 rounded bg-term-panel border border-term-border text-term-accent text-[10px] font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Proficiency progress bar */}
                      <div className="h-1.5 w-full bg-term-panel rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="pt-4 mt-4 border-t border-term-border/40 text-[10px] font-mono text-term-muted flex items-center justify-between">
                <span>{cat.skills.length} skills</span>
                <span className="text-term-green">Verified In Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

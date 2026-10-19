import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Terminal as TerminalIcon, 
  Download, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Play, 
  Copy, 
  Check, 
  ChevronRight, 
  Sparkles,
  Layers,
  Server
} from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: string | React.ReactNode;
}

export const TerminalHero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'Kishan Nadageri OS v3.5 [Production-Ready Terminal Engine]'
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Type "help" or click quick chips below to inspect skills, system architecture, and career impact.'
    },
    {
      id: 'init-3',
      type: 'input',
      content: 'whoami'
    },
    {
      id: 'init-4',
      type: 'output',
      content: (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="text-term-accent font-semibold">
            {PORTFOLIO_DATA.personal.name} — {PORTFOLIO_DATA.personal.role}
          </p>
          <p className="text-slate-400">
            {PORTFOLIO_DATA.personal.bio}
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
              📍 {PORTFOLIO_DATA.personal.location}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-term-green border border-emerald-500/30">
              ⚡ 3.5+ Yrs Enterprise Experience
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
              🎓 MSc Computer Engineering @ Uni Paderborn
            </span>
          </div>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now() + '-in', type: 'input', content: cmd }
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-term-accent font-mono font-semibold">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 font-mono text-[11px]">
              {PORTFOLIO_DATA.terminalCommands.map((c) => (
                <div key={c.command} className="flex items-center gap-2">
                  <span className="text-term-green font-bold w-24">{c.command}</span>
                  <span className="text-slate-400">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-term-accent font-semibold">{PORTFOLIO_DATA.personal.name} | {PORTFOLIO_DATA.personal.role}</p>
            <p className="text-slate-400">{PORTFOLIO_DATA.personal.bio}</p>
            <p className="text-term-muted">Specialization: .NET Core • Azure Cloud • Redis Caching • Real-time WebSockets</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-term-accent font-mono font-semibold">Core Technical Stack:</p>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div>
                <span className="text-term-green">Languages & Backend: </span>
                <span className="text-slate-300">C#, .NET 6/8, ASP.NET Core, C++, SQL, RESTful APIs, OOP</span>
              </div>
              <div>
                <span className="text-cyan-400">Cloud & Azure: </span>
                <span className="text-slate-300">Azure Functions, Event Hubs, Cosmos DB, App Services, Service Bus, Key Vault</span>
              </div>
              <div>
                <span className="text-purple-400">Real-Time & Caching: </span>
                <span className="text-slate-300">Redis Distributed Cache, SignalR (WebSockets), Event-driven pub/sub</span>
              </div>
              <div>
                <span className="text-amber-400">Frontend: </span>
                <span className="text-slate-300">ReactJS, JavaScript / TypeScript, Tailwind CSS, Modern UI</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'exp':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-term-accent font-mono font-semibold">Enterprise Career Timeline:</p>
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-term-border pl-2.5 py-0.5">
                <p className="text-slate-200 font-bold">{exp.role} @ <span className="text-term-green">{exp.company}</span></p>
                <p className="text-[11px] text-term-muted font-mono">{exp.period} | {exp.location}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-term-accent font-mono font-semibold">Key Production Projects:</p>
            <div className="space-y-1.5">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="bg-term-panel/40 p-2 rounded border border-term-border/60">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-semibold">{proj.title}</span>
                    <span className="text-[10px] text-term-muted font-mono">{proj.timeline}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{proj.summary}</p>
                  <p className="text-[10px] text-term-accent font-mono mt-1">Tech: {proj.technologies.slice(0, 5).join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'awards':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-term-accent font-mono font-semibold">Accenture ACE Awards:</p>
            {PORTFOLIO_DATA.awards.map((award, i) => (
              <div key={i} className="bg-amber-500/10 border border-amber-500/30 p-2 rounded text-slate-300">
                <p className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {award.title} ({award.date})
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{award.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-term-accent font-mono font-semibold">Microsoft Certifications:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px]">
              {PORTFOLIO_DATA.certifications.map((c) => (
                <div key={c.code} className="p-2 rounded bg-term-panel border border-term-border">
                  <p className="text-term-green font-bold">{c.code}</p>
                  <p className="text-slate-300 text-[10px] mt-0.5">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'arch':
        outputNode = (
          <div className="space-y-1.5 text-[11px] font-mono bg-term-panel/60 p-2.5 rounded border border-term-border text-slate-300 overflow-x-auto">
            <p className="text-term-accent font-semibold">[Telemetry & Real-Time Sync Pipeline]</p>
            <pre className="text-slate-400 text-[10px] leading-relaxed">
{`[Client Device]  ── WebSocket ──> [SignalR Hub]  <──>  [Redis Cache (sub-10ms)]
       │                                │
  REST Requests                         │
       ▼                                ▼
[.NET 6 API Gateway] ── Ingest ──> [Azure Event Hubs]
       │                                │
       ▼                                ▼
[Cosmos DB + Change Feed] ── Trigger ──> [Serverless Alert Functions]`}
            </pre>
            <p className="text-slate-400 text-[10px] mt-1">
              ✓ Sub-10ms session cache &nbsp;•&nbsp; ✓ High-throughput event ingestion &nbsp;•&nbsp; ✓ Zero-latency updates
            </p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-term-accent font-semibold">Direct Contact Channels:</p>
            <p className="text-slate-300">Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-term-green underline">{PORTFOLIO_DATA.personal.email}</a></p>
            <p className="text-slate-300">Phone: {PORTFOLIO_DATA.personal.phone}</p>
            <p className="text-slate-300">Location: {PORTFOLIO_DATA.personal.location}</p>
            <p className="text-slate-300">LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PORTFOLIO_DATA.personal.linkedin}</a></p>
          </div>
        );
        break;

      case 'download-cv':
      case 'cv':
      case 'resume':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-term-green">
            <p>✓ Triggering resume PDF download...</p>
            <p className="text-slate-400 text-[11px]">
              If download does not start automatically, <a href={PORTFOLIO_DATA.personal.resumeUrl} download className="text-term-accent underline">click here to download</a>.
            </p>
          </div>
        );
        // Trigger download
        const link = document.createElement('a');
        link.href = PORTFOLIO_DATA.personal.resumeUrl;
        link.download = 'Kishan_Nadageri_Resume.pdf';
        link.click();
        break;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            command not found: "{cmd}". Type <span className="text-term-accent font-bold">help</span> to list valid commands.
          </div>
        );
        break;
    }

    newHistory.push({
      id: Date.now() + '-out',
      type: 'output',
      content: outputNode
    });

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickChips = [
    { label: 'whoami', cmd: 'whoami' },
    { label: 'skills', cmd: 'skills' },
    { label: 'exp', cmd: 'exp' },
    { label: 'projects', cmd: 'projects' },
    { label: 'arch', cmd: 'arch' },
    { label: 'awards', cmd: 'awards' },
    { label: 'download-cv', cmd: 'download-cv' },
    { label: 'clear', cmd: 'clear' }
  ];

  return (
    <section id="overview" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Pitch & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-term-surface border border-term-border text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-term-green animate-pulse" />
              <span>Full Stack & Cloud Systems Engineer</span>
              <span className="text-term-border">|</span>
              <span className="text-term-accent">3.5+ Yrs Industry</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
                Architecting Scalable <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  .NET & Azure Cloud
                </span> <br />
                Production Systems.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed pt-2">
                Hi, I'm <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</span>. 
                I specialize in building low-latency distributed backends, real-time WebSocket pipelines (Redis + SignalR), serverless event architectures, and enterprise AI integrations.
              </p>
            </div>

            {/* Industry Focus Highlights (Addressing "No Research Paper" with strong production value) */}
            <div className="p-4 rounded-xl bg-term-surface/70 border border-term-border/80 backdrop-blur-sm space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-term-muted border-b border-term-border/60 pb-2">
                <span className="flex items-center gap-1.5 text-term-accent">
                  <Server className="w-3.5 h-3.5" />
                  Engineering Highlights
                </span>
                <span>Accenture Enterprise Scale</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-term-green mt-0.5">❯</span>
                  <span><strong className="text-white">3.5+ Years</strong> enterprise software engineering across healthcare, banking, and AI productivity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-term-green mt-0.5">❯</span>
                  <span><strong className="text-white">2x ACE Award Winner</strong> for technical delivery excellence and mentoring junior engineers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-term-green mt-0.5">❯</span>
                  <span><strong className="text-white">Master's in Computer Engineering</strong> at Universität Paderborn (Germany).</span>
                </li>
              </ul>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-term-accent text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-all duration-200 shadow-glow"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-term-surface border border-term-border hover:border-term-accent/50 text-slate-200 hover:text-term-accent font-mono text-xs font-semibold transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-term-accent" />
                <span>System Architecture</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Kishan_Nadageri_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-term-surface border border-term-border hover:border-slate-500 text-slate-300 font-mono text-xs font-medium transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Key Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PORTFOLIO_DATA.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-lg bg-term-surface/50 border border-term-border/60">
                  <p className="text-lg font-bold font-mono text-term-accent">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-200 font-sans">{stat.label}</p>
                  <p className="text-[10px] text-term-muted font-sans truncate">{stat.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive Terminal Console */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-term-border bg-term-surface shadow-2xl shadow-black/80 overflow-hidden flex flex-col h-[480px]">
              
              {/* Terminal Window Header Bar */}
              <div className="px-4 py-2.5 bg-term-panel border-b border-term-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-term-accent" />
                    kishan-term: bash (zsh)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1 rounded text-term-muted hover:text-slate-200 hover:bg-term-surface text-xs transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-term-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Quick Run Chips */}
              <div className="px-3 py-1.5 bg-[#0d131f] border-b border-term-border/70 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
                <span className="text-term-muted text-[10px] uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 text-term-accent fill-term-accent" />
                  Run:
                </span>
                {quickChips.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => handleCommand(chip.cmd)}
                    className="px-2 py-0.5 rounded bg-term-panel border border-term-border/80 text-slate-300 hover:text-term-accent hover:border-term-accent/50 hover:bg-term-surface transition-all whitespace-nowrap active:scale-95"
                  >
                    ${chip.label}
                  </button>
                ))}
              </div>

              {/* Terminal Body */}
              <div 
                className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs select-text bg-[#0a0d14]/95"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line) => (
                  <div key={line.id} className="leading-relaxed">
                    {line.type === 'system' && (
                      <div className="text-term-muted text-[11px] italic">
                        # {line.content}
                      </div>
                    )}

                    {line.type === 'input' && (
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className="text-term-green font-bold">kishan@paderborn:~$</span>
                        <span className="text-term-accent">{line.content}</span>
                      </div>
                    )}

                    {line.type === 'output' && (
                      <div className="pl-2 pt-0.5 border-l border-term-border/50">
                        {line.content}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Active Prompt Input */}
                <div className="flex items-center gap-2 text-slate-200 pt-1">
                  <span className="text-term-green font-bold shrink-0">kishan@paderborn:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type command (e.g., 'help', 'skills', 'arch')..."
                    className="flex-1 bg-transparent border-none outline-none text-term-accent font-mono text-xs placeholder:text-term-muted/50 caret-term-accent"
                    autoFocus
                  />
                  <span className="w-2 h-4 bg-term-accent animate-cursor shrink-0" />
                </div>

                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Footer Info */}
              <div className="px-4 py-1.5 bg-term-panel/80 border-t border-term-border/70 text-[10px] font-mono text-term-muted flex items-center justify-between">
                <span>UTF-8 • .NET 8.0 • Azure CLI 2.65</span>
                <span>Press Enter to execute</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

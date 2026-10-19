import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Radio, 
  Workflow, 
  Clock, 
  Server
} from 'lucide-react';

interface ArchitecturePattern {
  id: string;
  name: string;
  subtitle: string;
  projectOrigin: string;
  tag: string;
  metrics: { label: string; value: string }[];
  overview: string;
  diagram: {
    steps: {
      number: string;
      title: string;
      role: string;
      tech: string;
      description: string;
      badge?: string;
    }[];
  };
  keyDecisions: { title: string; rationale: string }[];
}

export const ArchitectureShowcase: React.FC = () => {
  const architectures: ArchitecturePattern[] = [
    {
      id: 'telehealth-realtime',
      name: 'Distributed Low-Latency Telehealth Engine',
      subtitle: 'Sub-10ms consultation state synchronization across thousands of clinical rooms',
      projectOrigin: 'Telehealth Virtual Visits (Accenture)',
      tag: 'Real-Time / Distributed Caching',
      metrics: [
        { label: 'State Sync Latency', value: '< 10ms' },
        { label: 'Latency Reduction', value: '65%' },
        { label: 'Availability SLA', value: '99.9%' },
        { label: 'Concurrency', value: 'High Scale' },
      ],
      overview:
        'Engineered a hybrid distributed pub/sub architecture connecting front-line clinicians and patients. Combines Redis distributed caching for ephemeral session states with SignalR WebSocket channels and Cosmos DB Change Feed event dispatching.',
      diagram: {
        steps: [
          {
            number: '01',
            title: 'Client Connection & Auth',
            role: 'Edge Ingress',
            tech: 'React SPA + SignalR Client',
            description: 'Patient/Clinician establishes persistent WebSocket connection. Token validation against Azure AD.',
            badge: 'WebSockets'
          },
          {
            number: '02',
            title: 'API Gateway & Routing',
            role: 'Control Plane',
            tech: '.NET 6 Web API',
            description: 'Dispatches consultation events, validates room access permissions, and enforces rate limits.',
            badge: 'REST / WS'
          },
          {
            number: '03',
            title: 'Ephemeral Session Memory',
            role: 'Distributed Cache',
            tech: 'Redis Cache Cluster',
            description: 'Maintains active room presence, participant states, and distributed concurrency locks.',
            badge: '<10ms Latency'
          },
          {
            number: '04',
            title: 'Telemetry Ingestion Stream',
            role: 'Event Streaming',
            tech: 'Azure Event Hubs',
            description: 'Ingests high-throughput telemetry, room duration metrics, and connection heartbeat logs.',
            badge: 'Partitioned'
          },
          {
            number: '05',
            title: 'Serverless Alerts & Audit',
            role: 'Reactive Handlers',
            tech: 'Azure Functions + Cosmos DB Change Feed',
            description: 'Detects clinician paging timeouts or disconnected patients, automatically escalating via SMS/Email.',
            badge: 'Event-Driven'
          }
        ]
      },
      keyDecisions: [
        {
          title: 'Why Redis Backplane for SignalR?',
          rationale: 'Avoided sticky-session server affinity. Allowed horizontal scaling of .NET backend pods while maintaining seamless room broadcasting.'
        },
        {
          title: 'Cosmos DB Change Feed vs Polling',
          rationale: 'Completely eliminated polling queries, reducing database load and delivering instant serverless triggers on state mutation.'
        }
      ]
    },
    {
      id: 'copilot-ai-pipeline',
      name: 'Event-Driven Copilot Transcription & Translation',
      subtitle: 'Asynchronous multi-modal audio/video ingestion and enterprise Teams delivery',
      projectOrigin: 'Microsoft Copilot Integration (Accenture)',
      tag: 'Enterprise AI & Cloud Ingestion',
      metrics: [
        { label: 'Pipeline Mode', value: 'Asynchronous' },
        { label: 'Fault Tolerance', value: 'Auto-Retry' },
        { label: 'Target Output', value: 'Teams / Email' },
        { label: 'Security Model', value: 'Azure Key Vault' },
      ],
      overview:
        'Architected a resilient serverless data pipeline integrating enterprise audio/video streams with Azure Cognitive Services (Speech-to-Text and Neural Machine Translation), delivering translated minutes directly into Microsoft Teams.',
      diagram: {
        steps: [
          {
            number: '01',
            title: 'Media Landing Zone',
            role: 'Cloud Storage',
            tech: 'Azure Blob Storage',
            description: 'Ingests multi-gigabyte audio/video meeting recordings with encrypted storage and SAS tokens.',
            badge: 'Blob Event'
          },
          {
            number: '02',
            title: 'Event Trigger & Queue Dispatch',
            role: 'Event Broker',
            tech: 'Azure Functions (Blob Trigger)',
            description: 'Splits large media files into asynchronous processing chunks and queues jobs to prevent timeout limits.',
            badge: 'Serverless'
          },
          {
            number: '03',
            title: 'Cognitive Speech Extraction',
            role: 'AI Processing',
            tech: 'Azure Cognitive Speech API',
            description: 'Extracts speaker-diarized text transcripts with timestamp alignment and noise suppression.',
            badge: 'Multi-lingual'
          },
          {
            number: '04',
            title: 'Neural Translation Engine',
            role: 'AI Model',
            tech: 'Azure Translator Text / Neural MT',
            description: 'Translates meeting transcripts dynamically into requested recipient languages.',
            badge: 'Neural MT'
          },
          {
            number: '05',
            title: 'Webhook & Teams Dispatch',
            role: 'Integration',
            tech: 'Adaptive Cards + Teams Webhooks',
            description: 'Constructs interactive rich card summaries and dispatches them to client channels with zero manual delay.',
            badge: 'Instant Delivery'
          }
        ]
      },
      keyDecisions: [
        {
          title: 'Decoupled Worker Queue Pattern',
          rationale: 'Prevented Azure Function timeouts on large video recordings by breaking processing into queued micro-tasks.'
        },
        {
          title: 'Zero Hardcoded Secrets',
          rationale: 'Enforced Managed Identities and Azure Key Vault integration for all cognitive endpoint keys and webhook secrets.'
        }
      ]
    },
    {
      id: 'enterprise-connector',
      name: 'Resilient Enterprise Viva Oracle Data Bridge',
      subtitle: 'Fault-tolerant sync connector bridging on-prem Oracle DB with Microsoft Viva & Moodle LMS',
      projectOrigin: 'Microsoft Viva Oracle Connector (Accenture - ACE Award Winner)',
      tag: 'Enterprise Systems & Resilience',
      metrics: [
        { label: 'Recognition', value: 'ACE Award' },
        { label: 'Team Leadership', value: '3 Junior Devs' },
        { label: 'Fault Handling', value: 'Circuit Breaker' },
        { label: 'Integrations', value: 'Oracle + Moodle' },
      ],
      overview:
        'Built a bidirectional synchronization gateway connecting Oracle databases and Moodle LMS with Microsoft Viva Employee Experience platform. Handled schema mapping, transactional resilience, and cross-organization learning workflows.',
      diagram: {
        steps: [
          {
            number: '01',
            title: 'Oracle Change Listener',
            role: 'Data Source',
            tech: 'Oracle Managed DataAccess (.NET)',
            description: 'Monitors database change logs and batches delta employee learning records efficiently.',
            badge: 'Batching'
          },
          {
            number: '02',
            title: 'Transformation & Mapping',
            role: 'Domain Logic',
            tech: '.NET Core Domain Models',
            description: 'Translates legacy relational tables into Microsoft Graph compliant schema objects.',
            badge: 'Clean Code'
          },
          {
            number: '03',
            title: 'Resilient Circuit Breaker',
            role: 'Fault Tolerance',
            tech: 'Polly Resilience Engine',
            description: 'Protects backend endpoints against transient network drops with exponential backoff & fallback queues.',
            badge: 'Fault-Tolerant'
          },
          {
            number: '04',
            title: 'Moodle LMS Webhook Sync',
            role: 'LMS Integration',
            tech: 'Custom Webhook Consumer',
            description: 'Captures course completion signals and updates Viva Learning badges in real-time.',
            badge: 'Cross-Platform'
          },
          {
            number: '05',
            title: 'Viva Learning Card Ingestion',
            role: 'Target Surface',
            tech: 'Microsoft Graph & Viva API',
            description: 'Surfaces tailored learning recommendations directly in employees Microsoft 365 dashboard.',
            badge: 'Viva Ecosystem'
          }
        ]
      },
      keyDecisions: [
        {
          title: 'Circuit Breaker with Polly',
          rationale: 'Ensured downstream Oracle downtime never cascaded into Microsoft Graph sync failures, storing failed payloads in DLQ.'
        },
        {
          title: 'Mentoring & Peer Reviews',
          rationale: 'Conducted weekly code reviews for 3 junior developers, elevating testing coverage to over 90% across services.'
        }
      ]
    }
  ];

  const [activeArchId, setActiveArchId] = useState(architectures[0].id);
  const activeArch = architectures.find((a) => a.id === activeArchId) || architectures[0];

  return (
    <section id="architecture" className="py-20 bg-term-surface/40 border-y border-term-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>System Design & Cloud Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              Production Architecture & Real-Time Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
              Deep dive into real-world distributed architectures I designed and implemented: from sub-10ms Redis/SignalR caching to serverless AI pipelines.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-term-muted">
            <span className="w-2 h-2 rounded-full bg-term-green" />
            <span>Interactive Architecture Visualizer</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {architectures.map((arch) => {
            const isSelected = arch.id === activeArchId;
            return (
              <button
                key={arch.id}
                onClick={() => setActiveArchId(arch.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-term-panel border-term-accent shadow-glow text-white'
                    : 'bg-term-surface/70 border-term-border text-slate-300 hover:border-slate-600 hover:bg-term-surface'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                    isSelected ? 'bg-term-accent/20 text-term-accent' : 'bg-term-surface text-term-muted'
                  }`}>
                    {arch.tag}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-term-accent animate-pulse" />}
                </div>
                <h3 className="font-bold text-sm text-slate-100">{arch.name}</h3>
                <p className="text-xs text-term-muted mt-1 font-mono">{arch.projectOrigin}</p>
              </button>
            );
          })}
        </div>

        {/* Architecture Detail Board */}
        <div className="rounded-2xl border border-term-border bg-[#0d121f] overflow-hidden shadow-2xl">
          
          {/* Header of Active Arch */}
          <div className="p-6 border-b border-term-border/80 bg-term-panel/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-term-accent font-semibold">{activeArch.projectOrigin}</span>
                <span className="text-term-border">•</span>
                <span className="text-xs font-mono text-term-green">{activeArch.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeArch.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                {activeArch.overview}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 shrink-0">
              {activeArch.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-term-surface border border-term-border text-center">
                  <p className="text-xs font-bold font-mono text-term-accent">{m.value}</p>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Flow Pipeline */}
          <div className="p-6 space-y-6">
            <div>
              <p className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-term-accent" />
                End-to-End Pipeline Execution Flow
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                {activeArch.diagram.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative group p-3.5 rounded-xl bg-term-surface/90 border border-term-border hover:border-term-accent/60 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-term-accent">{step.number}</span>
                        {step.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-term-panel border border-term-border text-term-green">
                            {step.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-bold text-white mb-0.5 leading-snug">{step.title}</h4>
                      <p className="text-[10px] font-mono text-cyan-400 font-semibold mb-2">{step.tech}</p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{step.description}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-term-border/40 text-[10px] font-mono text-term-muted">
                      Role: <span className="text-slate-300">{step.role}</span>
                    </div>

                    {/* Step Connector Arrow for Desktop */}
                    {idx < activeArch.diagram.steps.length - 1 && (
                      <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-term-panel border border-term-border items-center justify-center text-term-accent">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Design Decisions & Trade-offs */}
            <div className="pt-4 border-t border-term-border/60">
              <p className="text-xs font-mono text-term-muted uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-term-green" />
                Key Architectural Trade-Offs & Decisions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeArch.keyDecisions.map((decision, dIdx) => (
                  <div key={dIdx} className="p-3.5 rounded-xl bg-term-panel/40 border border-term-border/80">
                    <h5 className="text-xs font-bold text-slate-200 flex items-center gap-2 mb-1">
                      <span className="text-term-accent">▶</span>
                      {decision.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans pl-4">
                      {decision.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-term-panel/80 border-t border-term-border flex items-center justify-between text-[11px] font-mono text-term-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-term-accent" />
              Production Proven in Enterprise Deployments
            </span>
            <span className="text-slate-400">Validated under peak production traffic</span>
          </div>

        </div>

      </div>
    </section>
  );
};

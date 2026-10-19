import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled content
    const subject = encodeURIComponent(formData.subject || `Opportunity inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Kishan,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-term-surface/30 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-term-panel border border-term-border text-term-accent font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06. Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Let's Build Something High-Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Currently in Paderborn, Germany. Open to Software Engineering, Backend, and Full Stack positions (Full-Time or Working Student).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Resume Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl bg-term-surface border border-term-border shadow-xl space-y-4">
              <h3 className="text-sm font-mono text-term-accent font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Direct Communication Coordinates
              </h3>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-term-panel border border-term-border/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-term-surface text-term-green">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-term-muted">EMAIL</p>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-term-accent transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-term-surface text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-term-green" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center p-3 rounded-lg bg-term-panel border border-term-border/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-term-surface text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-term-muted">PHONE</p>
                      <a
                        href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center p-3 rounded-lg bg-term-panel border border-term-border/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-term-surface text-amber-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-term-muted">LOCATION</p>
                      <p className="text-xs sm:text-sm font-mono text-slate-200">
                        {PORTFOLIO_DATA.personal.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-term-panel border border-term-border/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-term-surface text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-term-muted">LINKEDIN</p>
                      <a
                        href={PORTFOLIO_DATA.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors flex items-center gap-1"
                      >
                        linkedin.com/in/kishan-nadageri
                      </a>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-term-muted" />
                </div>
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 shadow-glow">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-white text-sm font-sans">
                    Need an offline copy?
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Download complete PDF resume detailing 3.5+ years of .NET & Azure experience.
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-term-surface border border-term-border text-term-accent">
                  <Download className="w-5 h-5" />
                </div>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Kishan_Nadageri_Resume.pdf"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-term-accent text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-all shadow-glow"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-term-surface border border-term-border shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-term-border/70">
                <h3 className="font-bold text-base text-white font-sans flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-term-accent" />
                  Dispatch Direct Message
                </h3>
                <span className="text-[11px] font-mono text-term-muted">
                  Routes to kishannadageri06@gmail.com
                </span>
              </div>

              {formSubmitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-term-green text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Email client opened! Message ready to send.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-term-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-3 py-2 rounded-lg bg-term-panel border border-term-border text-slate-200 text-xs font-mono placeholder:text-term-muted/60 focus:outline-none focus:border-term-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-term-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-term-panel border border-term-border text-slate-200 text-xs font-mono placeholder:text-term-muted/60 focus:outline-none focus:border-term-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Engineering Role / Project Discussion"
                    className="w-full px-3 py-2 rounded-lg bg-term-panel border border-term-border text-slate-200 text-xs font-mono placeholder:text-term-muted/60 focus:outline-none focus:border-term-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-term-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Kishan, we came across your background in .NET, Azure, and distributed real-time systems..."
                    className="w-full px-3 py-2 rounded-lg bg-term-panel border border-term-border text-slate-200 text-xs font-mono placeholder:text-term-muted/60 focus:outline-none focus:border-term-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-term-accent text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-all duration-200 shadow-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

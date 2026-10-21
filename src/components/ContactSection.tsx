import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Copy, Check, Eye } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.warn('Could not copy email:', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.warn('Could not copy phone:', err);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Available for full-time engineering roles, backend systems, and technical discussions
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-slate-50/50 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                I'm actively open to software engineering, backend, and distributed systems opportunities in Europe and remotely. Feel free to connect directly:
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-slate-700 pt-1">
                {/* Email with copy */}
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-blue-600 transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone with bot-protection toggle */}
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                  {phoneRevealed ? (
                    <>
                      <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-blue-600 transition-colors font-mono">
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                        title="Copy phone to clipboard"
                        aria-label="Copy phone to clipboard"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setPhoneRevealed(true)}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer text-xs font-semibold"
                      aria-label="Reveal phone number"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>Show Phone</span>
                    </button>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="kishan_nadageri_resume.pdf"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-2xs"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

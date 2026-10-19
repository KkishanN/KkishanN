import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Download, Menu, X, ExternalLink, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#experience' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education & Certs', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d14]/90 backdrop-blur-md border-b border-term-border/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Terminal Prompt */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-slate-200 group hover:text-term-accent transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-term-surface border border-term-border flex items-center justify-center text-term-accent group-hover:border-term-accent/60 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 flex items-center gap-1.5">
                kishan@paderborn
                <span className="text-term-accent">:~$</span>
              </span>
              <span className="text-[10px] text-term-muted font-sans font-medium -mt-0.5">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 hover:text-term-accent hover:bg-term-surface/70 transition-all duration-150"
              >
                <span className="text-term-muted mr-1">0{idx + 1}.</span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-term-surface/80 border border-term-border text-[11px] font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-term-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-term-green"></span>
              </span>
              <span className="text-term-muted">Paderborn, DE</span>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Kishan_Nadageri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-term-accent/10 border border-term-accent/40 text-term-accent hover:bg-term-accent hover:text-black font-mono text-xs font-semibold transition-all duration-200 shadow-glow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-term-surface border border-term-border text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-term-surface/95 border-b border-term-border px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-mono text-xs text-slate-200 hover:text-term-accent hover:bg-term-panel"
            >
              <span className="text-term-muted mr-2">0{idx + 1}.</span>
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-term-border flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Kishan_Nadageri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-term-accent text-black font-mono text-xs font-semibold shadow-glow"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

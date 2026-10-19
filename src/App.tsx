import React from 'react';
import { Navbar } from './components/Navbar';
import { TerminalHero } from './components/TerminalHero';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CertificationsAndAwards } from './components/CertificationsAndAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1">
        <TerminalHero />
        <ArchitectureShowcase />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsMatrix />
        <CertificationsAndAwards />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

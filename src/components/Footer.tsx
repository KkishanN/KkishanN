import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </p>
        <p className="text-slate-400">
          Built with React & Tailwind CSS • {PORTFOLIO_DATA.personal.location}
        </p>
      </div>
    </footer>
  );
};

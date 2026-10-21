import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-8 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-medium text-slate-600">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </p>
        <p className="text-slate-400 font-medium">
          {PORTFOLIO_DATA.personal.title} • {PORTFOLIO_DATA.personal.location}
        </p>
      </div>
    </footer>
  );
};

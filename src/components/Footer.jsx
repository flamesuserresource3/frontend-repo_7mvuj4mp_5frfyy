import { Flame } from 'lucide-react';

export default function Footer({ lang }) {
  return (
    <footer className="relative py-10 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Flame className="text-blue-500" size={18} />
          <span className="font-medium">SMKN 5 Tebo</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          {lang === 'en'
            ? 'The Blue Flame of Excellence — Where Innovation Meets Education'
            : 'Nyala Biru Keunggulan — Tempat Inovasi Bertemu Pendidikan'}
        </p>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import { Flame, Globe, Moon, Sun } from 'lucide-react';

export default function Navbar({ dark, onToggleTheme, lang, onToggleLang }) {
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/30">
            <Flame className="text-blue-500" size={20} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            SMKN 5 Tebo
          </span>
        </div>
        <nav className="flex items-center gap-2">
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:bg-white/80 hover:shadow-sm transition"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="text-sm">{lang === 'en' ? 'EN' : 'ID'}</span>
          </button>
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:bg-white/80 hover:shadow-sm transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">{dark ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

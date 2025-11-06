import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AICompanion from './components/AICompanion';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-500/40 selection:text-white">
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
        lang={lang}
        onToggleLang={() => setLang((l) => (l === 'en' ? 'id' : 'en'))}
      />
      <main>
        <Hero lang={lang} />
        <Programs lang={lang} />
        <AICompanion lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;

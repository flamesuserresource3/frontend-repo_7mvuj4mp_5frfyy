import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mic, Send } from 'lucide-react';

export default function AICompanion({ lang }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: lang === 'en' ? 'Hi! I\'m your AI Learning Companion. Ask me anything about homework or schedules.' : 'Halo! Aku Pendamping Belajar AI-mu. Tanya apa saja tentang tugas atau jadwal.' },
  ]);

  const onSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    // Echo-style demo until backend is wired
    const reply = {
      role: 'assistant',
      content:
        lang === 'en'
          ? 'Thanks! I\'ll soon connect to our smart backend. For now, keep exploring the site.'
          : 'Terima kasih! Aku segera terhubung ke backend cerdas. Sementara ini, terus jelajahi situsnya ya.',
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput('');
  };

  return (
    <section id="ai" className="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(60%_50%_at_90%_100%,rgba(56,189,248,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-8 flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300 text-xs">
              <Sparkles size={16} /> AI
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              {lang === 'en' ? 'AI Learning Companion' : 'Pendamping Belajar AI'}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {lang === 'en'
                ? 'Get smart help for homework, schedules, and motivators for your goals.'
                : 'Dapatkan bantuan cerdas untuk tugas, jadwal, dan motivasi untuk tujuanmu.'}
            </p>
            <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li>{lang === 'en' ? 'Homework hints and explanations' : 'Petunjuk dan penjelasan tugas'}</li>
              <li>{lang === 'en' ? 'Schedule reminders and events' : 'Pengingat jadwal dan acara'}</li>
              <li>{lang === 'en' ? 'Skill growth suggestions' : 'Saran pengembangan keterampilan'}</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4"
          >
            <div className="h-72 overflow-y-auto pr-2 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-blue-500/10 border border-blue-400/20 text-blue-900 dark:text-blue-100' : 'bg-slate-100 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700 text-slate-800 dark:text-slate-100'} `}>
                  {m.content}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 relative">
                <Mic size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSend()}
                  placeholder={lang === 'en' ? 'Type a question…' : 'Tulis pertanyaan…'}
                  className="w-full pl-9 pr-12 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                />
                <button
                  onClick={onSend}
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

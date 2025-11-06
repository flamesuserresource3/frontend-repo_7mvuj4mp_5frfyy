import { motion } from 'framer-motion';
import { Cpu, Wrench, Palette, Network } from 'lucide-react';

const items = [
  {
    key: 'rpl',
    title: 'Software Engineering',
    title_id: 'Rekayasa Perangkat Lunak',
    icon: Cpu,
    desc: 'Build apps, AI, and modern systems with real-world projects.',
    desc_id: 'Bangun aplikasi, AI, dan sistem modern dengan proyek nyata.',
  },
  {
    key: 'tkj',
    title: 'Computer & Network Engineering',
    title_id: 'Teknik Komputer & Jaringan',
    icon: Network,
    desc: 'Design networks, cybersecurity, and cloud infrastructure.',
    desc_id: 'Rancang jaringan, keamanan siber, dan infrastruktur cloud.',
  },
  {
    key: 'tp',
    title: 'Mechanical Workshop',
    title_id: 'Teknik Pemesinan',
    icon: Wrench,
    desc: 'Precision manufacturing, CNC, and industrial maintenance.',
    desc_id: 'Manufaktur presisi, CNC, dan perawatan industri.',
  },
  {
    key: 'dm',
    title: 'Design & Multimedia',
    title_id: 'Desain & Multimedia',
    icon: Palette,
    desc: '3D, motion, and creative media for the future of storytelling.',
    desc_id: '3D, motion, dan media kreatif untuk masa depan penceritaan.',
  },
];

export default function Programs({ lang }) {
  return (
    <section id="programs" className="relative py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {lang === 'en' ? 'Departments & Majors' : 'Jurusan & Keahlian'}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {lang === 'en'
              ? 'Explore hands-on programs designed with industry standards.'
              : 'Jelajahi program praktik dengan standar industri.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ key, title, title_id, icon: Icon, desc, desc_id }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/60 backdrop-blur hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] hover:border-blue-400/40 transition"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <Icon className="text-blue-500" size={22} />
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {lang === 'en' ? 'Holographic' : 'Holografik'}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {lang === 'en' ? title : title_id}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {lang === 'en' ? desc : desc_id}
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                {lang === 'en' ? 'View portfolio' : 'Lihat portofolio'}
              </button>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

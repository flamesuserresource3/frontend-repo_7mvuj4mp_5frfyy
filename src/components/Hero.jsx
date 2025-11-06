import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ lang }) {
  const headline = lang === 'en' ? 'Ignite Skills. Shape the Future.' : 'Nyala Keterampilan. Bentuk Masa Depan.';
  const sub =
    lang === 'en'
      ? 'A futuristic digital campus where innovation meets education.'
      : 'Kampus digital futuristik tempat inovasi bertemu pendidikan.';

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for ambiance (pointer-events-none so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-white/0 dark:to-slate-950/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Blue Flames of Innovation
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            {headline}
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            {sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white font-medium shadow-[0_0_30px_rgba(56,189,248,0.25)] transition"
            >
              {lang === 'en' ? 'Explore Departments' : 'Jelajahi Jurusan'}
            </a>
            <a
              href="#ai"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm transition"
            >
              {lang === 'en' ? 'Meet AI Companion' : 'Temui AI Pendamping'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

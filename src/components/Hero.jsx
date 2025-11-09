import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-200">AI & Tech Enthusiast</span>
          </div>
          <h1 className="mt-5 font-extrabold tracking-tight text-4xl sm:text-6xl leading-tight">
            Building playful, modern experiences with AI
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            I craft interactive interfaces and intelligent systems. Explore my skills and projects below — and let's build something great together.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-300">
            <span className="opacity-80">Hint: interact with the 3D scene — press a key</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

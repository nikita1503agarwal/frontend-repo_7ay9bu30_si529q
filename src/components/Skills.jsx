import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Code2, Brain, Database, Rocket, Cloud } from 'lucide-react'

const skills = [
  {
    icon: Cpu,
    name: 'AI/ML',
    details: ['LLMs & prompt engineering', 'RAG systems', 'Model fine-tuning'],
    color: 'from-emerald-500/20 to-emerald-400/10',
  },
  {
    icon: Code2,
    name: 'Frontend',
    details: ['React, Vite, Tailwind', 'Animations (Framer)', 'Accessibility-first'],
    color: 'from-sky-500/20 to-sky-400/10',
  },
  {
    icon: Database,
    name: 'Backend',
    details: ['FastAPI & Node', 'MongoDB, Postgres', 'Auth & APIs'],
    color: 'from-purple-500/20 to-purple-400/10',
  },
  {
    icon: Cloud,
    name: 'Cloud & DevOps',
    details: ['Docker & CI/CD', 'Vercel, Fly, AWS', 'Observability'],
    color: 'from-orange-500/20 to-orange-400/10',
  },
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Skills</h2>
          <p className="mt-3 text-slate-600">Click a card to reveal details — press a key for fun micro-interactions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => {
            const Icon = s.icon
            const isActive = active === idx
            return (
              <motion.button
                key={s.name}
                onClick={() => setActive(isActive ? null : idx)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.05 }}
                className={`group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-900/90 p-3 text-white shadow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{s.name}</p>
                      <p className="text-xs text-slate-600">Tap to expand</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-2 text-sm text-slate-700"
                      >
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <Rocket className="h-4 w-4 text-slate-500 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

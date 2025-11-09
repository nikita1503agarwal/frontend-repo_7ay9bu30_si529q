import { motion } from 'framer-motion'

const items = [
  {
    title: 'AI Code Assistant',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    blurb: 'An interactive coding agent that generates, edits, and ships apps end-to-end.',
    tags: ['React', 'FastAPI', 'LLMs'],
    link: '#',
  },
  {
    title: 'Realtime Vision Demo',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop',
    blurb: 'Web-based object detection with WebGL overlays and streaming.',
    tags: ['WebGL', 'Python', 'GPU'],
    link: '#',
  },
  {
    title: 'RAG Knowledge Hub',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    blurb: 'Private, searchable docs with embeddings and citations.',
    tags: ['RAG', 'MongoDB', 'Embeddings'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-600">A selection of work. Hover cards for details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="Project screenshot" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <span className="text-xs text-slate-500">Hover →</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

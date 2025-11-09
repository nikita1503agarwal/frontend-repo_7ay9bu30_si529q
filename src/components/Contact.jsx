import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '', budget: '' })
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Sending…' })
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ type: 'success', msg: data.message })
      setForm({ name: '', email: '', message: '', company: '', budget: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="mt-3 text-slate-300">Email or send a quick note — press a key to see subtle effects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sky-400" />
              <a href="mailto:hello@yourdomain.com" className="font-medium text-sky-300 hover:underline">hello@yourdomain.com</a>
            </div>
            <p className="mt-3 text-sm text-slate-400">Prefer direct email? I'm responsive and happy to chat.</p>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input name="name" value={form.name} onChange={onChange} required placeholder="Ada Lovelace" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="ada@example.com" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Company</label>
                <input name="company" value={form.company} onChange={onChange} placeholder="Analytical Engines" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Budget</label>
                <input name="budget" value={form.budget} onChange={onChange} placeholder="$3k-$5k" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="Tell me about your project" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-slate-400">Press Enter to submit</p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
            {status.type !== 'idle' && (
              <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-emerald-400' : status.type === 'error' ? 'text-rose-400' : 'text-slate-300'}`}>{status.msg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

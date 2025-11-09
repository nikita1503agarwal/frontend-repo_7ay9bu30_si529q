import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-sky-300/30 selection:text-white">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with care — press a key.
      </footer>
    </div>
  )
}

export default App

import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Neon gradient background wash */}
      <div className="fixed inset-0 pointer-events-none opacity-70 mix-blend-screen" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(56,189,248,0.25),transparent),radial-gradient(700px_350px_at_80%_30%,rgba(168,85,247,0.25),transparent),radial-gradient(600px_300px_at_50%_100%,rgba(20,184,166,0.18),transparent)]" />
      </div>

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Neon//Marketing — All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <a href="#about" className="hover:text-white/80">About</a>
            <span>•</span>
            <a href="#services" className="hover:text-white/80">Services</a>
            <span>•</span>
            <a href="#work" className="hover:text-white/80">Work</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

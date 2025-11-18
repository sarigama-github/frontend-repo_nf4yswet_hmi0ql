import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-300/90 text-xs tracking-widest">CONTACT</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Start your project</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tell us about your goals and we’ll design a neon-grade growth system.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); alert('Submitted!') }}
          className="relative grid md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-violet-500/10 pointer-events-none" />
          <div className="relative z-10">
            <label className="text-white/70 text-sm">Name</label>
            <input className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
          </div>
          <div className="relative z-10">
            <label className="text-white/70 text-sm">Email</label>
            <input type="email" className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="you@company.com" />
          </div>
          <div className="relative z-10 md:col-span-2">
            <label className="text-white/70 text-sm">Project details</label>
            <textarea rows="5" className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="What are you trying to achieve?" />
          </div>
          <div className="relative z-10 md:col-span-2 flex justify-end">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 text-slate-950 font-semibold shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition">
              Send request
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ava Martins', role: 'CMO, FinStudio', quote: 'Their 3D-first approach transformed our product launch into a premium brand moment. Performance followed.', color: 'from-cyan-400/20 to-sky-500/20' },
  { name: 'Liam Chen', role: 'VP Growth, Cloudly', quote: 'The neon-glass visuals and SEO velocity gave us a market edge. We hit targets 2 months early.', color: 'from-violet-400/20 to-fuchsia-500/20' },
]

const Card = ({ name, role, quote, color, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-white/80">
        {/* 3D avatar placeholder */}
        <span className="text-lg">🧊</span>
      </div>
      <div>
        <p className="text-white/80">“{quote}”</p>
        <div className="mt-3 text-sm text-white/60">{name} • {role}</div>
      </div>
    </div>
  </motion.div>
)

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-300/90 text-xs tracking-widest">TESTIMONIALS</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Client Love</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={t.name} i={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

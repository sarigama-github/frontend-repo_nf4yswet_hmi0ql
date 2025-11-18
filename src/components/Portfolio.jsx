import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Fintech Growth Dashboard', tag: 'SEO • PPC', color: 'from-cyan-400/20 to-sky-500/20' },
  { title: 'SaaS 3D Launch Kit', tag: 'Branding • Motion', color: 'from-violet-400/20 to-fuchsia-500/20' },
  { title: 'Ecom Performance Suite', tag: 'Social • UGC', color: 'from-cyan-400/20 to-violet-500/20' },
]

const Card = ({ title, tag, color, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
    <div className="relative z-10">
      <div className="h-40 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-white/60 text-sm mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        Floating project preview
      </div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-white/60 text-xs mt-1">{tag}</p>
    </div>
  </motion.div>
)

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-300/90 text-xs tracking-widest">PORTFOLIO</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A taste of our neon-glass aesthetic paired with performance craft.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <Card key={it.title} i={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

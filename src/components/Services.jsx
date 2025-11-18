import React from 'react'
import { motion } from 'framer-motion'
import { Target, Search, Share2, Palette } from 'lucide-react'

const services = [
  { icon: Search, title: 'SEO', desc: 'Technical, on-page, and content SEO powered by AI insights.' },
  { icon: Share2, title: 'Social Media', desc: 'Platform-native storytelling with motion-first assets.' },
  { icon: Target, title: 'PPC', desc: 'Full-funnel performance with precise audience modeling.' },
  { icon: Palette, title: 'Branding', desc: 'Identity systems, 3D styleframes, and glossy design kits.' },
]

const Card3D = ({ Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -8 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative rounded-3xl p-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition will-change-transform"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition" />
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 shadow-[0_20px_60px_rgba(56,189,248,0.15)]">
          <Icon className="w-6 h-6 text-cyan-300" />
        </div>
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-white/70 text-sm">{desc}</p>
    </div>
  </motion.div>
)

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-300/90 text-xs tracking-widest">SERVICES</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Futuristic growth systems</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Four pillars, one integrated engine. Built for velocity and conversion.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card3D key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

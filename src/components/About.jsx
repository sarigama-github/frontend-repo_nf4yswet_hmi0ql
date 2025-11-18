import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Cpu, Sparkles } from 'lucide-react'

const Card = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-violet-500/10" />
    <div className="relative z-10 flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10">
        <Icon className="w-6 h-6 text-cyan-300" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-white/70 text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
)

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_15%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_300px_at_85%_90%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-300/90 text-xs tracking-widest">ABOUT US</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">A 3D-first performance studio</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We combine 3D motion, interaction design and growth marketing to craft high-converting brand experiences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Rocket} title="Velocity" desc="Go-to-market faster with agile sprints and data-led strategy." />
          <Card icon={Cpu} title="Intelligence" desc="AI-enhanced content ops and predictive campaign optimization." />
          <Card icon={Sparkles} title="Aesthetics" desc="Premium neon-glass visuals, isometric systems, and microinteractions." />
        </div>
      </div>
    </section>
  )
}

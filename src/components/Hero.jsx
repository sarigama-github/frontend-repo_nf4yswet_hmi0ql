import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = 'shadow-[0_0_40px_rgba(56,189,248,0.35)]'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1000px_500px_at_80%_120%,rgba(168,85,247,0.25),transparent)]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(255,255,255,0.15)_50%,transparent_51%),linear-gradient(to_bottom,transparent_49%,rgba(255,255,255,0.15)_50%,transparent_51%)] bg-[size:32px_32px]" />
      </div>

      {/* Header */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 ${glow}`} />
          <span className="text-white/90 font-semibold tracking-wide">NEON//MARKETING</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-cyan-200 text-xs"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Premium 3D Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            Futuristic Growth. Ultra‑Modern Presence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-white/70 max-w-xl"
          >
            We blend neon‑grade aesthetics, 3D motion, and performance marketing to elevate brands in SEO, social, PPC, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 text-slate-950 font-semibold shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition">
              Start a project
            </a>
            <a href="#work" className="px-6 py-3 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition backdrop-blur bg-white/5">
              See our work
            </a>
          </motion.div>
        </div>

        {/* 3D Hero Spline */}
        <div className="relative w-full h-[500px] md:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Glow overlays */}
          <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.25),transparent_35%)]" />
        </div>
      </div>

      {/* Floating 3D-ish elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute left-[8%] top-[28%] rotate-6"
        >
          <div className="px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-cyan-100 shadow-[0_30px_80px_rgba(56,189,248,0.15)]">
            SEO +124%
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="absolute right-[10%] top-[22%] -rotate-6"
        >
          <div className="px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-violet-100 shadow-[0_30px_80px_rgba(168,85,247,0.18)]">
            CTR 3.1x
          </div>
        </motion.div>
      </div>
    </section>
  )
}

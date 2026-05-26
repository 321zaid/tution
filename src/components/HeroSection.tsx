"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Target,
} from "lucide-react"

const stats = [
  { icon: Star, value: "12+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: BookOpen, value: "6+", label: "Exam Boards" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 mb-6"
              >
                <Target className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-medium text-navy-200">
                  Sri Lanka&apos;s Trusted Math Tuition
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Expert Mathematics
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                  Tuition
                </span>
                <br />
                for Your Success
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg sm:text-xl text-navy-200 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Build confidence, master problem-solving, and prepare for exams with
                structured guidance from an experienced math teacher. O/L, A/L,
                IGCSE & Edexcel.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-3.5 text-base font-bold text-navy-900 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all"
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  Message on WhatsApp
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-navy-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-[400px] h-[500px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-500/10 rounded-3xl blur-2xl" />
                  <div className="relative w-full h-full rounded-3xl gradient-card border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-6 shadow-lg">
                      <BookOpen className="h-10 w-10 text-navy-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      Why Choose Us?
                    </h3>
                    <p className="text-navy-600 mb-6">
                      Structured learning, proven results
                    </p>
                    <div className="space-y-4 w-full">
                      {[
                        "Personalized Attention",
                        "Past Paper Practice",
                        "Exam-Focused Strategy",
                        "Free Trial Class",
                      ].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3 bg-navy-50 rounded-xl px-4 py-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-gold-500" />
                          <span className="text-sm font-medium text-navy-700">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-navy-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-navy-400 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-navy-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

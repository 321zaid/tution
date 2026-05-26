"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Medal, Trophy, Star, ArrowUp } from "lucide-react"

const results = [
  {
    icon: Trophy,
    value: "45+",
    label: "A* in IGCSE",
    color: "from-gold-400 to-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: Award,
    value: "95%",
    label: "O/L Pass Rate",
    color: "from-green-400 to-green-500",
    bg: "bg-green-50",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "A/L Distinctions",
    color: "from-blue-400 to-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Medal,
    value: "120+",
    label: "Grade Improvements",
    color: "from-purple-400 to-purple-500",
    bg: "bg-purple-50",
  },
]

const improvements = [
  { from: "C", to: "A", subject: "O/L Mathematics", time: "3 months" },
  { from: "D", to: "B", subject: "IGCSE Mathematics", time: "4 months" },
  { from: "B", to: "A*", subject: "Edexcel IAL P1", time: "2 months" },
  { from: "E", to: "C", subject: "A/L Combined Maths", time: "6 months" },
]

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 bg-white/10 rounded-full px-4 py-1.5 mb-4">
            Results &amp; Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              Results
            </span>
            , Every Step
          </h2>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of students who have
            transformed their grades and built confidence in mathematics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 transition-all"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${result.bg} bg-opacity-20`}
              >
                <result.icon className={`h-7 w-7 bg-gradient-to-br ${result.color} bg-clip-text text-transparent`} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {result.value}
              </div>
              <div className="text-sm text-navy-300">{result.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Real Student Improvements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((imp, i) => (
              <motion.div
                key={imp.subject}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-red-400">
                    {imp.from}
                  </span>
                  <ArrowUp className="h-5 w-5 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">
                    {imp.to}
                  </span>
                </div>
                <div className="text-sm font-medium text-navy-200">
                  {imp.subject}
                </div>
                <div className="text-xs text-navy-400 mt-1">{imp.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

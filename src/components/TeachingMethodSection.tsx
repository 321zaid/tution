"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Star, Shield, Zap, Target } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Proven Track Record",
    description:
      "Years of experience with consistent A* and A results across all syllabuses.",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description:
      "Each student receives individual attention and a customized learning plan.",
  },
  {
    icon: Shield,
    title: "Exam-Focused Strategy",
    description:
      "Targeted past paper practice and exam techniques for maximum marks.",
  },
  {
    icon: Zap,
    title: "Flexible Learning",
    description:
      "Choose between online or physical classes with flexible scheduling options.",
  },
]

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description: "Reach out via WhatsApp, phone, or our enrollment form.",
  },
  {
    step: "02",
    title: "Free Assessment",
    description: "We evaluate the student's current level and learning needs.",
  },
  {
    step: "03",
    title: "Choose a Class",
    description: "Select the most suitable class format and schedule.",
  },
  {
    step: "04",
    title: "Start Learning",
    description: "Begin your journey to math excellence with structured guidance.",
  },
]

export default function TeachingMethodSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold-50 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
              Teaching Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6">
              Why Students Excel With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
                Our Approach
              </span>
            </h2>
            <p className="text-navy-600 mb-8 text-lg">
              Our teaching methodology combines conceptual clarity with strategic
              exam preparation, ensuring students not only understand math but
              also excel in exams.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-navy-50 transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50">
                    <feature.icon className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold-400/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-100 rounded-2xl" />
            <div className="relative rounded-2xl gradient-card border border-navy-100 p-8 shadow-xl shadow-navy-900/5">
              <h3 className="text-xl font-bold text-navy-900 mb-8">
                How to Enroll
              </h3>
              <div className="space-y-0">
                {steps.map((s, i) => (
                  <div key={s.step} className="relative flex gap-6 pb-8 last:pb-0">
                    {i < steps.length - 1 && (
                      <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 to-navy-200" />
                    )}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-xs font-bold text-navy-900 shadow-md">
                      {s.step}
                    </div>
                    <div className="min-w-0 pt-1">
                      <h4 className="font-semibold text-navy-900">{s.title}</h4>
                      <p className="text-sm text-navy-600">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-navy-800 to-navy-900 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
  Quote,
} from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Qualifications",
    items: [
      "B.Sc. in Mathematics (Honours)",
      "Postgraduate Diploma in Education",
      "10+ Years Teaching Experience",
    ],
  },
  {
    icon: BookOpen,
    title: "Syllabuses Covered",
    items: [
      "Local O/L & A/L",
      "Cambridge IGCSE & A/AS Level",
      "Edexcel IGCSE & IAL",
      "Pearson Edexcel",
    ],
  },
  {
    icon: Users,
    title: "Teaching Approach",
    items: [
      "Concept-based learning",
      "Step-by-step problem solving",
      "Regular progress assessments",
      "Personalized attention",
    ],
  },
  {
    icon: Award,
    title: "Achievements",
    items: [
      "95% pass rate in O/L Mathematics",
      "Multiple A* results in IGCSE",
      "Top scores in A/L Combined Maths",
      "Awarded Best Teacher 2023",
    ],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
            About the Teacher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
            Meet Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
              Math Mentor
            </span>
          </h2>
          <p className="mt-4 text-navy-600 text-lg max-w-2xl mx-auto">
            A passionate educator dedicated to making mathematics accessible,
            enjoyable, and results-driven for every student.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy-100 rounded-2xl" />
              <div className="relative rounded-2xl gradient-card border border-navy-100 p-8 sm:p-10 shadow-xl shadow-navy-900/5">
                <Quote className="h-10 w-10 text-gold-400 mb-4" />
                <p className="text-navy-700 text-lg leading-relaxed mb-6">
                  I believe every student can excel in mathematics with the right
                  guidance, patience, and structured approach. My goal is not just
                  to teach math, but to build confidence and a love for
                  problem-solving that lasts a lifetime.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-white font-bold text-lg">
                    MT
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">
                      Mr. M. Tharindu
                    </div>
                    <div className="text-sm text-navy-500">
                      Senior Mathematics Teacher
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group rounded-xl border border-navy-100 bg-white p-5 hover:shadow-lg hover:border-navy-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-navy-100 group-hover:from-navy-100 group-hover:to-navy-200 transition-colors">
                    <item.icon className="h-6 w-6 text-navy-700" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <ul className="space-y-1">
                      {item.items.map((sub) => (
                        <li
                          key={sub}
                          className="flex items-center gap-2 text-sm text-navy-600"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

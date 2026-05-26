"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Download,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Lock,
  Youtube,
  FileSpreadsheet,
} from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Past Papers",
    description:
      "Access past papers with marking schemes for all syllabuses.",
    type: "Free",
    count: "50+ papers",
    color: "from-blue-400 to-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: FileSpreadsheet,
    title: "Formula Sheets",
    description:
      "Comprehensive formula sheets organized by topic and level.",
    type: "Free",
    count: "20+ sheets",
    color: "from-green-400 to-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Lightbulb,
    title: "Revision Tips",
    description:
      "Exam strategies and revision techniques from top performers.",
    type: "Free",
    count: "15+ guides",
    color: "from-gold-400 to-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: Youtube,
    title: "Video Lessons",
    description:
      "Topic-wise video explanations and worked examples.",
    type: "Premium",
    count: "100+ videos",
    color: "from-red-400 to-red-500",
    bg: "bg-red-50",
  },
  {
    icon: BookOpen,
    title: "Worksheets",
    description:
      "Topic-wise practice worksheets with step-by-step solutions.",
    type: "Premium",
    count: "200+ worksheets",
    color: "from-purple-400 to-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: FileText,
    title: "Exam Guides",
    description:
      "Complete exam preparation guides with tips and strategies.",
    type: "Premium",
    count: "10+ guides",
    color: "from-navy-400 to-navy-500",
    bg: "bg-navy-50",
  },
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="relative overflow-hidden bg-white">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-50 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
            Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
            Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
              Resources
            </span>
          </h2>
          <p className="mt-4 text-navy-600 text-lg max-w-2xl mx-auto">
            Access a growing library of learning materials designed to help you
            excel in mathematics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl gradient-card border border-navy-100 p-6 shadow-lg shadow-navy-900/5 hover:shadow-xl hover:border-navy-200 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${resource.bg}`}
                >
                  <resource.icon
                    className={`h-6 w-6 bg-gradient-to-br ${resource.color} bg-clip-text text-transparent`}
                  />
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    resource.type === "Free"
                      ? "bg-green-50 text-green-700"
                      : "bg-gold-50 text-gold-700"
                  }`}
                >
                  {resource.type === "Free" ? "Free" : "Students Only"}
                </span>
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-1">
                {resource.title}
              </h3>
              <p className="text-sm text-navy-600 mb-3">{resource.description}</p>

              <div className="flex items-center justify-between pt-3 border-t border-navy-100">
                <span className="text-xs text-navy-500">{resource.count}</span>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  {resource.type === "Free" ? (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </>
                  ) : (
                    <>
                      <Lock className="h-3.5 w-3.5" />
                      Enroll to Access
                    </>
                  )}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl bg-navy-900 text-white px-6 py-3 text-base font-semibold shadow-lg hover:bg-navy-800 transition-all"
          >
            Access All Resources
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

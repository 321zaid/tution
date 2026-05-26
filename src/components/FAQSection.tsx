"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "What grades do you teach?",
    a: "We teach students from Grade 6 through A/L, including IGCSE, Edexcel IAL, Cambridge, and local syllabus students at all levels.",
  },
  {
    q: "Do you teach online or physical classes?",
    a: "We offer both online and physical classes. Online classes are conducted via Zoom/Google Meet with interactive digital whiteboards. Physical classes are held at our tuition center.",
  },
  {
    q: "Which syllabuses do you cover?",
    a: "We cover Local O/L & A/L, Cambridge IGCSE & A/AS Level, Edexcel IGCSE & IAL, and Pearson Edexcel syllabuses.",
  },
  {
    q: "Are individual classes available?",
    a: "Yes, we offer both group and individual (one-on-one) classes. Individual classes are tailored to the student's specific needs and pace.",
  },
  {
    q: "Do you provide past paper practice?",
    a: "Absolutely. Past paper practice is an integral part of our teaching method. We provide past papers, marking schemes, and detailed solutions.",
  },
  {
    q: "How can I register?",
    a: "You can register by filling the enrollment form on this website, contacting us via WhatsApp, or calling us directly. We'll guide you through the process.",
  },
  {
    q: "What are the class fees?",
    a: "Fees vary by class type and level. Group classes start from Rs. 3,500/month, individual classes from Rs. 5,000/month. Contact us for detailed pricing.",
  },
  {
    q: "Do you offer trial classes?",
    a: "Yes, we offer a free trial class for new students. This helps us assess the student's level and helps the student experience our teaching style.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden bg-navy-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-navy-600 text-lg">
            Everything you need to know about our tuition classes.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className={`rounded-2xl border transition-all cursor-pointer ${
                openIndex === i
                  ? "bg-white border-navy-200 shadow-lg shadow-navy-900/5"
                  : "bg-white/80 border-navy-100 hover:border-navy-200 hover:shadow-md"
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <HelpCircle
                    className={`h-5 w-5 shrink-0 ${
                      openIndex === i ? "text-gold-500" : "text-navy-400"
                    }`}
                  />
                  <span className="text-base font-semibold text-navy-900">
                    {faq.q}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    openIndex === i ? "bg-gold-50" : "bg-navy-50"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 ${
                      openIndex === i ? "text-gold-600" : "text-navy-500"
                    }`}
                  />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="h-px bg-navy-100 mb-4" />
                      <p className="text-navy-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-navy-600 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl bg-navy-900 text-white px-6 py-3 text-base font-semibold shadow-lg hover:bg-navy-800 transition-all"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

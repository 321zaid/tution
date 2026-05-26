"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  User,
  Users,
  BookOpen,
  Monitor,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+94 77 123 4567",
    href: "https://wa.me/94771234567",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mathtuition.lk",
    href: "mailto:info@mathtuition.lk",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo 05, Sri Lanka",
    href: "#",
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-50 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-navy-600 text-lg max-w-2xl mx-auto">
            Ready to start your math journey? Contact us today for a free trial or
            any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 rounded-xl p-4 transition-all ${
                  info.highlight
                    ? "bg-green-50 border border-green-200 hover:bg-green-100"
                    : "bg-navy-50 border border-navy-100 hover:bg-navy-100"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    info.highlight ? "bg-green-100" : "bg-white"
                  }`}
                >
                  <info.icon
                    className={`h-5 w-5 ${
                      info.highlight
                        ? "text-green-600"
                        : "text-navy-700"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-xs text-navy-500">{info.label}</div>
                  <div
                    className={`text-sm font-semibold ${
                      info.highlight ? "text-green-700" : "text-navy-900"
                    }`}
                  >
                    {info.value}
                  </div>
                </div>
                {info.highlight && (
                  <div className="ml-auto">
                    <div className="animate-pulse flex h-2 w-2 rounded-full bg-green-500" />
                  </div>
                )}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/94771234567"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3.5 text-base font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl gradient-card border border-navy-100 p-6 sm:p-8 shadow-xl shadow-navy-900/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Registration Submitted!
                  </h3>
                  <p className="text-navy-600">
                    We&apos;ll contact you within 24 hours. Thank you!
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-navy-900 mb-6">
                    Register for Classes
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Student Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                          <input
                            required
                            className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                            placeholder="Student's full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Parent/Guardian Name
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                          <input
                            className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                            placeholder="Parent's name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Contact Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                          <input
                            required
                            className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                            placeholder="+94 77 XXX XXXX"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          WhatsApp Number
                        </label>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                          <input
                            className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                            placeholder="+94 77 XXX XXXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                        <input
                          type="email"
                          className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Grade / Year *
                        </label>
                        <select
                          required
                          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all"
                        >
                          <option value="">Select grade</option>
                          <option>Grade 6 - 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11 (O/L)</option>
                          <option>IGCSE</option>
                          <option>Edexcel IAL</option>
                          <option>A/L (Local)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Preferred Class
                        </label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                          <select className="w-full rounded-xl border border-navy-200 bg-white pl-10 pr-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all">
                            <option value="">Select class</option>
                            <option>Group Class</option>
                            <option>Individual Class</option>
                            <option>Past Paper Revision</option>
                            <option>Not Sure Yet</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Online or Physical *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Online", "Physical", "Either"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-2 rounded-xl border border-navy-200 px-4 py-3 cursor-pointer hover:border-navy-900 hover:bg-navy-50 transition-all has-[:checked]:border-navy-900 has-[:checked]:bg-navy-50 has-[:checked]:ring-1 has-[:checked]:ring-navy-900"
                          >
                            <input
                              type="radio"
                              name="mode"
                              className="accent-navy-900"
                            />
                            <span className="text-sm font-medium text-navy-700">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-900/10 focus:border-navy-900 transition-all resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-800 to-navy-900 text-white px-6 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="h-4 w-4" />
                      Submit Registration
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

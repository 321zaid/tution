"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Award, BookOpen } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Classes", href: "#classes" },

    { label: "FAQ", href: "#faq" },
  ],
  classes: [
    { label: "Grade 10 Mathematics", href: "#classes" },
    { label: "O/L Mathematics", href: "#classes" },
    { label: "A/L Combined Maths", href: "#classes" },
    { label: "Edexcel IAL", href: "#classes" },
    { label: "IGCSE Mathematics", href: "#classes" },
  ],
  contact: [
    { label: "WhatsApp", href: "#" },
    { label: "Email", href: "#" },
    { label: "Contact Form", href: "#contact" },
    { label: "Book a Trial", href: "#contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <BookOpen className="h-5 w-5 text-gold-400" />
              </div>
              <span className="text-lg font-bold text-white">
                Math<span className="text-gold-400">Tuition</span>
              </span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Expert mathematics tuition for O/L, A/L, IGCSE, Cambridge & Edexcel
              students. Building confidence and academic excellence.
            </p>
            <div className="flex gap-3">
              {[Heart, Sparkles, Award].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Icon className="h-4 w-4 text-gold-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
                {title.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} Math Tuition Platform. All rights
            reserved.
          </p>
          <p className="text-sm text-navy-400 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" /> for
            education
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

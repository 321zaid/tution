"use client"

import { motion } from "framer-motion"
import {
  Clock,
  DollarSign,
  Users,
  Monitor,
  MapPin,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const classes = [
  {
    level: "Grade 10 Mathematics",
    description:
      "Build a strong foundation for O/L with comprehensive coverage of the local syllabus.",
    syllabus: "Local Syllabus",
    type: "Group, Online & Physical",
    schedule: "Saturday 9:00 AM - 11:00 AM",
    duration: "2 hours",
    fee: "Rs. 3,500/month",
    status: "Open",
    tags: ["Local Syllabus", "Group Class"],
  },
  {
    level: "Grade 11 O/L Mathematics",
    description:
      "Exam-focused preparation with past paper practice and revision strategies.",
    syllabus: "Local Syllabus",
    type: "Group, Online & Physical",
    schedule: "Sunday 9:00 AM - 11:00 AM",
    duration: "2 hours",
    fee: "Rs. 3,500/month",
    status: "Open",
    tags: ["Local Syllabus", "Group Class"],
  },
  {
    level: "Edexcel IAL Pure Mathematics 1",
    description:
      "Complete coverage of P1 with exam techniques and past paper practice.",
    syllabus: "Edexcel IAL",
    type: "Individual & Group",
    schedule: "Wednesday 4:00 PM - 6:00 PM",
    duration: "2 hours",
    fee: "Rs. 5,000/month",
    status: "Open",
    tags: ["Edexcel", "IAL"],
  },
  {
    level: "Edexcel IAL Mechanics 1",
    description:
      "Master mechanics concepts with practical problem-solving approaches.",
    syllabus: "Edexcel IAL",
    type: "Individual & Group",
    schedule: "Friday 4:00 PM - 6:00 PM",
    duration: "2 hours",
    fee: "Rs. 5,000/month",
    status: "Open",
    tags: ["Edexcel", "IAL"],
  },
  {
    level: "Cambridge IGCSE Mathematics",
    description:
      "Cover all core and extended topics for Cambridge IGCSE Mathematics (0580).",
    syllabus: "Cambridge IGCSE",
    type: "Group, Online & Physical",
    schedule: "Tuesday 5:00 PM - 7:00 PM",
    duration: "2 hours",
    fee: "Rs. 4,000/month",
    status: "Open",
    tags: ["Cambridge", "IGCSE"],
  },
  {
    level: "A/L Combined Mathematics",
    description:
      "Advanced level mathematics covering pure, mechanics, and statistics.",
    syllabus: "Local A/L",
    type: "Group & Individual",
    schedule: "Monday 5:30 PM - 8:00 PM",
    duration: "2.5 hours",
    fee: "Rs. 7,000/month",
    status: "Open",
    tags: ["Local A/L", "Combined Maths"],
  },
  {
    level: "Past Paper Revision Classes",
    description:
      "Intensive revision sessions focusing on past papers and exam strategies.",
    syllabus: "All Syllabuses",
    type: "Group",
    schedule: "Weekends (Flexible)",
    duration: "3 hours",
    fee: "Rs. 2,500/session",
    status: "Upcoming",
    tags: ["Revision", "All Levels"],
  },
]

const details = [
  { icon: BookOpen, label: "Syllabus", value: "Edexcel, Cambridge, Local" },
  { icon: Users, label: "Class Type", value: "Group / Individual / Online" },
  { icon: Clock, label: "Duration", value: "1.5 - 3 hours per session" },
  { icon: DollarSign, label: "Fees", value: "Starting from Rs. 2,500/month" },
]

export default function ClassesSection() {
  return (
    <section id="classes" className="relative overflow-hidden bg-navy-50">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 bg-gold-50 rounded-full px-4 py-1.5 mb-4">
            Our Classes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
            Available{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-500">
              Courses
            </span>
          </h2>
          <p className="mt-4 text-navy-600 text-lg max-w-2xl mx-auto">
            Choose from a wide range of classes tailored to different syllabuses,
            levels, and learning preferences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="flex items-center gap-3 rounded-xl bg-white border border-navy-100 p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                <item.icon className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <div className="text-xs text-navy-500">{item.label}</div>
                <div className="text-sm font-semibold text-navy-900">
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-white border border-navy-100 p-6 shadow-lg shadow-navy-900/5 hover:shadow-xl hover:border-navy-200 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    cls.status === "Open"
                      ? "bg-green-50 text-green-700"
                      : "bg-gold-50 text-gold-700"
                  }`}
                >
                  {cls.status}
                </span>
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {cls.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-navy-500 bg-navy-50 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                {cls.level}
              </h3>
              <p className="text-sm text-navy-600 mb-4 flex-1">
                {cls.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <BookOpen className="h-3.5 w-3.5 text-navy-400" />
                  {cls.syllabus}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <Users className="h-3.5 w-3.5 text-navy-400" />
                  {cls.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <Clock className="h-3.5 w-3.5 text-navy-400" />
                  {cls.schedule}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-500">
                  <Monitor className="h-3.5 w-3.5 text-navy-400" />
                  {cls.duration}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-900 pt-1">
                  <DollarSign className="h-3.5 w-3.5 text-gold-500" />
                  {cls.fee}
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-navy-800 transition-all group-hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ClassesSection from "@/components/ClassesSection"
import TeachingMethodSection from "@/components/TeachingMethodSection"
import ResultsSection from "@/components/ResultsSection"
import ResourcesSection from "@/components/ResourcesSection"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <TeachingMethodSection />
      <ResultsSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import ProblemSolution from "@/components/sections/problem-solution"
import HowItWorks from "@/components/sections/how-it-works"
import Dashboard from "@/components/sections/dashboard"
import VerificationCta from "@/components/sections/verification-cta"
import TrustImpact from "@/components/sections/trust-impact"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Dashboard />
        <VerificationCta />
        <TrustImpact />
      </main>
      <Footer />
    </div>
  )
}

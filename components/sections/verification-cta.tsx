"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function VerificationCta() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="verify"
      className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={containerRef} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            Your confirmation matters more than any report.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Citizen verification is the foundation of real government accountability. Make your voice heard.
          </p>

          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 text-lg animate-pulse-glow"
          >
            Verify a Project Now
          </Button>

          <div className="mt-12 text-primary-foreground/80">
            <p className="text-sm">Join 2,500+ citizens verifying government transparency</p>
          </div>
        </div>
      </div>
    </section>
  )
}

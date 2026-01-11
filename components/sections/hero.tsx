"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Hero() {
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
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div ref={containerRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance text-foreground">
              Transparency Starts on the Ground.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
              A citizen-powered platform that tracks public projects and verifies whether government work is actually
              happening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-base font-semibold px-8"
                onClick={() => window.open("https://tally.so/r/menk2x", "_blank", "noopener,noreferrer")}
              >
                Verify a Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base font-semibold px-8 bg-transparent"
                onClick={() => {
                  const element = document.getElementById("dashboard");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Live Transparency
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex justify-center">
              <div className="animate-bounce flex flex-col items-center text-muted-foreground">
                <span className="text-sm mb-2">Scroll to explore</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/civic-hero.png"
                alt="Civic Transparency Platform Illustration"
                width={400}
                height={420}
                className="object-contain drop-shadow-lg animate-fade-in-up"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

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

  const steps = [
    {
      number: "01",
      title: "Projects are added to the system",
      description: "Public projects are registered with location, timeline, and budget information.",
      icon: "📌",
    },
    {
      number: "02",
      title: "Citizens in the same area automatically receive notifications",
      description: "Community members are notified about projects happening near them.",
      icon: "🔔",
    },
    {
      number: "03",
      title: "Citizens verify the work on the ground with one click",
      description: "Simple verification from citizens becomes real-time transparency.",
      icon: "✓",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={containerRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How the Platform Works</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">Three simple steps to government transparency</p>

          {/* Interactive steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-8 rounded-lg border transition-all duration-300 ${
                  activeStep === index ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm font-semibold text-primary mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {/* Progress indicator */}
                <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-primary transition-all duration-300 ${
                      activeStep === index ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline visualization */}
          <div className="mt-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activeStep + 1) * 33.333}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

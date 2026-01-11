"use client"

import { useEffect, useRef } from "react"

export default function ProblemSolution() {
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

  const problemSteps = [
    { title: "Announcement", description: "Government announces a public project" },
    { title: "Allocated Budget", description: "Funds are approved and allocated" },
    { title: "Radio Silence", description: "No communication for months" },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Public projects are announced. Budgets are allocated. But citizens rarely know what actually happens on
              the ground.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Without real-time verification, accountability disappears.
            </p>
          </div>

          {/* Right side - Problem cards */}
          <div className="space-y-4">
            {problemSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution divider */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-time citizen verification creates unstoppable accountability. When citizens verify projects on the
            ground, government performance becomes transparent and measurable.
          </p>
        </div>
      </div>
    </section>
  )
}

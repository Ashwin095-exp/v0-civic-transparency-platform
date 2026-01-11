"use client"

import { useEffect, useRef } from "react"

export default function TrustImpact() {
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

  const impacts = [
    {
      icon: "👥",
      title: "Community-driven accountability",
      description: "Citizens become watchdogs, not spectators",
    },
    {
      icon: "⚡",
      title: "Real-time citizen verification",
      description: "Instant transparency without bureaucracy",
    },
    {
      icon: "📊",
      title: "Transparency beyond paperwork",
      description: "Data citizens can see and act upon",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={containerRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why This Matters</h2>
          <p className="text-lg text-muted-foreground mb-12">Real-time civic transparency changes everything</p>

          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{impact.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-center text-foreground max-w-2xl mx-auto">
              <span className="font-semibold">Government works for citizens.</span> When transparency is built in, so is
              trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

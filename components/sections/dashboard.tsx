"use client"

import { useEffect, useRef } from "react"

export default function Dashboard() {
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

  const projects = [
    { id: 1, name: "Downtown Infrastructure", location: "District A", status: "Happening", progress: 75 },
    { id: 2, name: "Park Renovation", location: "District B", status: "Happening", progress: 45 },
    { id: 3, name: "School Expansion", location: "District C", status: "Partial", progress: 60 },
    { id: 4, name: "Road Repair", location: "District D", status: "Not Happening", progress: 10 },
  ]

  const statusColors = {
    Happening: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Partial: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "Not Happening": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  }

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div ref={containerRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Live Project Transparency</h2>
          <p className="text-lg text-muted-foreground mb-12">Real-time citizen verification across your region</p>

          {/* Dashboard stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Projects Tracked", value: "24", color: "bg-primary/10" },
              { label: "Citizen Verifications", value: "1,247", color: "bg-accent/10" },
              { label: "Transparency Rate", value: "94%", color: "bg-green-100 dark:bg-green-900" },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} p-6 rounded-lg border border-border`}>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Projects table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Project</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Location</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Progress</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{project.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{project.location}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          statusColors[project.status as keyof typeof statusColors]
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 border-2 border-dashed border-border rounded-lg text-center">
            <p className="text-muted-foreground mb-4">This section is designed to embed live data dashboards</p>
            <p className="text-sm text-muted-foreground">Connect Looker Studio, API data, or custom analytics here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

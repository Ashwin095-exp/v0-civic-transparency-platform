"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            CT
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">Civic Transparency</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a 
            href="https://tally.so/r/MeNk2X" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Verify
          </a>
        </nav>
        <button
  type="button"
  onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    window.open("https://tally.so/r/menk2x", "_blank", "noopener,noreferrer")
  }}
>
  Verify a Project
</button>

      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAppStore } from "@/lib/store"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn, isAdmin, setLoggedIn, setAdmin } = useAppStore()

  const handleLogin = () => {
    setLoggedIn(true)
    // Simulate admin access for demo
    if (!isAdmin) setAdmin(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setAdmin(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Enhanced with gradient effect */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-xl group-hover:from-[#64ffda]/30 group-hover:to-[#64ffda]/20 transition-all duration-200">
              <GraduationCap className="h-8 w-8 text-[#64ffda]" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Collegindino
            </span>
          </Link>

          {/* Desktop Navigation - Enhanced spacing and hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#64ffda] transition-all duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-[#64ffda] transition-all duration-200 relative group"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-200 group-hover:w-full" />
            </Link>
            {isLoggedIn && (
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-[#64ffda] transition-all duration-200 relative group"
              >
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-200 group-hover:w-full" />
              </Link>
            )}
            {isAdmin && (
              <Link
                href="/admin"
                className="text-sm font-medium hover:text-[#64ffda] transition-all duration-200 relative group"
              >
                Admin
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-200 group-hover:w-full" />
              </Link>
            )}
          </div>

          {/* Desktop Auth & Theme - Enhanced button styling */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200 bg-transparent"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                size="sm"
                className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#64ffda]/20 transition-all duration-200"
              >
                Login
              </Button>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-[#64ffda] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium hover:text-[#64ffda] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              {isLoggedIn && (
                <Link
                  href="/dashboard"
                  className="text-sm font-medium hover:text-[#64ffda] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="text-sm font-medium hover:text-[#64ffda] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              )}
              <div className="pt-2">
                {isLoggedIn ? (
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full bg-transparent">
                    Logout
                  </Button>
                ) : (
                  <Button onClick={handleLogin} size="sm" className="w-full bg-[#64ffda] text-black hover:bg-[#4fd1c7]">
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

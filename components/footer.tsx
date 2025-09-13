import { Github, Linkedin, GraduationCap, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-xl">
                <GraduationCap className="h-8 w-8 text-[#64ffda]" />
              </div>
              <span className="text-2xl font-bold">Collegindino</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
              Empowering learners worldwide with premium courses and expert instruction. Join thousands of students who
              have transformed their careers with us.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-[#64ffda] transition-all duration-200 p-2 hover:bg-[#64ffda]/10 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-[#64ffda] transition-all duration-200 p-2 hover:bg-[#64ffda]/10 rounded-lg"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-muted-foreground hover:text-[#64ffda] transition-colors text-sm">
                Home
              </Link>
              <Link
                href="/courses"
                className="block text-muted-foreground hover:text-[#64ffda] transition-colors text-sm"
              >
                Courses
              </Link>
              <Link
                href="/dashboard"
                className="block text-muted-foreground hover:text-[#64ffda] transition-colors text-sm"
              >
                Dashboard
              </Link>
              <Link
                href="/admin"
                className="block text-muted-foreground hover:text-[#64ffda] transition-colors text-sm"
              >
                Admin
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-[#64ffda]" />
                <span>hello@collegindino.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-[#64ffda]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#64ffda]" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Collegindino. All rights reserved. Made with ❤️ for learners worldwide.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#64ffda] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#64ffda] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#64ffda] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

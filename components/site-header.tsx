"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <Image
              src="/hynox_logo.jpg"
              alt="HYNOX Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            HYNOX
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="flex items-center gap-8">
              <Link href="/#home" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/#products" className="text-white hover:text-gray-300 transition-colors">
                Products
              </Link>
              <Link href="/#services" className="text-white hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link href="tel:+918870524355" className="text-white hover:text-gray-300 transition-colors">
                +91 8870524355
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-white/10 md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { name: "Home", href: "/#home" },
                { name: "Products", href: "/#products" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/about" },
                { name: "Meet our Team", href: "/team" },
                { name: "Contact", href: "tel:+918870524355" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`capitalize py-2 text-gray-400 hover:text-white`}
                  onClick={closeMobileMenu} // Close menu on link click
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

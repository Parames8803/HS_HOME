"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navigationItems = [
    { name: "Home", href: "/#home" },
    { name: "Solutions", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/about" }
  ]

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/95 backdrop-blur-lg border-b border-gray-800" 
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/hynox_logo.jpg"
                      alt="HYNOX Logo"
                      width={36}
                      height={36}
                      className="rounded-full border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                    />
                  </motion.div>
                </div>
                <motion.span 
                  className="text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  HYNOX
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <div className="flex items-center gap-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="relative text-gray-400 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase group"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"
                        whileHover={{ scaleX: 1 }}
                        initial={{ scaleX: 0 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="border border-gray-600 hover:border-gray-400 px-6 py-2 text-gray-400 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
                  >
                    Contact
                  </motion.div>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50 lg:hidden"
            >
              <div className="container mx-auto px-4 py-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                    <Image
                      src="/hynox_logo.jpg"
                      alt="HYNOX Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-lg font-light text-white">HYNOX</span>
                  </Link>
                  
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-4 text-gray-400 hover:text-white transition-colors duration-300 font-light text-lg border-b border-gray-800 last:border-b-0"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="https://wa.me/918870524355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-300 font-light"
                      onClick={closeMobileMenu}
                    >
                      <Phone size={16} />
                      WhatsApp
                    </Link>
                    
                    <Link
                      href="mailto:thehynoxofficial@gmail.com"
                      className="flex items-center justify-center gap-2 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-300 font-light"
                      onClick={closeMobileMenu}
                    >
                      <Mail size={16} />
                      Email
                    </Link>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-white text-black py-3 text-center font-light hover:bg-gray-200 transition-colors duration-300"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
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
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
  ]

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-black/95 backdrop-blur-md border-b border-white/20 shadow-lg" 
            : "bg-black/80 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-bold flex items-center gap-3"
            >
              <div className="relative">
                <Image
                  src="/hynox_logo.jpg"
                  alt="HYNOX Logo"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-white/20 hover:border-white/40 transition-colors"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                HYNOX
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center gap-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="relative text-white/90 hover:text-white transition-all duration-300 font-medium group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link 
                    href="tel:+918870524355" 
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Phone size={16} />
                    <span className="hidden xl:inline">+91 8870524355</span>
                    <span className="xl:hidden">Call</span>
                  </Link>
                </motion.div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:hidden relative z-50 p-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                  <Image
                    src="/hynox_logo.jpg"
                    alt="HYNOX Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-xl font-bold text-white">HYNOX</span>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-6">
                  {[
                    ...navigationItems
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="tel:+918870524355"
                      className="flex items-center gap-3 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                      onClick={closeMobileMenu}
                    >
                      <Phone size={18} />
                      <span>+91 8870524355</span>
                    </Link>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <Link
                    href="/#contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg text-white text-center font-medium transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Get In Touch
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

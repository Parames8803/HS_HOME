"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function TeamClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  const teamMembers = [
    {
      name: "Sukash",
      role: "Founder & CEO",
      quote: "Leading the vision, empowering the team, and building a future where design meets purpose.",
      image: "/member5.jpg",
    },
    {
      name: "Parameswaran E",
      role: "Developer / CTO",
      quote: "Architecting robust solutions and pushing the boundaries of technology to create seamless experiences.",
      image: "/member6.jpg",
    },
    {
      name: "Swasthik",
      role: "Developer / CFO",
      quote: "Balancing innovation with financial strategy to ensure sustainable growth and a strong technical foundation.",
      image: "/member3.jpg",
    },
    {
      name: "Surrendar Prakash",
      role: "Graphic Designer",
      quote: "Transforming concepts into compelling visuals that resonate with our audience and define our brand identity.",
      image: "/member4.jpg",
    },
    {
      name: "Hrithik S",
      role: "Operations",
      quote: "Streamlining processes and ensuring smooth daily operations to deliver exceptional service and efficiency.",
      image: "/member2.jpg",
    },
    {
      name: "Anbu Selvan",
      role: "Store Manager",
      quote: "Creating an inviting atmosphere and ensuring a seamless experience for every customer who walks through our doors.",
      image: "/member1.jpg",
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
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
              <Link href="/team" className="text-white hover:text-gray-300 transition-colors">
                Meet our Team
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
              {["Home", "Products", "Services", "About Us", "Meet our Team"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/#${item.toLowerCase().replace(" ", "-")}`}
                  className={`capitalize py-2 ${
                    activeSection === item
                      ? "text-white border-l-2 pl-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Minds Behind
            <span className="block">HYNOX</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            We're not your typical team. We're dreamers who code, creators who ship, and rebels who believe fashion and
            technology can change the world. Meet the humans building tomorrow's wardrobe.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "bg-white border-2 border-black" : "bg-black text-white"
                }`}
              >
                <div className="p-8">
                  <div className="relative mb-6 mt-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-40 h-40 mx-auto rounded-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg font-medium mb-4 ${index % 2 === 0 ? "text-gray-600" : "text-gray-300"}`}>
                      {member.role}
                    </p>
                    <p className={`italic text-sm ${index % 2 === 0 ? "text-gray-500" : "text-gray-400"}`}>
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our DNA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Think Different</h3>
              <p className="text-gray-300">
                We question everything, challenge norms, and create solutions that don't exist yet.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Move Fast</h3>
              <p className="text-gray-300">
                Speed is our superpower. We iterate, learn, and ship at the speed of thought.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Human</h3>
              <p className="text-gray-300">
                Technology serves people, not the other way around. We build with empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Ready to Join the Revolution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for brilliant minds who want to reshape how the world thinks about fashion and
            technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/919500656339', '_blank')}
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Contact Section / Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-white" />
                <span className="ml-2 text-xl font-bold">Hynox</span>
              </div>
              <p className="text-gray-400">
                Delivers cutting-edge IT solutions and efficient manufacturing services. <br />
                We connect technology and industry to drive innovation and growth.
              </p>
              <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/hynox/" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/hynox.z?igsh=aWdjZzd3OGo1NjY4&utm_source=qr" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/drop" className="text-gray-400 hover:text-white transition-colors">
                    Dropshipping
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Software Development
              </Link>
                </li>
                <li>
                  <Link href="/marketing" className="text-gray-400 hover:text-white transition-colors">
                    Digital Marketing
              </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
              </Link>
                </li>
                <li>
              <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                    Meet our Team
              </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">hello.hynox@gamil.com</li>
                <li className="text-gray-400">+91 9500656339</li>
                <li className="text-gray-400">Jeeva St,Pandiyan Nagar,Tirupur-641 602</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 The Black Crest. All rights reserved.
              <div className="flex gap-4 mt-2">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
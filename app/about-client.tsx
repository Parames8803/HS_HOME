"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion"
import { Code, Shirt, Zap, Target, Sparkles, ChevronDown, ArrowRight, Lightbulb, Rocket, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutClient() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const sections = ["STORY", "MISSION", "DIFFERENCE", "VALUES"]

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animated counter for stats
  const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
    const [count, setCount] = useState(from)
    const countRef = useRef(null)
    const inView = useInView(countRef)

    useEffect(() => {
      if (!inView) return

      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * (to - from) + from))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }, [from, to, duration, inView])

    return <span ref={countRef}>{count}</span>
  }

  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Text reveal animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold flex items-center gap-2 text-white"
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
              <button
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Link href="/">Home</Link>
              </button>
              <button
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Link href="/#products">Products</Link>
              </button>
              <button
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Link href="/#services">Services</Link>
              </button>
              <button
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Link href="/about">About Us</Link>
              </button>
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
                { name: "Home", action: () => scrollToSection("home") },
                { 
                  name: "Products", 
                  action: () => window.open("https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#products", "_blank")
                },
                { 
                  name: "Services", 
                  action: () => window.open("https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#services", "_blank")
                },
                { name: "About Us", action: () => window.open("/about") }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`capitalize py-2 ${
                    activeSection === item.name
                      ? "text-white border-l-2 pl-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive cursor follower */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed w-24 h-24 rounded-full bg-black bg-opacity-10 pointer-events-none z-50 mix-blend-difference"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              x: cursorPosition.x - 48,
              y: cursorPosition.y - 48,
            }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />
        )}
      </AnimatePresence>

      {/* Hero Section with Animated Text */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-[40rem] font-bold tracking-tighter">H</div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center z-10 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">
              WE ARE
              <motion.span
                className="block bg-black text-white px-4 py-2 inline-block mt-2"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                HYNOX
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="block mb-2">Where fashion meets function. Where style meets systems.</span>
            <motion.span
              className="block font-bold text-2xl md:text-4xl mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              We're redefining what it means to be cutting-edge.
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="w-10 h-10" />
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation Dots */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-6">
          {sections.map((section, index) => (
            <motion.button
              key={section}
              className={`w-3 h-3 rounded-full ${activeSection === section ? "bg-black" : "bg-gray-300"}`}
              whileHover={{ scale: 1.5 }}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase())
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                  setActiveSection(section)
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Brand Story Section with Parallax */}
      <section id="story" className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-8 text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                OUR STORY
              </motion.h2>

              <div className="space-y-6 text-lg leading-relaxed text-white">
                {[
                  "Born from the intersection of <strong>digital innovation</strong> and <strong>sartorial excellence</strong>, Hynox emerged when we realized the future demanded more than just good code or great clothes.",
                  "We saw a generation that refused to choose between looking good and thinking smart. So we built a company that delivers both—curated fashion that speaks to your style and tech solutions that amplify your vision.",
                  "This isn't just business. This is evolution.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    custom={i}
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    dangerouslySetInnerHTML={{ __html: text }}
                    className={i === 2 ? "font-semibold text-xl" : ""}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shirt, title: "FASHION", desc: "Curated monthly boxes" },
                { icon: Code, title: "TECH", desc: "Digital solutions" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white text-black p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  >
                    <item.icon className="w-16 h-16 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Animated Background */}
      <section id="mission" className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gray-100"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(1.2) brightness(0.8)",
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR MISSION
          </motion.h2>

          <motion.div
            className="bg-black text-white p-12 md:p-16 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 bg-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-white"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
              "To empower the next generation with tools that enhance both their
              <motion.strong
                className="font-bold"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {" "}
                digital presence
              </motion.strong>{" "}
              and their
              <motion.strong
                className="font-bold"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {" "}
                personal style
              </motion.strong>
              —because in 2025, there's no difference between who you are online and who you are in real life."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart with Interactive Cards */}
      <section id="difference" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHAT SETS US{" "}
            <motion.span
              className="bg-black text-white px-2 inline-block"
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              APART
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "DUAL EXPERTISE",
                desc: "We're the only company that masters both fashion curation and enterprise-level tech development. Your style and your systems, perfected.",
              },
              {
                icon: Target,
                title: "GEN Z FOCUSED",
                desc: "Built by digital natives, for digital natives. We understand the aesthetic and functionality that defines the next generation.",
              },
              {
                icon: Sparkles,
                title: "FUTURE-FIRST",
                desc: "Every piece we curate and every line of code we write is designed for tomorrow's world, not yesterday's limitations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className="bg-black text-white p-8 mb-6 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div className="absolute inset-0 bg-white opacity-0" whileHover={{ opacity: 0.1 }} />
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: i * 0.5,
                    }}
                  >
                    <item.icon className="w-16 h-16 mx-auto" />
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                <motion.div className="mt-6 inline-flex items-center text-sm font-bold" whileHover={{ x: 5 }}>
                  LEARN MORE <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Animated Reveal */}
      <section id="values" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR VALUES
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                icon: Lightbulb,
                title: "AUTHENTICITY OVER TRENDS",
                desc: "We don't chase what's popular. We define what's next.",
                color: "bg-black",
              },
              {
                icon: Target,
                title: "QUALITY OVER QUANTITY",
                desc: "Every garment curated, every solution developed—built to last and built to matter.",
                color: "bg-gray-800",
              },
              {
                icon: Rocket,
                title: "INNOVATION OVER IMITATION",
                desc: "We create new paradigms instead of copying old ones.",
                color: "bg-black",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className={`${value.color} text-white p-6 rounded-full`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.8 },
                  }}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>

                <div>
                  <h3 className="text-3xl font-bold mb-3">{value.title}</h3>
                  <p className="text-xl text-gray-600">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-white" />
                <span className="ml-2 text-xl font-bold text-white">Hynox</span>
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
              <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
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
              <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
              </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">thehynoxofficial@gmail.com</li>
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
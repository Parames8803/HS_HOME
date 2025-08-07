"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, Shirt, Zap, Target, Sparkles, ChevronDown, ArrowRight, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react" // Corrected import statement
import { useInView } from "framer-motion"

export default function AboutClient() {
  const [isHovering, setIsHovering] = useState(false)

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

  // Text reveal animation variants (simplified, no longer used for the problematic motion.p)
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
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
    </>
  )
}

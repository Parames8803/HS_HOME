"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, Shirt, Zap, Target, Sparkles, ChevronDown, ArrowRight, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function AboutClient() {
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

  return (
    <div className="bg-black text-white relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-32">
        <motion.div
          className="max-w-6xl mx-auto text-center z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About
            <span className="block text-gray-400 italic">HYNOX</span>
          </motion.h1>

          <motion.div
            className="w-16 h-px bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Where innovation meets execution. Where vision becomes reality.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-light max-w-3xl mx-auto mt-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We're redefining what it means to be cutting-edge in the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-500"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-32 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-light mb-8 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Our
                <span className="block text-gray-400 italic">Story</span>
              </motion.h2>

              <motion.div
                className="w-12 h-px bg-white mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <div className="space-y-6 text-lg leading-relaxed text-gray-300 font-light">
                {[
                  "Born from the intersection of digital innovation and creative excellence, HYNOX emerged when we realized the future demanded more than just good solutions.",
                  "We saw a generation that refused to choose between functionality and aesthetics. So we built a company that delivers both—technology that works and experiences that inspire.",
                  "This isn't just business. This is evolution."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className={i === 2 ? "text-white font-normal" : ""}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Code, title: "Technology", desc: "Digital solutions that scale" },
                { icon: Sparkles, title: "Innovation", desc: "Creative approaches to complex problems" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-900/20 border border-gray-800 p-8 text-center group hover:border-gray-600 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-light text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-32 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Mission &
              <span className="block text-gray-400 italic">Vision</span>
            </motion.h2>
            
            <motion.div
              className="w-12 h-px bg-white mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Mission</h3>
                <motion.div
                  className="w-8 h-px bg-gray-600 group-hover:w-16 transition-all duration-500"
                  whileHover={{ scaleX: 2 }}
                />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Empowering businesses to thrive in the digital age through innovative solutions 
                that bridge the gap between technology and user experience. We believe in creating 
                tools that don't just work—they inspire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Vision</h3>
                <motion.div
                  className="w-8 h-px bg-gray-600 group-hover:w-16 transition-all duration-500"
                  whileHover={{ scaleX: 2 }}
                />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                To establish a global HYNOX ecosystem that fuels innovation, entrepreneurship, 
                and sustainable growth across industries and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="difference" className="py-32 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              What Sets Us
              <span className="block text-gray-400 italic">Apart</span>
            </motion.h2>
            
            <motion.div
              className="w-12 h-px bg-white mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Dual Expertise",
                desc: "We master both creative design and technical implementation, ensuring seamless integration of form and function.",
              },
              {
                icon: Target,
                title: "Future-Focused",
                desc: "Built for tomorrow's challenges, not yesterday's limitations. We anticipate trends and prepare solutions.",
              },
              {
                icon: Sparkles,
                title: "Quality First",
                desc: "Every solution is crafted with precision and attention to detail, ensuring lasting value for our clients.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-gray-900/20 border border-gray-800 p-8 h-full group-hover:border-gray-600 transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div
                    className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6 group-hover:border-gray-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-xl font-light text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed flex-grow">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-32 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our
              <span className="block text-gray-400 italic">Values</span>
            </motion.h2>
            
            <motion.div
              className="w-12 h-px bg-white mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: Lightbulb,
                title: "Authenticity Over Trends",
                desc: "We don't chase what's popular. We define what's meaningful.",
              },
              {
                icon: Target,
                title: "Quality Over Quantity",
                desc: "Every solution developed—built to last and built to matter.",
              },
              {
                icon: Rocket,
                title: "Innovation Over Imitation",
                desc: "We create new paradigms instead of copying existing ones.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row items-start gap-8 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                </motion.div>

                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-white">{value.title}</h3>
                  <p className="text-lg text-gray-300 font-light leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="w-2 h-px bg-gray-700" />
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>
    </div>
  )
}
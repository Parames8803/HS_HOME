"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Code, Globe, ShoppingBag, Send, ArrowRight, Menu, X, Zap, Database, Cloud, ShoppingCart, Palette, Smartphone, Monitor, Server, Shield, GitBranch, GitCommit, GitPullRequest } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"

const formSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function HomeClient() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sections = useRef<HTMLElement[]>([])
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset
      let newActiveSection = "home"

      sections.current.forEach((section) => {
        const sectionOffsetTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (pageYOffset >= sectionOffsetTop - 100 && pageYOffset < sectionOffsetTop + sectionHeight - 100) {
          newActiveSection = section.id
        }
      })

      setActiveSection(newActiveSection)
    }

    sections.current = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"))
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  return (
    <div className="bg-black text-white min-h-screen">
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
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Services
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
                  action: () => scrollToSection("products")
                },
                { 
                  name: "Services", 
                  action: () => scrollToSection("services")
                },
                { name: "About Us", action: () => window.open("/about") },
                { name: "Meet our Team", action: () => window.open("/team") },
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

      {/* Hero Section */}
      <section id="home" data-section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Connecting the Creators to the World
              </h1>
              <p className="text-xl text-gray-300">
                Transforming ideas into exceptional digital solutions through WordPress, Shopify, and custom
                development.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
                >
                  Our Services
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="rounded-full px-8 border-white hover:bg-white/10"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={120} className="text-white/10" />
                </div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Service Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Clients Worldwide</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              HYNOX proudly delivers software, digital and manufacturing solutions to clients across the globe. Our expertise and infrastructure enable us to serve businesses in <span className="font-bold text-white">India</span>, <span className="font-bold text-white">Finland</span>, and the <span className="font-bold text-white">United States</span>—and beyond.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-20 h-14 rounded shadow mb-2" />
              <span className="text-lg font-semibold text-white">India</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" alt="Finland Flag" className="w-20 h-14 rounded shadow mb-2" />
              <span className="text-lg font-semibold text-white">Finland</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" className="w-20 h-14 rounded shadow mb-2" />
              <span className="text-lg font-semibold text-white">United States</span>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No matter where your business is located, our team is ready to help you grow and succeed with world-class technology and service.
            </p>
          </div>
        </div>
      </section>
            {/* Tech Stack Section */}
            <section id="tech-stack" data-section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Tech Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and high-performance solutions.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* First Row - Well-known Technologies with Cycling Animation */}
            <div className="relative h-60 md:h-50">
              {/* Section 1: Social Media & Entertainment */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  opacity: [1, 1, 0, 0]
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.22, 0.22, 1]
                }}
              >
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {[
                    { name: "YouTube", logo: "https://img.icons8.com/color/48/youtube-play.png", color: "text-red-500" },
                    { name: "Instagram", logo: "https://img.icons8.com/color/48/instagram-new.png", color: "text-pink-500" },
                    { name: "Facebook", logo: "https://img.icons8.com/fluency/48/meta.png", color: "text-blue-600" },
                    { name: "TikTok", logo: "https://img.icons8.com/color/48/tiktok.png", color: "text-black" },
                    { name: "Hotstar", logo: "https://www.hotstar.com/favicon.ico", color: "text-blue-600" },
                    { name: "Twitter", logo: "https://img.icons8.com/color/48/twitter.png", color: "text-blue-400" },
                    { name: "Snapchat", logo: "https://www.snapchat.com/favicon.ico", color: "text-yellow-400" },
                    { name: "Pinterest", logo: "https://img.icons8.com/color/48/pinterest--v1.png", color: "text-red-500" }
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] h-20 md:h-28 rounded-xl transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className={`w-40 h-40 md:w-12 md:h-12 object-contain transition-all duration-300 ${tech.color}`}
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-300 text-center px-1 md:px-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 2: Tech Giants & Cloud */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  opacity: [0, 0, 1, 1, 0, 0]
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.22, 0.22, 0.55, 0.55, 1]
                }}
              >
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {[
                    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "text-orange-500" },
                    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "text-blue-500" },
                    { name: "Microsoft Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "text-blue-600" },
                    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "text-orange-500" },
                    { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", color: "text-green-500" },
                    { name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg", color: "text-purple-500" },
                    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "text-blue-500" }
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] h-20 md:h-28 rounded-xl transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className={`w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 ${tech.color}`}
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-300 text-center px-1 md:px-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3: Development & Tools */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  opacity: [0, 0, 0, 0, 1, 1, 0, 0]
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.55, 0.55, 0.77, 0.77, 1, 1, 1]
                }}
              >
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {[
                    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-blue-400" },
                    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "text-yellow-400" },
                    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "text-green-500" },
                    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "text-orange-600" },
                    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", color: "text-blue-500" },
                    { name: "Shopify", logo: "https://img.icons8.com/color/48/shopify.png", color: "text-green-600" },
                    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "text-purple-500" },
                    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "text-green-400" }
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] h-20 md:h-28 rounded-xl transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className={`w-8 h-8 md:w-12 md:h-12 object-contain transition-all duration-300 ${tech.color}`}
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-300 text-center px-1 md:px-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Second Row - Other Technologies with Scrolling Animation */}
            <div className="flex animate-scroll-reverse space-x-4 md:space-x-8 py-4">
              {[
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "text-black" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "text-blue-500" },
                { name: "Express.js", logo: "https://img.icons8.com/officel/80/express-js.png", color: "text-white" },
                { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "text-green-500" },
                { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "text-red-500" },
                { name: "Svelte", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg", color: "text-orange-500" },
                { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "text-purple-500" },
                { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "text-pink-600" },
                { name: "Tailwind CSS", logo: "https://img.icons8.com/color/48/tailwindcss.png", color: "text-cyan-400" },
                { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "text-purple-500" },
                { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", color: "text-blue-500" },
                { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", color: "text-purple-500" },
                { name: "Babel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg", color: "text-yellow-500" },
                { name: "ESLint", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", color: "text-purple-500" },
                { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", color: "text-red-500" },
                { name: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg", color: "text-green-500" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "text-blue-600" },
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "text-blue-500" },
                { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "text-red-500" },
                { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "text-green-500" },
                { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg", color: "text-purple-600" },
                { name: "Google Analytics", logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-google-analytics-lets-you-measure-your-advertising-roi-logo-color-tal-revivo.png", color: "text-blue-500" },
                { name: "Google Ads", logo: "https://img.icons8.com/color/48/google-ads.png", color: "text-blue-600" },
                { name: "LinkedIn Ads", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", color: "text-blue-600" },
                { name: "Razorpay", logo: "https://razorpay.com/favicon.png", color: "text-blue-600" },
                { name: "PhonePe", logo: "https://www.phonepe.com/images/phonepe-logo.png", color: "text-purple-600" },
                { name: "PayPal", logo: "https://www.paypalobjects.com/webstatic/icon/pp258.png", color: "text-blue-600" },
                { name: "Stripe", logo: "https://stripe.com/img/v3/home/twitter.png", color: "text-purple-500" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px] h-20 md:h-24 rounded-xl transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 mb-2 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`w-6 h-6 md:w-10 md:h-10 object-contain transition-all duration-300 ${tech.color}`}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-300 text-center px-1 md:px-2">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" data-section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Products</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our innovative subscription-based solutions designed to streamline your business operations and boost growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={48} />,
                title: "HYNOX ERP",
                description: "Streamline your textile or manufacturing business with our comprehensive ERP solution. Automate workflows, reduce errors, and gain full control over your operations.",
                features: [
                  "Inventory & Stock Management",
                  "Order & Production Tracking",
                  "Real-time Analytics Dashboard",
                  "Vendor & Customer Management",
                  "GST & Invoice Automation",
                  "Custom Module Integration"
                ],
              },
              {
                icon: <ShoppingBag size={48} />,
                title: "Clothing Brand Subscription",
                description: "Launch your own fashion brand effortlessly with our A-Z subscription model. From design to delivery, we handle everything while you focus on growing your brand.",
                features: [
                  "From Fabric to Fashion – Design, source & manufacture",
                  "Your Brand, Your Label – White-labeled products",
                  "Inventory + Logistics – Storage & delivery handled",
                  "Website + Tech – Your online store, powered by us",
                  "Business Ready – Launch in days, not months",
                  "Pause Anytime – Total flexibility with monthly plans"
                ],
                viewMoreLink: "/drop"
              },
              {
                icon: <ShoppingBag size={48} />,
                title: "Cosmetic Brand Subscription",
                description: "Start your beauty brand journey with our plug & play subscription model. We handle everything from product creation to delivery, making it effortless to launch your brand.",
                features: [
                  "A–Z Cosmetic Solutions – Create, brand & deliver",
                  "Your Label. Your Rules. – Private label products",
                  "Storage, Packing & Shipping – End-to-end fulfillment",
                  "Your Online Store – Fully built e-commerce website",
                  "Business-in-a-Box – No experience needed",
                  "Pause Anytime – Monthly flexibility without risk"
                ],
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all ${product.viewMoreLink ? 'cursor-pointer' : ''}`}
                onClick={product.viewMoreLink ? () => window.open(product.viewMoreLink, '_blank') : undefined}
              >
                <div className="text-white/80 mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {product.viewMoreLink && (
                  <div className="mt-6">
                    <a
                      href={product.viewMoreLink}
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                    >
                      View More <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in creating tailored digital solutions that help businesses thrive online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={48} />,
                title: "Dropshipping",
                description: "Start your online business without touching a single product. Hynox handles sourcing, storage, packing, and delivery — while you grow your brand.",
                features: [
                  "Wide Product Range – Fashion, cosmetics & more",
                  "Branded In Your Name – Private label options",
                  "E-Commerce Store Ready – We build it for you",
                  "Orders Fulfilled Automatically – You sell, we ship",
                  "Low Risk, High Flexibility – No upfront stock needed",
                  "Perfect for first-time founders & side hustlers"
                ],
              },
              {
                icon: <ShoppingBag size={48} />,
                title: "Software Development",
                description: "Custom Shopify stores built for performance and growth. We create beautiful, conversion-focused e-commerce experiences that drive sales.",
                features: [
                  "Web Application Development",
                  "API Development",
                  "Frontend Development",
                  "Backend Development",
                  "Shopify Development",
                  "WordPress Development",
                ],
              },
              {
                icon: <Code size={48} />,
                title: "Digital Marketing",
                description: "Whether you're a startup or scaling brand, we help you get noticed and sell smarter with comprehensive digital marketing solutions.",
                features: [
                  "Social Media Campaigns – Instagram, Facebook, YouTube & more",
                  "E-Commerce Sales Boosting – Product ads that convert",
                  "Google Ads & SEO – Target the right audience",
                  "Creative Content & Branding – Copy, visuals & storytelling",
                  "Analytics & Reporting – Know what works, scale what matters",
                  "From clicks to customers — we've got you covered"
                ],
                viewMoreLink: "/marketing"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all ${service.viewMoreLink ? 'cursor-pointer' : ''}`}
                onClick={service.viewMoreLink ? () => window.open(service.viewMoreLink, '_blank') : undefined}
              >
                <div className="text-white/80 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.viewMoreLink && (
                  <div className="mt-6">
                    <a
                      href={service.viewMoreLink}
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                    >
                      View More <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" data-section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Work</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Teerex", 
                category: "Custom Development",
                image: "/teerex_web.jpeg?height=400&width=600",
                link: "https://teerex.in"
              },
              { 
                title: "SugarStar", 
                category: "Shopify", 
                image: "/sugarstar_web.jpeg?height=400&width=600",
                link: "https://sugarstar.in"
              },
              { 
                title: "Mallika Garments", 
                category: "Custom Development", 
                image: "/malika-garments_web.jpg?height=400&width=600",
                link: "https://www.mallikagarments.com"
              }
            ].map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-900">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sm text-gray-400">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                    <p className="text-gray-300 text-sm">
                      Visit website →
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {[
              { 
                title: "NSK TEX", 
                category: "WordPress", 
                image: "/nsk_web.jpeg?height=400&width=600",
                link: "https://nsksiteinfo.wordpress.com/"
              },
              { 
                title: "Kyto", 
                category: "Shopify", 
                image: "/kyto_web.jpeg?height=400&width=600",
                link: "https://kyto.in"
              }
            ].map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-900">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sm text-gray-400">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                    <p className="text-gray-300 text-sm">
                      Visit website →
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="work" data-section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Clients</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are proud to work with a diverse range of clients, from startups to established businesses.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {[
                { title: "Teerex", category: "Textile", image: "/teerex_logo.jpg" },
                { title: "SugarStar", category: "Textile", image: "/sugarstar_logo.jpg" },
                { title: "Twinstar", category: "Textile", image: "/twinstar_logo.jpg" },
                { title: "Kyto", category: "Textile", image: "/kyto_logo.jpg" },
                { title: "NSK", category: "Textile", image: "/nsk_logo.jpg" },
                { title: "Mallika Garments", category: "Textile", image: "/mallika_garments_logo.jpg" },
                { title: "NP Global Exports", category: "Textile", image: "/npglobal_logo.jpg" },
                { title: "West Finland", category: "Textile", image: "/West_logo.png" }
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-3"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={client.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{client.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] hidden md:block"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="aspect-[4/3] bg-gray-900">
                  <img
                    src={"/approach.jpg"}
                    alt={"Approach_Image"}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Our Approach</h2>
              <p className="text-xl text-gray-300">
                We combine creativity, technical expertise, and strategic thinking to deliver exceptional digital
                experiences.
              </p>

              <div className="space-y-6 mt-8">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    description: "We start by understanding your business, goals, and target audience.",
                  },
                  {
                    number: "02",
                    title: "Strategy",
                    description: "We develop a tailored strategy to achieve your specific objectives.",
                  },
                  {
                    number: "03",
                    title: "Design & Development",
                    description: "Our team creates beautiful, functional solutions that stand out.",
                  },
                  {
                    number: "04",
                    title: "Launch & Support",
                    description: "We ensure a smooth launch and provide ongoing support and optimization.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-2xl font-bold text-white/30">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with this team was a game-changer for our business. Our new WordPress site has increased our conversions by 40%.",
                name: "Vinoth",
                company: "Founder of HITSHOPPERS",
              },
              {
                quote:
                  "Our Shopify store looks amazing and performs even better. Sales have doubled since the launch of our new site.",
                name: "Surya",
                company: "Urban Apparel",
              },
              {
                quote:
                  "The custom web application they built has streamlined our operations and saved us countless hours of manual work.",
                name: "Gokul",
                company: "Tech Innovations",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="text-4xl text-white/20 mb-4">"</div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* Contact Section / Footer */}
      <footer className="py-12 bg-black border-t border-gray-800" id="contact">
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
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">thehynoxofficial@gmail.com</li>
                <li className="text-gray-400">+91 8870524355</li>
                <li className="text-gray-400">Jeeva St,Pandiyan Nagar,Tirupur-641 602</li>
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
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
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

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
                { name: "Contact", action: () => window.open("tel:+918870524355") }
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
              HYNOX proudly delivers software, digital and manufacturing solutions to clients across the globe. Our expertise and infrastructure enable us to serve businesses in <span className="font-bold text-white">India</span>, <span className="font-bold text-white">Finland</span>, and the <span className="font-bold text-white">United Kingdom</span>—and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {[
                { name: "India", flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
                { name: "Finland", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
                { name: "United Kingdom", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" }
              ].map((country, index) => (
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
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{country.name}</span>
                </motion.div>
              ))}
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

          {/* Social Media and other important things */}
          <motion.div
            className="mb-12 flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { img: "https://www.svgrepo.com/show/13671/youtube.svg", name: "YouTube", link: "https://youtube.com", color: "hover:text-red-600" },
              { img: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg", name: "Instagram", link: "https://instagram.com", color: "hover:text-pink-500" },
              { img: "https://www.svgrepo.com/show/448234/linkedin.svg", name: "LinkedIn", link: "https://linkedin.com", color: "hover:text-blue-500" },
              { img: "/hotstar-svgrepo.png", name: "JioHotstar", link: "https://hotstar.com", color: "hover:text-blue-800" },
              { img: "https://www.svgrepo.com/show/448224/facebook.svg", name: "Facebook", link: "https://facebook.com", color: "hover:text-blue-600" },
              { img: "https://www.svgrepo.com/show/94698/github.svg", name: "GitHub", link: "https://github.com", color: "hover:text-white" },
              { img: "https://www.svgrepo.com/show/303341/netflix-1-logo.svg", name: "Netflix", link: "https://netflix.com", color: "hover:text-white" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center gap-2 text-gray-400 ${item.color} transition-colors`}
              >
                <Image src={item.img} alt={item.name} width={48} height={48} className="w-12 h-12" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {[
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Express.js", logo: "https://img.icons8.com/officel/80/express-js.png" },
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
                { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
                { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Shopify", logo: "https://img.icons8.com/color/48/shopify.png" },
                { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Express.js", logo: "https://img.icons8.com/officel/80/express-js.png" },
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
                { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
                { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Shopify", logo: "https://img.icons8.com/color/48/shopify.png" },
                { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
              ].map((tech, index) => (
                <div key={index} className="flex-shrink-0 w-36 flex flex-col items-center justify-center p-4 m-4 bg-white/5 rounded-xl border border-white/10">
                  <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=800&q=80",
                title: "Enterprice Resource Planning",
                description: "Streamline your business with our comprehensive ERP solution.",
              },
              {
                image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?fit=crop&w=800&q=80",
                title: "Subscription based clothing",
                description: "Launch your own fashion brand effortlessly with our A-Z subscription model.",
                viewMoreLink: "/drop?type=clothing"
              },
              {
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?fit=crop&w=800&q=80",
                title: "Subscription based cosmetics",
                description: "Start your beauty brand journey with our plug & play subscription model.",
                viewMoreLink: "/drop?type=cosmetics"
              },
              {
                image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?fit=crop&w=800&q=80",
                title: "Subscription based Agri Products",
                description: "Revolutionize your agricultural business with our subscription-based model.",
                viewMoreLink: "/drop?type=agri-products"
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="relative rounded-xl overflow-hidden h-96"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <AnimatePresence>
                    {hoveredProduct === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <p className="text-gray-300 mb-4">{product.description}</p>
                        {product.viewMoreLink && (
                          <Link href={product.viewMoreLink}>
                            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/10">
                              View More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=800&q=80",
                title: "Web Application",
                description: "We build scalable and robust web applications tailored to your business needs.",
              },
              {
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?fit=crop&w=800&q=80",
                title: "Mobile Application",
                description: "Engage your customers with beautiful and intuitive mobile applications.",
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
                title: "Custom Software",
                description: "We design and develop custom software solutions to automate your business processes.",
              },
              {
                image: "https://img.icons8.com/color/96/shopify.png",
                title: "Shopify",
                isLogo: true,
                description: "Custom Shopify stores built for performance and growth.",
              },
              {
                image: "/googleads.jpeg",
                title: "Performance Marketing",
                description: "We help you get noticed and sell smarter with digital marketing solutions.",
                viewMoreLink: "/marketing"
              },
              {
                image: "https://images.unsplash.com/photo-1542382257-80dedb725088?fit=crop&w=800&q=80",
                title: "Dropshipping Setup",
                description: "Start your online business without touching a single product.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative rounded-xl overflow-hidden h-96"
              >
                {service.isLogo ? (
                  <div className="flex items-center justify-center h-full bg-gray-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={96}
                      height={96}
                      objectFit="contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        {service.viewMoreLink && (
                          <Link href={service.viewMoreLink}>
                            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/10">
                              View More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
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
          </div> */}
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
            <h2 className="text-4xl md:text-5xl font-bold">Our Clients Worldwide</h2>
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
                { title: "West Finland", category: "Textile", image: "/West_logo.png" },
                { title: "JP Aluminium", category: "Interiors", image: "/jpnets_logo.jpg" }
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
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Web Application
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Application
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Shopify
                  </Link>
                </li>
                <li>
                  <Link href="/marketing" className="text-gray-400 hover:text-white transition-colors">
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/drop" className="text-gray-400 hover:text-white transition-colors">
                    Dropshipping Setup
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

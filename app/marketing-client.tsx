"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, BarChart3, Target, TrendingUp, Users, Zap, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const [stats, setStats] = useState({
    roas: 0,
    leads: 0,
    conversion: 0,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  useEffect(() => {
    setIsLoaded(true)

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setStats((prev) => ({
          roas: prev.roas < 350 ? prev.roas + 5 : 350,
          leads: prev.leads < 240 ? prev.leads + 4 : 240,
          conversion: prev.conversion < 85 ? prev.conversion + 1 : 85,
        }))

        if (stats.roas >= 350 && stats.leads >= 240 && stats.conversion >= 85) {
          clearInterval(interval)
        }
      }, 30)

      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [stats])

  const services = [
    {
      title: "Meta Ads",
      icon: <Users className="h-10 w-10" />,
      description: "Lead Generation, Sales, Retargeting strategies that convert your audience into customers.",
    },
    {
      title: "Google Ads",
      icon: <Target className="h-10 w-10" />,
      description: "Search, Display, YouTube, and Shopping campaigns optimized for maximum ROI.",
    },
    {
      title: "Performance Tracking",
      icon: <BarChart3 className="h-10 w-10" />,
      description: "Advanced analytics and conversion optimization to ensure every dollar counts.",
    },
    {
      title: "Scaling Strategies",
      icon: <TrendingUp className="h-10 w-10" />,
      description: "Data-driven approaches to scale winning campaigns for massive returns.",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "We analyze your business & craft high-converting ads",
      description:
        "Our team dives deep into your business, audience, and competitors to create ads that resonate and convert.",
    },
    {
      number: "02",
      title: "We A/B test and optimize in real-time",
      description: "Continuous testing and optimization ensure your campaigns perform at their peak efficiency.",
    },
    {
      number: "03",
      title: "We scale winning campaigns for massive ROI",
      description:
        "Once we identify winning strategies, we scale them strategically to maximize your return on investment.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "/avatar.jpg?height=80&width=80",
      quote: "The team delivered a 350% ROAS on our campaigns. They're truly performance-focused and data-driven.",
    },
    {
      name: "Michael Chen",
      company: "Retail Solutions",
      quote: "Our lead generation increased by 240% within just 3 months of working with this amazing team.",
      image: "/avatar.jpg?height=80&width=80",
    },
    {
      name: "Emma Williams",
      company: "SaaS Platform",
      quote: "They transformed our Google Ads strategy, resulting in an 85% increase in conversion rate.",
      image: "/avatar.jpg?height=80&width=80",
    },
  ]

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "919500656339"; // Use full international format without '+'
    const message = values.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
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
              <button
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Link href="/team">Meet our Team</Link>
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
                { name: "Home", action: () => window.open("/") },
                { 
                  name: "Products", 
                  action: () => window.open("/#products")
                },
                { 
                  name: "Services", 
                  action: () => window.open("/#services")
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Data-Driven Performance Marketing That Converts.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                We scale brands with powerful Meta & Google Ads, optimized for maximum ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-md group"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-md group"
                onClick={() => scrollToSection("scale-brands")}
              >
                Explore Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>

      {/* Interactive Ad Previews */}
      <section className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Ads That Drive Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We create high-converting campaigns across Meta and Google platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <div className="flex items-center mb-6 justify-center h-12">
                  <Image
                    src="/meta.png"
                    alt="Meta Logo"
                    width={120}
                    height={40}
                    className="object-contain h-full"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 aspect-[4/3] relative group">
                  <Image
                    src="/meta_ads.jpeg"
                    alt="Meta Ad Preview"
                    fill
                    className="rounded-md object-cover transition-all duration-300 group-hover:opacity-50"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                <div className="flex items-center mb-6 justify-center h-12">
                  <Image
                    src="/google.png"
                    alt="Google Logo"
                    width={120}
                    height={40}
                    className="object-contain h-full"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 aspect-[4/3] relative group">
                  <Image
                    src="/googleads.jpeg"
                    alt="Google Ad Preview"
                    fill
                    className="rounded-md object-cover transition-all duration-300 group-hover:opacity-50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Scale Brands */}
      <section id="scale-brands" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Scale Brands</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our proven methodology delivers consistent results.</p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-7xl font-bold text-gray-800">{step.number}</div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                  <p className="text-gray-400 max-w-2xl">{step.description}</p>

                  {index === 1 && (
                    <div className="mt-6 bg-gray-900 p-4 rounded-lg">
                      <div className="h-32 relative">
                        <div className="absolute inset-0 flex items-end">
                          {[...Array(12)].map((_, i) => {
                            const height = 20 + Math.sin(i * 0.8) * 10 + (i * 2.5);
                            return (
                              <div
                                key={i}
                                className="w-1/12 bg-gradient-to-t from-blue-500 to-purple-500 mx-0.5 rounded-t-sm"
                                style={{
                                  height: `${height}%`,
                                  opacity: i > 8 ? 0.9 : 0.7,
                                }}
                              ></div>
                            );
                          })}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 border-dashed"></div>
                        <div className="absolute top-0 right-4 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                          +127%
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Campaign Start</span>
                        <span>After Optimization</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="mt-6 flex items-center">
                      <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
                        10x ROI
                      </div>
                      <div className="ml-4 text-gray-400">
                        Average return our clients see when we scale winning campaigns
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed for performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-white z-10 origin-bottom rotate-y-180 transition-all duration-500 ease-in-out group-hover:rotate-y-0 opacity-0 group-hover:opacity-100"></div>

                  <Card className="h-full bg-gray-900 border-gray-800 group-hover:border-white transition-colors duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-white group-hover:text-black transition-colors duration-500 z-20">
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400 group-hover:text-gray-700">{service.description}</p>
                      </div>

                      <div className="mt-auto pt-4 flex justify-between items-center z-20">
                        <span className="text-sm text-gray-500 group-hover:text-gray-700">Learn more</span>
                        <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-black group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real results from our clients.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={testimonials[0].image || "/placeholder.svg"}
                    alt={testimonials[0].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[0].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[0].company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[0].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {stats.roas}%
                </div>
                <div className="ml-2 text-sm text-gray-400">increase in ROAS</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonials[1].image || "/placeholder.svg"}
                    alt={testimonials[1].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[1].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[1].company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[1].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  {stats.leads}%
                </div>
                <div className="ml-2 text-sm text-gray-400">more leads generated</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonials[2].image || "/placeholder.svg"}
                    alt={testimonials[2].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[2].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[2].company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[2].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                  {stats.conversion}%
                </div>
                <div className="ml-2 text-sm text-gray-400">conversion rate increase</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Let's Scale Your Brand Today
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Book a free strategy call and discover how our data-driven approach can transform your marketing
                results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            {...field}
                            className="bg-gray-800 border-gray-700 focus:border-white transition-colors min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg py-6 rounded-md group"
                  >
                    Chat with us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  )
}
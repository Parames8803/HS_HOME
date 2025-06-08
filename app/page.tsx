"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Code, Globe, ShoppingBag, Send, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"

const formSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sections = useRef<HTMLElement[]>([])
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "919500656339"; // Use full international format without '+'
    const message = values.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

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
            {["Products", "Services", "Company", "Blogs", "Startup Support"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${
                  activeSection === item ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
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
              {["Products", "Services", "Company", "Blogs", "Startup Support"].map((item) => (
                <button
                  key={item}
                  className={`capitalize py-2 ${
                    activeSection === item
                      ? "text-white border-l-2 pl-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
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
                title: "WordPress Development",
                description:
                  "Custom WordPress websites with powerful functionality, optimized for performance and SEO.",
                features: ["Custom Themes", "Plugin Development", "E-commerce", "Maintenance"],
              },
              {
                icon: <ShoppingBag size={48} />,
                title: "Shopify Solutions",
                description:
                  "Beautiful and conversion-focused Shopify stores that drive sales and enhance customer experience.",
                features: ["Store Setup", "Theme Customization", "App Integration", "Optimization"],
              },
              {
                icon: <Code size={48} />,
                title: "Custom Development",
                description: "Bespoke web applications and software solutions built with cutting-edge technologies.",
                features: ["Web Applications", "API Development", "Frontend Development", "Backend Systems"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all"
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
              { title: "E-commerce Platform", category: "Shopify", image: "/eccomerce.jpg?height=400&width=600" },
              { title: "Corporate Website", category: "WordPress", image: "/corporate.png?height=400&width=600" },
              {
                title: "Web Application",
                category: "Custom Development",
                image: "/webapplication.jpg?height=400&width=600",
              },
              { title: "Online Store", category: "Shopify", image: "/onlinestore.jpg?height=400&width=600" },
              { title: "Blog Platform", category: "WordPress", image: "/blogwebsite.jpg?height=400&width=600" },
              {
                title: "Dashboard Interface",
                category: "Custom Development",
                image: "/dashboard.png?height=400&width=600",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl"
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
                      A stunning project showcasing our expertise in {project.category.toLowerCase()}.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 border-white hover:bg-white/10">
              View All Projects
            </Button>
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
      <section className="py-20 bg-black">
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
      </section>

      {/* Contact Section / Footer */}
      <section id="contact" data-section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
              <p className="text-xl text-gray-300">
              Delivers cutting-edge IT solutions and efficient manufacturing services. <br />
              We connect technology and industry to drive innovation and growth.
              </p>

              <div className="space-y-4 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-400">123 Digital Avenue, Tirupur, 10001</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-400">hitshoppers@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-400">+91 9500656339</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

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
                            className="bg-white/5 border-white/10 focus-visible:ring-white/30 min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                    Chat with us
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© {new Date().getFullYear()} HYNOX. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


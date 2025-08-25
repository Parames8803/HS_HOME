"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Package, Truck, Palette, Search, ShoppingCart } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const searchParams = useSearchParams()
  const productType = searchParams.get("type") || "clothing"

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  const getHeroTitle = () => {
    switch (productType) {
      case "clothing":
        return "Complete Clothing Brand";
      case "cosmetics":
        return "Complete Cosmetics Brand";
      case "agri-products":
        return "Complete Agri Products";
      default:
        return "Complete Brand";
    }
  }

  const getHeroSubtitle = () => {
    switch (productType) {
      case "clothing":
        return "Support";
      case "cosmetics":
        return "Support";
      case "agri-products":
        return "Business";
      default:
        return "Support";
    }
  }

  const getHeroDescription = () => {
    switch (productType) {
      case "clothing":
        return "End-to-end solutions from brand strategy to customer delivery for your clothing line.";
      case "cosmetics":
        return "End-to-end solutions from brand strategy to customer delivery for your cosmetics line.";
      case "agri-products":
        return "End-to-end solutions from brand strategy to customer delivery for your agri products business.";
      default:
        return "End-to-end solutions from brand strategy to customer delivery.";
    }
  }

  const getServices = () => {
    switch (productType) {
      case "clothing":
        return [
          {
            icon: <Search className="h-8 w-8 mb-4" />,
            title: "Brand Strategy & Consultation",
            description: "Define your clothing brand identity, target audience, and market positioning to create a cohesive strategy.",
          },
          {
            icon: <Palette className="h-8 w-8 mb-4" />,
            title: "Website Development & Management",
            description: "Custom e-commerce website design, development, and ongoing management tailored to your brand.",
          },
          {
            icon: <Package className="h-8 w-8 mb-4" />,
            title: "Product Sourcing & Manufacturing",
            description: "Connect with vetted manufacturers and suppliers to create high-quality clothing products.",
          },
          {
            icon: <Truck className="h-8 w-8 mb-4" />,
            title: "Print on Demand Services",
            description: "Custom designs printed on clothing items only when ordered, eliminating inventory costs.",
          },
          {
            icon: <ShoppingCart className="h-8 w-8 mb-4" />,
            title: "Order Fulfillment & Logistics",
            description: "End-to-end order processing, from receipt to delivery, ensuring timely and accurate shipments.",
          },
        ];
      case "cosmetics":
        return [
          {
            icon: <Search className="h-8 w-8 mb-4" />,
            title: "Brand Strategy & Consultation",
            description: "Define your cosmetics brand identity, target audience, and market positioning strategy.",
          },
          {
            icon: <Palette className="h-8 w-8 mb-4" />,
            title: "Website Development & Management",
            description: "Custom e-commerce website design and development tailored to your cosmetics brand.",
          },
          {
            icon: <Package className="h-8 w-8 mb-4" />,
            title: "Product Sourcing & Manufacturing",
            description: "Connect with vetted manufacturers to create high-quality cosmetic products.",
          },
          {
            icon: <Truck className="h-8 w-8 mb-4" />,
            title: "Packaging & Design",
            description: "Creative and compliant packaging solutions that make your cosmetic products stand out.",
          },
          {
            icon: <ShoppingCart className="h-8 w-8 mb-4" />,
            title: "Order Fulfillment & Logistics",
            description: "End-to-end order processing ensuring timely and accurate shipments to customers.",
          },
        ];
      case "agri-products":
        return [
          {
            icon: <Search className="h-8 w-8 mb-4" />,
            title: "Market Analysis & Strategy",
            description: "Analyze the agricultural market to define your product positioning and growth strategy.",
          },
          {
            icon: <Palette className="h-8 w-8 mb-4" />,
            title: "E-commerce Platform Development",
            description: "Custom e-commerce website design and development tailored for agri-products.",
          },
          {
            icon: <Package className="h-8 w-8 mb-4" />,
            title: "Supply Chain Optimization",
            description: "Streamline your supply chain from farm to customer, ensuring freshness and efficiency.",
          },
          {
            icon: <Truck className="h-8 w-8 mb-4" />,
            title: "Logistics & Distribution",
            description: "Efficient logistics solutions for timely delivery of perishable and non-perishable products.",
          },
          {
            icon: <ShoppingCart className="h-8 w-8 mb-4" />,
            title: "Customer Relationship Management",
            description: "Implement CRM systems to manage customer interactions and enhance loyalty.",
          },
        ];
      default:
        return [];
    }
  }

  const services = getServices();

  return (
    <div className="bg-black text-white relative" ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-shopping-app-45398-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {getHeroTitle()}
              <span className="block text-gray-400 italic">{getHeroSubtitle()}</span>
            </motion.h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {getHeroDescription()}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light">
                  <Link href="/pricing" className="flex items-center">
                    Explore Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light bg-transparent"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our {productType === "clothing" ? "Clothing" : productType === "cosmetics" ? "Cosmetics" : productType === "agri-products" ? "Agri Products" : "Brand"} 
              <span className="block text-gray-400 italic">Services</span>
            </motion.h2>
            
            <motion.div
              className="w-12 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.p
              className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Everything you need to launch and grow a successful {productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : productType === "agri-products" ? "agri products" : "brand"} business
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              How Our Process
              <span className="block text-gray-400 italic">Works</span>
            </motion.h2>
            
            <motion.div
              className="w-12 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.p
              className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A seamless journey from concept to customer delivery
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: productType === "agri-products" ? "Market Analysis" : "Brand Strategy",
                description:
                  productType === "agri-products"
                    ? "We analyze the agricultural market to define your product positioning and growth strategy."
                    : `Define your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"} identity, target audience, and develop a cohesive market strategy.`,
              },
              {
                number: "02",
                title: productType === "agri-products" ? "Platform Development" : "Website & Production",
                description:
                  productType === "agri-products"
                    ? "Build your e-commerce platform tailored for agri-products, ensuring seamless online sales."
                    : `Build your e-commerce platform and set up manufacturing partnerships for your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"} line.`,
              },
              {
                number: "03",
                title: productType === "agri-products" ? "Logistics & Growth" : "Fulfillment & Growth",
                description:
                  productType === "agri-products"
                    ? "Efficient logistics and distribution solutions for timely delivery of your products."
                    : `Orders are processed, packed, and shipped to customers while we help scale your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"}.`,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className="bg-gray-900/20 border border-gray-800 p-8 h-full group-hover:border-gray-600 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="text-4xl font-light text-gray-600 mb-6">{step.number}</div>
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h2
                className="text-3xl md:text-5xl font-light text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Ready to Launch Your
                <span className="block text-gray-400 italic">
                  {productType === "clothing" ? "Clothing Brand" : productType === "cosmetics" ? "Cosmetics Brand" : productType === "agri-products" ? "Agri Business" : "Brand"}?
                </span>
              </motion.h2>
              
              <motion.div
                className="w-12 h-px bg-gray-600 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <motion.p
                className="text-lg text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Choose a package that fits your {productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : productType === "agri-products" ? "agri products" : "business"} needs and start growing today
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light">
                    <Link href="/pricing" className="flex items-center">
                      View Pricing Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
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
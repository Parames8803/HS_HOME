"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Package, Truck, Palette, Search, ShoppingCart } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect, useState } from "react" // Keep these for video and scroll effects

import { Button } from "@/components/ui/button"
import Link from "next/link" // Keep Link for Button asChild

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const searchParams = useSearchParams()
  const productType = searchParams.get("type") || "clothing" // Default to 'clothing'

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
        return "Complete Clothing Brand Support";
      case "cosmetics":
        return "Complete Cosmetics Brand Support";
      case "agri-products":
        return "Complete Agri Products Brand Support";
      default:
        return "Complete Brand Support";
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
            icon: <Search className="h-10 w-10 mb-4" />,
            title: "Brand Strategy & Consultation",
            description: "We help define your clothing brand identity, target audience, and market positioning to create a cohesive strategy.",
          },
          {
            icon: <Palette className="h-10 w-10 mb-4" />,
            title: "Website Development & Management",
            description: "Custom e-commerce website design, development, and ongoing management tailored to your clothing brand's unique needs.",
          },
          {
            icon: <Package className="h-10 w-10 mb-4" />,
            title: "Product Sourcing & Manufacturing",
            description: "Connect with vetted manufacturers and suppliers to create high-quality clothing products that match your brand vision.",
          },
          {
            icon: <Truck className="h-10 w-10 mb-4" />,
            title: "Print on Demand Services",
            description: "Custom designs printed on clothing items only when ordered, eliminating inventory costs while maintaining quality.",
          },
          {
            icon: <ShoppingCart className="h-10 w-10 mb-4" />,
            title: "Order Fulfillment & Logistics",
            description: "End-to-end order processing, from receipt to delivery, ensuring timely and accurate shipments to your customers.",
          },
        ];
      case "cosmetics":
        return [
          {
            icon: <Search className="h-10 w-10 mb-4" />,
            title: "Brand Strategy & Consultation",
            description: "We help define your cosmetics brand identity, target audience, and market positioning to create a cohesive strategy.",
          },
          {
            icon: <Palette className="h-10 w-10 mb-4" />,
            title: "Website Development & Management",
            description: "Custom e-commerce website design, development, and ongoing management tailored to your cosmetics brand's unique needs.",
          },
          {
            icon: <Package className="h-10 w-10 mb-4" />,
            title: "Product Sourcing & Manufacturing",
            description: "Connect with vetted manufacturers and suppliers to create high-quality cosmetic products that match your brand vision.",
          },
          {
            icon: <Truck className="h-10 w-10 mb-4" />,
            title: "Packaging & Design",
            description: "Creative and compliant packaging solutions that make your cosmetic products stand out.",
          },
          {
            icon: <ShoppingCart className="h-10 w-10 mb-4" />,
            title: "Order Fulfillment & Logistics",
            description: "End-to-end order processing, from receipt to delivery, ensuring timely and accurate shipments to your customers.",
          },
        ];
      case "agri-products":
        return [
          {
            icon: <Search className="h-10 w-10 mb-4" />,
            title: "Market Analysis & Strategy",
            description: "We analyze the agricultural market to define your product positioning and growth strategy.",
          },
          {
            icon: <Palette className="h-10 w-10 mb-4" />,
            title: "E-commerce Platform Development",
            description: "Custom e-commerce website design and development tailored for agri-products, ensuring seamless online sales.",
          },
          {
            icon: <Package className="h-10 w-10 mb-4" />,
            title: "Supply Chain Optimization",
            description: "Streamline your supply chain from farm to customer, ensuring freshness and efficiency.",
          },
          {
            icon: <Truck className="h-10 w-10 mb-4" />,
            title: "Logistics & Distribution",
            description: "Efficient logistics and distribution solutions for timely delivery of perishable and non-perishable agri-products.",
          },
          {
            icon: <ShoppingCart className="h-10 w-10 mb-4" />,
            title: "Customer Relationship Management",
            description: "Implement CRM systems to manage customer interactions and enhance loyalty in the agri-business.",
          },
        ];
      default:
        return [];
    }
  }

  const services = getServices();

  return (
    <div className="bg-black text-white" ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-shopping-app-45398-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{getHeroTitle()}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {getHeroDescription()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowRight className="h-8 w-8 rotate-90" />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our {productType === "clothing" ? "Clothing" : productType === "cosmetics" ? "Cosmetics" : productType === "agri-products" ? "Agri Products" : "Brand"} Services A-Z</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Everything you need to launch and grow a successful {productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : productType === "agri-products" ? "agri products" : "brand"} without the hassle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Our Process Works</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              A seamless journey from product selection to customer delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white bg-opacity-20 -z-10"></div>

            {[
              {
                number: "01",
                title: productType === "agri-products" ? "Market Analysis" : "Brand Strategy",
                description:
                  productType === "agri-products"
                    ? "We analyze the agricultural market to define your product positioning and growth strategy."
                    : `We help define your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"} identity, target audience, and develop a cohesive market strategy.`,
              },
              {
                number: "02",
                title: productType === "agri-products" ? "Platform Development" : "Website & Production",
                description:
                  productType === "agri-products"
                    ? "We build your e-commerce platform tailored for agri-products, ensuring seamless online sales."
                    : `We build your e-commerce platform and set up manufacturing partnerships for your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"} line.`,
              },
              {
                number: "03",
                title: productType === "agri-products" ? "Logistics & Growth" : "Fulfillment & Growth",
                description:
                  productType === "agri-products"
                    ? "Efficient logistics and distribution solutions for timely delivery of perishable and non-perishable agri-products."
                    : `Orders are processed, packed, and shipped to customers while we help scale your ${productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : "brand"}.`,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10 h-full">
                  <div className="text-5xl font-bold text-white text-opacity-20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your {productType === "clothing" ? "Clothing" : productType === "cosmetics" ? "Cosmetics" : productType === "agri-products" ? "Agri Products" : "Brand"}?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Choose a package that fits your {productType === "clothing" ? "clothing" : productType === "cosmetics" ? "cosmetics" : productType === "agri-products" ? "agri products" : "business"} needs and start growing today
              </p>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
                <Link href="/pricing">
                  View Pricing Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

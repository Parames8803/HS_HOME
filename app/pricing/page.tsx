"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion" // Keep motion for animations
import { ArrowRight, Check, CheckCircle, HelpCircle } from "lucide-react" // Keep used icons

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"

export default function PricingPage() {
  const [isInternationalPricing, setIsInternationalPricing] = useState(false)

  // Helper function to generate WhatsApp link
  function getWhatsAppLink(pkg: { name: string }, type: "development" | "management" | "marketing") {
    // Find the index of the selected package
    const index = ["Starter", "Growth", "Pro", "Premium"].indexOf(pkg.name);
    // Get the corresponding packages
    const dev = developmentPackages[index];
    const mgmt = managementPackages[index];
    const mktg = marketingPackages[index];
    // Use deterministic price formatting for the development package
    const currencySymbol = isInternationalPricing ? "$" : "₹";
    const formattedPrice = `${currencySymbol}${dev.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/month`;
    // Build the WhatsApp message
    const message = `Hello, I'm interested in your ${pkg.name} Plan.\n\n--- Development ---\n${dev.features.map(f => `• ${f}`).join("\n")}\n\n--- Manufacturing ---\n${mgmt.features.map(f => `• ${f}`).join("\n")}\n\n--- Marketing ---\n${mktg.features.map(f => `• ${f}`).join("\n")}\n\nTotal Price: ${formattedPrice}\n\nCan you please provide me with more information?`;
    return `https://wa.me/918870524355?text=${encodeURIComponent(message)}`;
  }

  // Each plan (Starter, Growth, Pro, Premium) consists of Development, Manufacturing, and Marketing features bundled together.
  const developmentPackages = [
    {
      name: "Starter",
      description: "Essential Store store for new businesses",
      price: isInternationalPricing ? 500 : 20000, // Updated price logic
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "SEO Setup",
        "Keyword Research & Optimization",
        "Domain under ₹600 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches"
      ],
      limitations: [
        "No store migration",
        "Basic SEO only",
        "Limited support hours"
      ],
      cta: "Start Starter Plan",
      popular: false,
    },
    {
      name: "Growth",
      description: "Complete Store solution for growing businesses",
      price: isInternationalPricing ? 1200 : 45000, // Updated price logic
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "SEO Setup",
        "Keyword Research & Optimization",
        "Domain under ₹600 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches"
      ],
      limitations: [
        "Standard SEO only",
        "No dedicated account manager"
      ],
      cta: "Choose Growth Plan",
      popular: true,
    },
    {
      name: "Pro",
      description: "Advanced Store solution with premium features",
      price: isInternationalPricing ? 2000 : 75000, // Updated price logic
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "SEO Setup",
        "Keyword Research & Optimization",
        "12/5 Tech Support",
        "Instant Bug Resolution",
        "Server Downtime Handling",
        "Website Monitoring & Troubleshooting",
        "Domain under ₹1500 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches",
        "Email Support",
        "Business Email Setup (5 Users)",
        "Email Campaign Management",
        "Transactional Email Setup"
      ],
      limitations: [
        "No Shopify Plus features",
        "Limited development hours"
      ],
      cta: "Get Pro Plan",
      popular: false,
    },
    {
      name: "Premium",
      description: "Enterprise-grade Store solution with all features",
      price: isInternationalPricing ? 3000 : 100000, // Updated price logic
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "Shopify Plus Solutions",
        "Advanced SEO Setup",
        "On-Page SEO (Meta Tags, Alt Text, URL Optimization)",
        "Off-Page SEO (Backlinking, Guest Posting)",
        "Technical SEO (Site Speed, Mobile Optimization)",
        "Keyword Research & Optimization",
        "Competitor Analysis",
        "Domain under ₹3000 (FREE)",
        "Payment Integration (Razorpay, Stripe, PayPal, etc.)",
        "UPI & Wallets Setup (Google Pay, PhonePe, Paytm)",
        "Multi-Currency Payment Setup",
        "Subscription-Based Payment Integration",
        "Payment Security & Fraud Prevention",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches",
        "Server & Hosting Management",
        "Performance Optimization",
        "Backup & Data Protection",
        "New Feature Updates (if required)",
        "Dedicated Account Manager",
        "Priority Support"
      ],
      limitations: [
        "Custom development may require additional time"
      ],
      cta: "Go Premium Plan",
      popular: false,
    }
  ]

  // Remove price from managementPackages
  const managementPackages = [
    {
      name: "Starter",
      description: "Essential website maintenance",
      features: [
        "Monthly security updates",
        "Basic backups",
        "Uptime monitoring",
        "Email support",
        "Quarterly reports"
      ],
      limitations: [
        "No content updates",
        "48h response time",
        "2h support/month"
      ],
      cta: "Start Starter Care",
      popular: false,
    },
    {
      name: "Growth",
      description: "Proactive website maintenance",
      features: [
        "Weekly security updates",
        "Daily backups",
        "Performance monitoring",
        "Up to 5 content updates/month",
        "24h response time",
        "5h support/month",
        "Monthly reports"
      ],
      limitations: [
        "No development work"
      ],
      cta: "Choose Growth Care",
      popular: true,
    },
    {
      name: "Pro",
      description: "Comprehensive website care",
      features: [
        "Daily security updates",
        "Real-time backups",
        "Advanced monitoring",
        "Up to 15 content updates/month",
        "12h response time",
        "Weekly reports",
        "5h development/month"
      ],
      limitations: [
        "Complex changes may require upgrade"
      ],
      cta: "Get Pro Care",
      popular: false,
    },
    {
      name: "Premium",
      description: "Full-service website management",
      features: [
        "24/7 monitoring",
        "Instant backups",
        "Unlimited content updates",
        "Immediate response",
        "Daily reports",
        "10h development/month",
        "Dedicated account manager",
        "SEO maintenance"
      ],
      limitations: [
        "Major redesigns not included"
      ],
      cta: "Go Premium Care",
      popular: false,
    }
  ]

  // Remove price from marketingPackages
  const marketingPackages = [
    {
      name: "Starter",
      description: "Basic marketing support for new businesses",
      features: [
        "Meta Ads",
        "Meta Pixel Setup",
        "Unlimited AD Campaign",
        "Performance Monitoring",
        "Performance Report",
        "Budget Allocation"
      ],
      cta: "Start Starter Marketing",
      popular: false,
    },
    {
      name: "Growth",
      description: "Enhanced marketing support for growing brands",
      features: [
        "Meta Ads",
        "Google Ads (Starter)",
        "Meta Pixel Setup",
        "Google Ads Pixel Setup",
        "Unlimited AD Campaign",
        "Performance Monitoring",
        "Performance Report",
        "Budget Allocation"
      ],
      cta: "Choose Growth Marketing",
      popular: true,
    },
    {
      name: "Pro",
      description: "Advanced marketing support with premium features",
      features: [
        "Meta Ads",
        "Google Ads (Starter)",
        "Meta Pixel Setup",
        "Google Ads Pixel Setup",
        "Unlimited AD Campaign",
        "Performance Monitoring",
        "Performance Report",
        "Budget Allocation",
        "TikTok Ads",
        "Youtube Ads",
        "JioCinema Ads",
        "Hotstar Ads etc."
      ],
      cta: "Get Pro Marketing",
      popular: false,
    },
    {
      name: "Premium",
      description: "Comprehensive marketing support for enterprises",
      features: [
        "Meta Ads",
        "Google Ads (Starter)",
        "Meta Pixel Setup",
        "Google Ads Pixel Setup",
        "Unlimited AD Campaign",
        "Performance Monitoring",
        "Performance Report",
        "Budget Allocation",
        "TikTok Ads",
        "Youtube Ads",
        "JioCinema Ads",
        "Hotstar Ads etc."
      ],
      cta: "Go Premium Marketing",
      popular: false,
    }
  ]

  return (
    <>
  {/* Pricing Section */}
  <section className="py-32 bg-black">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-light mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Store Development
          <span className="block text-gray-400 italic">Packages</span>
        </motion.h1>
        
        <motion.div
          className="w-16 h-px bg-white mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Comprehensive solutions tailored for businesses of all sizes
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className={isInternationalPricing ? "text-gray-500 font-light" : "text-white font-normal"}>India</span>
          <Switch
            checked={isInternationalPricing}
            onCheckedChange={setIsInternationalPricing}
            className="data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <span className={!isInternationalPricing ? "text-gray-500 font-light" : "text-white font-normal"}>
            International
          </span>
        </motion.div>
      </motion.div>

      {/* Development Packages */}
      <div className="mb-32">
        <motion.h2 
          className="text-3xl md:text-4xl font-light mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Development Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {developmentPackages.map((pkg, index) => (
            <motion.div
              key={`dev-${index}`}
              className={`bg-gray-900/20 border ${pkg.popular ? "border-white" : "border-gray-800"} relative group hover:border-gray-600 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-light px-4 py-1">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">{pkg.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-light text-white">
                    {isInternationalPricing ? "$" : "₹"}
                    {pkg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span className="text-gray-500 ml-2 font-light">/month</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : "border border-gray-700 bg-transparent text-white hover:bg-gray-900"} font-light rounded-none`}
                    asChild
                  >
                    <Link
                      href={getWhatsAppLink(pkg, "development")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="p-8 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <h4 className="font-light mb-4 text-gray-400 text-sm uppercase tracking-wider">Features</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.limitations.length > 0 && (
                  <>
                    <h4 className="font-light mb-4 mt-8 text-gray-500 text-sm uppercase tracking-wider">Limitations</h4>
                    <ul className="space-y-3">
                      {pkg.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-gray-500">
                          <span className="mr-3 mt-1">•</span>
                          <span className="text-sm font-light leading-relaxed">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Management Packages */}
      <div className="mb-32">
        <motion.h2 
          className="text-3xl md:text-4xl font-light mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Manufacturing Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {managementPackages.map((pkg, index) => (
            <motion.div
              key={`mgmt-${index}`}
              className={`bg-gray-900/20 border ${pkg.popular ? "border-white" : "border-gray-800"} relative group hover:border-gray-600 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-light px-4 py-1">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">{pkg.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : "border border-gray-700 bg-transparent text-white hover:bg-gray-900"} font-light rounded-none`}
                    asChild
                  >
                    <Link
                      href={getWhatsAppLink(pkg, "management")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="p-8 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <h4 className="font-light mb-4 text-gray-400 text-sm uppercase tracking-wider">Features</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.limitations.length > 0 && (
                  <>
                    <h4 className="font-light mb-4 mt-8 text-gray-500 text-sm uppercase tracking-wider">Limitations</h4>
                    <ul className="space-y-3">
                      {pkg.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-gray-500">
                          <span className="mr-3 mt-1">•</span>
                          <span className="text-sm font-light leading-relaxed">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marketing Support Packages */}
      <div>
        <motion.h2 
          className="text-3xl md:text-4xl font-light mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Marketing Support
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {marketingPackages.map((pkg, index) => (
            <motion.div
              key={`mktg-${index}`}
              className={`bg-gray-900/20 border ${pkg.popular ? "border-white" : "border-gray-800"} relative group hover:border-gray-600 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-light px-4 py-1">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">{pkg.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : "border border-gray-700 bg-transparent text-white hover:bg-gray-900"} font-light rounded-none`}
                    asChild
                  >
                    <Link
                      href={getWhatsAppLink(pkg, "management")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <div className="p-8 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <h4 className="font-light mb-4 text-gray-400 text-sm uppercase tracking-wider">Features</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Feature Comparison */}
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
          Package
          <span className="block text-gray-400 italic">Comparison</span>
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
          Detailed breakdown of all development tiers
        </motion.p>
      </motion.div>

      {/* Development Comparison */}
      <div className="mb-20">
        <h3 className="text-2xl font-light mb-12 text-center text-white">Development Services</h3>
        <div className="overflow-x-auto">
          <div className="bg-gray-900/20 border border-gray-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-6 px-6 font-light text-gray-400 text-sm uppercase tracking-wider">Features</th>
                  {developmentPackages.map((pkg) => (
                    <th key={pkg.name} className="text-center py-6 px-6 font-light text-white">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Store Theme",
                    values: ["Custom", "Custom", "Custom", "Custom"]
                  },
                  {
                    feature: "Store Migration", 
                    values: ["No", "Yes", "Yes", "Yes"]
                  },
                  {
                    feature: "SEO Setup",
                    values: ["Basic", "Standard", "Standard", "Advanced"]
                  },
                  {
                    feature: "Payment Gateways",
                    values: ["Basic", "Basic", "Standard", "Premium"]
                  },
                  {
                    feature: "Tech Support",
                    values: ["Email", "Email", "12/5", "24/7"]
                  },
                  {
                    feature: "Domain Included",
                    values: ["₹600", "₹600", "₹1500", "₹3000"]
                  },
                  {
                    feature: "Order Management",
                    values: ["Basic", "Standard", "Advanced", "Premium"]
                  },
                  {
                    feature: "Email Setup",
                    values: ["No", "No", "5 Users", "Custom"]
                  }
                ].map((row, index) => (
                  <tr key={`dev-comp-${index}`} className="border-b border-gray-800/50">
                    <td className="py-4 px-6 font-light text-gray-300">
                      <div className="flex items-center">
                        {row.feature}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-600" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center py-4 px-6 font-light">
                        {value === "No" ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-gray-400">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Management Comparison */}
      <div>
        <h3 className="text-2xl font-light mb-12 text-center text-white">Management Services</h3>
        <div className="overflow-x-auto">
          <div className="bg-gray-900/20 border border-gray-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-6 px-6 font-light text-gray-400 text-sm uppercase tracking-wider">Features</th>
                  {managementPackages.map((pkg) => (
                    <th key={pkg.name} className="text-center py-6 px-6 font-light text-white">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Response Time",
                    values: ["48h", "24h", "12h", "Immediate"]
                  },
                  {
                    feature: "Content Updates",
                    values: ["None", "Up to 5", "Up to 15", "Unlimited"]
                  },
                  {
                    feature: "Security Updates",
                    values: ["Monthly", "Weekly", "Daily", "Continuous"]
                  },
                  {
                    feature: "Included Support",
                    values: ["2h/month", "5h/month", "5h/month", "10h/month"]
                  },
                  {
                    feature: "Development Hours",
                    values: ["None", "None", "5h/month", "10h/month"]
                  },
                  {
                    feature: "Reporting",
                    values: ["Quarterly", "Monthly", "Weekly", "Daily"]
                  }
                ].map((row, index) => (
                  <tr key={`mgmt-comp-${index}`} className="border-b border-gray-800/50">
                    <td className="py-4 px-6 font-light text-gray-300">
                      <div className="flex items-center">
                        {row.feature}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-600" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center py-4 px-6 font-light">
                        {value === "None" ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-gray-400">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
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
          Frequently Asked
          <span className="block text-gray-400 italic">Questions</span>
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
          Everything you need to know about our services
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            question: "What's included in the development cost?",
            answer: "All our development packages include complete store setup, theme customization, essential apps, and basic training. Higher tiers include more advanced features and longer support periods."
          },
          {
            question: "Do you provide hosting?",
            answer: "Store includes hosting in their plans. We'll help you choose and set up the right Store plan for your needs."
          },
          {
            question: "How long does development take?",
            answer: "Typical timelines range from 2 weeks for STARTUP plans to 6-8 weeks for PREMIUM plans, depending on complexity and content readiness."
          },
          {
            question: "Can I migrate from another platform?",
            answer: "Yes! Our BASIC plan and above include migration from platforms like WooCommerce, Magento, or other eCommerce systems."
          },
          {
            question: "What about ongoing maintenance?",
            answer: "All plans include at least 1 month of maintenance. We offer separate maintenance packages for long-term support."
          },
          {
            question: "Do you offer custom solutions?",
            answer: "Absolutely! Contact us to discuss custom Store solutions tailored to your specific business needs."
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/20 border border-gray-800 p-8 group hover:border-gray-600 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <h3 className="text-xl font-light mb-4 text-white group-hover:text-gray-200 transition-colors duration-300">
              {faq.question}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {faq.answer}
            </p>
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
            <span className="block text-gray-400 italic">Store?</span>
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
            Choose the perfect plan for your business or contact us for a custom solution
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
              <Button 
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light"
                onClick={() => {
                  const phoneNumber = "918870524355";
                  const message = "Hello, I'm interested in your Store development services. Can you please provide me with more information?";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
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
</>
  )
}

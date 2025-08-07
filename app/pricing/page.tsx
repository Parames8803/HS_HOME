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
      price: isInternationalPricing ? 500 : 15000, // Updated price logic
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Store Development Packages</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Comprehensive Store solutions tailored for businesses of all sizes
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={isInternationalPricing ? "text-gray-400" : "text-white font-medium"}>India</span>
              <Switch
                checked={isInternationalPricing}
                onCheckedChange={setIsInternationalPricing}
                className="data-[state=checked]:bg-white data-[state=checked]:text-black"
              />
              <span className={!isInternationalPricing ? "text-gray-400" : "text-white font-medium"}>
                US, Canada, Europe Countries
              </span>
            </div>
          </motion.div>

          {/* Development Packages */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Store Development Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentPackages.map((pkg, index) => (
                <motion.div
                  key={`dev-${index}`}
                  className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                      Popular Choice
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 mb-6">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {isInternationalPricing ? "$" : "₹"}
                        {pkg.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>

                    <Button
                      className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        href={getWhatsAppLink(pkg, "development")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pkg.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  <div className="p-8 border-t border-white border-opacity-10">
                    <h4 className="font-medium mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.limitations.length > 0 && (
                      <>
                        <h4 className="font-medium mb-4 mt-6">Limitations:</h4>
                        <ul className="space-y-3">
                          {pkg.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-gray-400">
                              <span className="mr-3">•</span>
                              <span>{limitation}</span>
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
        <div>
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Manufacturing Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementPackages.map((pkg, index) => (
              <motion.div
                key={`mgmt-${index}`}
                className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                    Popular Choice
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                  {/* WhatsApp Button for Management/Manufacturing Packages */}
                  <Button
                    className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""} mt-4`}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={getWhatsAppLink(pkg, "management")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="p-8 border-t border-white border-opacity-10">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.limitations.length > 0 && (
                    <>
                      <h4 className="font-medium mb-4 mt-6">Limitations:</h4>
                      <ul className="space-y-3">
                        {pkg.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-gray-400">
                            <span className="mr-3">•</span>
                            <span>{limitation}</span>
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
        <div className="mt-20">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Marketing Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingPackages.map((pkg, index) => (
              <motion.div
                key={`mktg-${index}`}
                className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                    Popular Choice
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                  {/* Removed price display here */}
                  <Button
                    className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={getWhatsAppLink(pkg, "management")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="p-8 border-t border-white border-opacity-10">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
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
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Store Packages Comparison</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              Detailed breakdown of all Store development tiers
            </p>
          </motion.div>

          {/* Development Comparison */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Development Services</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium">Features</th>
                    {developmentPackages.map((pkg) => (
                      <th key={pkg.name} className="text-center py-4 px-4 font-medium">
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
                    <tr key={`dev-comp-${index}`} className="border-b border-gray-200">
                      <td className="py-4 px-4 font-medium">
                        <div className="flex items-center">
                          {row.feature}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          </div>
                        </td>
                        {row.values.map((value, i) => (
                          <td key={i} className="text-center py-4 px-4">
                            {value === "No" ? (
                              <span className="text-gray-400">—</span>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Management Comparison */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Management Services</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-medium">Features</th>
                      {managementPackages.map((pkg) => (
                        <th key={pkg.name} className="text-center py-4 px-4 font-medium">
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
                      <tr key={`mgmt-comp-${index}`} className="border-b border-gray-200">
                        <td className="py-4 px-4 font-medium">
                          <div className="flex items-center">
                            {row.feature}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </td>
                        {row.values.map((value, i) => (
                          <td key={i} className="text-center py-4 px-4">
                            {value === "None" ? (
                              <span className="text-gray-400">—</span>
                            ) : (
                              value
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
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                Everything you need to know about our Store services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Store Store?</h2>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Choose the perfect plan for your business or contact us for a custom solution
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={() => {
                      const phoneNumber = "918870524355";
                      const message = "Hello, I'm interested in your Store development services. Can you please provide me with more information?";
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                  >
                    Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  )
}

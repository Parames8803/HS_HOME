"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Globe, MapPin, Shield, Users, Settings } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-light"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
              Terms of
              <span className="block text-gray-400 italic">Service</span>
            </h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <p className="text-gray-400 font-light">
              Effective Date: March 15, 2024
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="bg-gray-900/20 border border-gray-800 p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              <span className="text-white font-normal">Company:</span> The Black Crest (operating as "Hynox")
              <br /><br />
              Welcome to The Black Crest, a registered technology and product development company 
              operating under the brand Hynox. By accessing or using our website, applications, services, 
              subscription platforms, or engaging with our team in any form, you agree to the Terms of 
              Service stated below.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 - Eligibility */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800 flex items-center gap-3">
                <Users className="w-6 h-6 text-gray-500" />
                1. Eligibility and Acceptance
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                By engaging with The Black Crest in any capacity — as a client, user, subscriber, 
                employee, intern, or freelancer — you confirm that you:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Are at least 18 years old
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Have read and agree to be bound by these Terms
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Are using the services for lawful purposes
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 2 - Scope of Services */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800 flex items-center gap-3">
                <Settings className="w-6 h-6 text-gray-500" />
                2. Scope of Services
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                The Black Crest offers the following services:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6 mb-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Website & Software Development
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    ERP, CRM, and E-commerce Solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    UI/UX and SaaS Product Design
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Subscription-Based Clothing Platforms
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Dropshipping, Fulfillment & Brand Management
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Internship, Training & Research Programs
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 font-light">
                We may modify, discontinue, or expand services with or without prior notice.
              </p>
            </motion.section>

            {/* Section 3 - Subscription Service */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                3. Subscription-Based Clothing Service
              </h2>

              <div className="space-y-8">
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">3.1 Payment & Refunds</h3>
                  <ul className="space-y-3 text-gray-400 font-light">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Once a subscription plan is activated, all payments are final and non-refundable, 
                      even if the user discontinues the service mid-cycle.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Refunds will not be provided for clothing orders that are processed or shipped, 
                      dropshipping services already initiated, or subscription boxes.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">3.2 Separate Charges</h3>
                  <p className="text-gray-400 font-light mb-4 leading-relaxed">
                    Your subscription fee does not include the following:
                  </p>
                  <ul className="space-y-3 text-gray-400 font-light">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Shopify platform usage charges
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Domain name registration fees
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Payment gateway charges or transaction fees
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Shipping partner fees (if opted by the client directly)
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                      Any third-party plugin, app, or integration costs
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 5 - Software Use Policy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800 flex items-center gap-3">
                <Shield className="w-6 h-6 text-gray-500" />
                5. Software Use Policy
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                All software, code, dashboards, UI/UX designs, and tools created or deployed by 
                The Black Crest remain intellectual property of the company unless contractually transferred.
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6 mb-6">
                <p className="text-gray-400 font-light mb-4">Users are prohibited from:</p>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Reproducing, selling, or redistributing our software
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Reverse-engineering or cloning our platforms
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Sharing internal dashboards with external users
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 font-light">
                Use is granted as a limited, non-exclusive, non-transferable license for agreed business purposes only.
              </p>
            </motion.section>

            {/* Section 11 - Limitation of Liability */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                11. Limitation of Liability
              </h2>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    We do not guarantee uninterrupted access to services or platforms.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    The Black Crest is not responsible for data loss, business loss, or indirect damages.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    All services are provided "as is" and warranties apply only as per individual agreements.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 13 - Governing Law */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                13. Governing Law
              </h2>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <p className="text-gray-400 font-light leading-relaxed">
                  These Terms are governed by the laws of India, with legal jurisdiction based in 
                  Coimbatore, Tamil Nadu.
                </p>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                14. Contact Information
              </h2>
              <div className="bg-gray-900/20 border border-gray-800 p-8">
                <h3 className="text-xl font-light text-white mb-6">The Black Crest (Hynox)</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">info@theblackcrest.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">www.theblackcrest.com / www.hynox.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">Jeeva St, Pandiyan Nagar, Tirupur</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>

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

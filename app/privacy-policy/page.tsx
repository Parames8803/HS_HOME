"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Globe, MapPin } from "lucide-react"

export default function PrivacyPolicy() {
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
              Privacy
              <span className="block text-gray-400 italic">Policy</span>
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
              Your privacy is important to us. This Privacy Policy explains how The Black Crest, 
              also operating under the name Hynox, collects, uses, shares, and protects your information 
              when you use our website, services, apps, and subscription-based platforms — including our 
              clothing subscription service.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                1. Information We Collect
              </h2>
              <p className="text-gray-400 font-light mb-8 leading-relaxed">
                We collect the following categories of information:
              </p>

              <div className="space-y-8">
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.1 Personal Information</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Name
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Email address
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Phone number
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Billing and shipping address
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Account credentials (username, password)
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.2 Payment Information</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Card or UPI details (processed via secure third-party gateways)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Subscription billing details
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.3 Usage Data</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      IP address, browser type, operating system
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Pages visited, time spent, device info
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                2. How We Use Your Data
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                We use your data to:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Provide services, fulfill product or software orders
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Manage subscription plans and send monthly clothing boxes
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Respond to customer support and service requests
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Send transactional emails, reminders, and promotional offers (you can opt out anytime)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Improve platform features and user experience
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 7 - Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                7. Your Rights
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                You have the right to:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6 mb-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Access and review your personal data
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Update or correct inaccurate information
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Request data deletion (subject to legal or business constraints)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Opt out of marketing communications
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 font-light">
                To exercise these rights, contact: <span className="text-white">privacy@theblackcrest.com</span>
              </p>
            </motion.section>

            {/* Section 10 - Cancellation and Refund */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                10. Cancellation and Refund Policies
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                We strive to provide the best service possible. Please review our cancellation and refund policies below:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    You may cancel your subscription or order at any time via your account dashboard or by contacting our support team.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Refunds are only issued in cases of service failure, product defects, or if the order is cancelled before processing/shipping.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    No refunds are provided for prepaid plans or after the product has been shipped, except in cases of proven service failure or product defect.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    For eligible refunds, the amount will be credited to your original payment method within 7-10 business days.
                  </li>
                </ul>
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
                12. Contact Us
              </h2>
              <div className="bg-gray-900/20 border border-gray-800 p-8">
                <h3 className="text-xl font-light text-white mb-6">The Black Crest (Hynox)</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">thehynoxofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">www.hynox.in</span>
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

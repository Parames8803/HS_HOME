"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Effective Date: March 15, 2024</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Company: The Black Crest (operating as "Hynox")<br />
              Your privacy is important to us. This Privacy Policy explains how The Black Crest, also operating under the name Hynox, collects, uses, shares, and protects your information when you use our website, services, apps, and subscription-based platforms — including our clothing subscription service.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>
            <p className="mb-4">We collect the following categories of information:</p>

            <h3 className="text-xl font-bold mt-8 mb-4">1.1 Personal Information</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping address</li>
              <li>Account credentials (username, password)</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">1.2 Payment Information</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Card or UPI details (processed via secure third-party gateways)</li>
              <li>Subscription billing details</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">1.3 Usage Data</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address, browser type, operating system</li>
              <li>Pages visited, time spent, device info</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">1.4 Optional Inputs</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Clothing preferences, size, style selections (for fashion subscriptions)</li>
              <li>Feedback, survey responses</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Data</h2>
            <p className="mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide services, fulfill product or software orders</li>
              <li>Manage subscription plans and send monthly clothing boxes</li>
              <li>Respond to customer support and service requests</li>
              <li>Send transactional emails, reminders, and promotional offers (you can opt out anytime)</li>
              <li>Improve platform features and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Subscription Service (Clothing Store Policy)</h2>
            <p className="mb-4">If you subscribe to our clothing platform (e.g., Hynox/Teerex), we handle your data as follows:</p>

            <h3 className="text-xl font-bold mt-8 mb-4">3.1 Subscription Management</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Your name, size, and shipping info are used to deliver selected products.</li>
              <li>Subscription auto-renewals will be charged based on your selected plan unless cancelled.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3.2 Billing & Cancellation</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All billing is processed through encrypted payment gateways.</li>
              <li>You may cancel anytime via your account dashboard before the next billing cycle.</li>
              <li>No refunds are issued for prepaid plans unless there is a service failure on our side.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3.3 Communication</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>We may send reminders, style updates, delivery tracking, or new offers to your registered email/phone.</li>
              <li>You can manage your communication preferences in your profile settings.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. How We Share Data</h2>
            <p className="mb-4">We do not sell or rent your personal information. We may share your data only with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Trusted third-party service providers (e.g., payment processors, logistics partners)</li>
              <li>Government/legal authorities if legally required</li>
              <li>Internal tools for business and analytics (with data protection measures)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard encryption, access controls, and secure hosting practices to protect your data. However, no system is 100% secure, and users should also take steps to protect their passwords and devices.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Cookies & Tracking Technologies</h2>
            <p className="mb-4">We use cookies and tracking tools to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Improve website performance</li>
              <li>Remember login sessions</li>
              <li>Track analytics for better service</li>
            </ul>
            <p className="mb-6">You can manage cookie settings via your browser.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access and review your personal data</li>
              <li>Update or correct inaccurate information</li>
              <li>Request data deletion (subject to legal or business constraints)</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mb-6">To exercise these rights, contact: privacy@theblackcrest.com</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Data Retention</h2>
            <p className="mb-4">We retain your data:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>As long as you have an active account or subscription</li>
              <li>For legal, accounting, or reporting purposes, where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">9. Changes to Policy</h2>
            <p className="mb-6">
              This Privacy Policy may be updated from time to time. Changes will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">10. Contact Us</h2>
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="mb-2">The Black Crest (Hynox)</p>
              <p className="mb-2">📧 Email: privacy@theblackcrest.com</p>
              <p className="mb-2">🌐 Website: www.theblackcrest.com / www.hynox.in</p>
              <p>📍 Address: 123 Marketing St, tirupur</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 
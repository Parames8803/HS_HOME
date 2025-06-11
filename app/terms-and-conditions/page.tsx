"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditions() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Effective Date: March 15, 2024</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Company: The Black Crest (operating as "Hynox")<br />
              Welcome to The Black Crest, a registered technology and product development company operating under the brand Hynox. By accessing or using our website, applications, services, subscription platforms, or engaging with our team in any form, you agree to the Terms of Service stated below.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Eligibility and Acceptance</h2>
            <p className="mb-4">By engaging with The Black Crest in any capacity — as a client, user, subscriber, employee, intern, or freelancer — you confirm that you:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Are at least 18 years old</li>
              <li>Have read and agree to be bound by these Terms</li>
              <li>Are using the services for lawful purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. Scope of Services</h2>
            <p className="mb-4">The Black Crest offers the following services:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Website & Software Development</li>
              <li>ERP, CRM, and E-commerce Solutions</li>
              <li>UI/UX and SaaS Product Design</li>
              <li>Subscription-Based Clothing Platforms</li>
              <li>Dropshipping, Fulfillment & Brand Management</li>
              <li>Internship, Training & Research Programs</li>
            </ul>
            <p className="mb-6">We may modify, discontinue, or expand services with or without prior notice.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Subscription-Based Clothing Service</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">3.1 Payment & Refunds</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Once a subscription plan is activated, all payments are final and non-refundable, even if the user discontinues the service mid-cycle.</li>
              <li>Refunds will not be provided for:
                <ul className="list-disc pl-6 mt-2">
                  <li>Clothing orders that are processed or shipped</li>
                  <li>Dropshipping services already initiated</li>
                  <li>Subscription boxes or curated styling services</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3.2 Separate Charges</h3>
            <p className="mb-4">Your subscription fee does not include the following:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Shopify platform usage charges</li>
              <li>Domain name registration fees</li>
              <li>Payment gateway charges or transaction fees</li>
              <li>Shipping partner fees (if opted by the client directly)</li>
              <li>Any third-party plugin, app, or integration costs</li>
            </ul>
            <p className="mb-6">These charges are billed separately and must be settled directly by the subscriber/client.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">3.3 Fulfillment Policy</h3>
            <p className="mb-4">We promise to handle the complete A-Z process of your clothing store/dropshipping service:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Product research & listing</li>
              <li>Order processing & packaging</li>
              <li>Inventory coordination</li>
              <li>Dispatch and logistics</li>
            </ul>
            <p className="mb-6">We do not guarantee customer satisfaction with sizing, fit, or delays caused by courier services.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">3.4 Subscription Cancellation</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Subscriptions can be cancelled anytime through your online dashboard.</li>
              <li>If you cancel the subscription on or after the 3rd day of your billing cycle, the full month's charge will apply.</li>
              <li>Cancellation before the 3rd day avoids the next charge, and services will stop at the end of the current cycle.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Employment, Internship & Freelance Policy</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">4.1 Engagement Requirements</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All interns, employees, and freelancers must sign an onboarding agreement and follow project timelines.</li>
              <li>All official communications must be handled through approved tools (email, company portal, etc.).</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">4.2 Notice Period & Exit Policy</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All team members must provide a minimum 30-day notice for resignation or exit.</li>
              <li>Failure to follow the notice policy will result in:
                <ul className="list-disc pl-6 mt-2">
                  <li>Forfeiture of final stipend or salary</li>
                  <li>No certificate or letter of experience</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">4.3 Performance-Based Stipends</h3>
            <p className="mb-4">Stipends are only applicable after:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Completing training</li>
              <li>Meeting performance metrics</li>
              <li>Submitting required documentation</li>
            </ul>
            <p className="mb-6">We reserve the right to withhold payment if terms are breached.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Software Use Policy</h2>
            <p className="mb-4">All software, code, dashboards, UI/UX designs, and tools created or deployed by The Black Crest remain intellectual property of the company unless contractually transferred.</p>
            <p className="mb-4">Users are prohibited from:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Reproducing, selling, or redistributing our software</li>
              <li>Reverse-engineering or cloning our platforms</li>
              <li>Sharing internal dashboards with external users</li>
            </ul>
            <p className="mb-6">Use is granted as a limited, non-exclusive, non-transferable license for agreed business purposes only.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Project Delivery & Timelines</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Client deliverables are shared based on timelines agreed in formal communication or quotation.</li>
              <li>Delays from the client side (content, approval, access, or payment) will automatically shift delivery timelines.</li>
              <li>The company is not liable for delays caused by third-party tools, APIs, server downtimes, or force majeure events.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Product Returns & Delivery</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>For product-based services (like clothing), once the item is shipped, returns are accepted only for damaged or incorrect items.</li>
              <li>Sizing and style preferences are not grounds for return unless specifically covered in the subscription plan.</li>
              <li>All return shipping must be handled by the customer unless agreed otherwise.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Third-Party Services</h2>
            <p className="mb-4">We use third-party providers for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Hosting (e.g., AWS, Hostinger)</li>
              <li>Payments (e.g., Razorpay, Stripe)</li>
              <li>Shipping (e.g., Delhivery, Shiprocket)</li>
              <li>E-commerce (e.g., Shopify, WooCommerce)</li>
            </ul>
            <p className="mb-6">We do not control these services and are not liable for their performance, downtime, or separate billing.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">9. Confidentiality & Data Security</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>All team members, clients, and users are required to keep project data, designs, and code confidential.</li>
              <li>Any leak, unauthorized use, or replication will result in legal action.</li>
              <li>Data collected is handled as per our Privacy Policy.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">10. Termination of Services</h2>
            <p className="mb-4">We reserve the right to suspend or terminate:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Any user, client, or team member who violates these Terms</li>
              <li>Projects with non-payment issues</li>
              <li>Subscriptions after repeated failed charges or breach of terms</li>
            </ul>
            <p className="mb-6">No refunds will be issued upon termination due to violations.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">11. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>We do not guarantee uninterrupted access to services or platforms.</li>
              <li>The Black Crest is not responsible for data loss, business loss, or indirect damages.</li>
              <li>All services are provided "as is" and warranties apply only as per individual agreements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">12. Updates to Terms</h2>
            <p className="mb-6">
              We may update these Terms occasionally. All changes will be posted on our official websites and become effective immediately upon posting. Continued use of our services constitutes your acceptance of the changes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">13. Governing Law</h2>
            <p className="mb-6">
              These Terms are governed by the laws of India, with legal jurisdiction based in Coimbatore, Tamil Nadu.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">14. Contact Information</h2>
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="mb-2">The Black Crest (Hynox)</p>
              <p className="mb-2">📧 Email: info@theblackcrest.com</p>
              <p className="mb-2">🌐 Website: www.theblackcrest.com / www.hynox.in</p>
              <p>📍 Address: 123 Marketing St, tirupur</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 
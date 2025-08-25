"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="py-32 bg-black relative" id="contact">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/hynox_logo.jpg"
                alt="HYNOX Logo"
                width={32}
                height={32}
                className="rounded-full border border-gray-700"
              />
              <span className="text-2xl font-light text-white">HYNOX</span>
            </div>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
              Connecting creators to the world through innovative digital solutions 
              and cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="https://www.linkedin.com/company/hynox-in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="w-10 h-10 border border-gray-700 group-hover:border-gray-500 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.div>
              </Link>

              <Link 
                href="https://www.instagram.com/hynox.in?igsh=aWdjZzd3OGo1NjY4&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="w-10 h-10 border border-gray-700 group-hover:border-gray-500 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-light text-white">Services</h3>
            <div className="w-8 h-px bg-gray-700" />
            <ul className="space-y-4">
              {[
                { name: "Web Applications", href: "/#services" },
                { name: "Mobile Development", href: "/#services" },
                { name: "Custom Software", href: "/#services" },
                { name: "Shopify Solutions", href: "/drop" },
                { name: "Digital Marketing", href: "/marketing" },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-300 font-light text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-light text-white">Company</h3>
            <div className="w-8 h-px bg-gray-700" />
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/#work" },
                { name: "Contact", href: "/contact" },
                { name: "Careers", href: "/careers" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-300 font-light text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-16 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider">Email</h4>
              <Link 
                href="mailto:thehynoxofficial@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                thehynoxofficial@gmail.com
              </Link>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider">Phone</h4>
              <Link 
                href="https://wa.me/918870524355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                +91 8870524355
              </Link>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider">Location</h4>
              <p className="text-gray-300 font-light">
                Jeeva St, Pandiyan Nagar<br />
                Tirupur-641 602
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-gray-500 font-light">
            © 2024 HYNOX. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 font-light"
            >
              Privacy Policy
            </Link>
            <div className="w-px h-4 bg-gray-700" />
            <Link 
              href="/terms-and-conditions" 
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 font-light"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-40 right-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-1 h-1 bg-gray-800 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-2 h-px bg-gray-800" />
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.005] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "240px 240px",
          }}
        />
      </div>
    </footer>
  )
}

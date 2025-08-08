"use client"

import { Zap } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl font-bold">Hynox</span>
            </div>
            <p className="text-gray-400">
              Delivers cutting-edge IT solutions and efficient manufacturing services. <br />
              We connect technology and industry to drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/hynox/" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/hynox.in?igsh=aWdjZzd3OGo1NjY4&utm_source=qr" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Web Application
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/drop" className="text-gray-400 hover:text-white transition-colors">
                  Shopify
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-gray-400 hover:text-white transition-colors">
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">thehynoxofficial@gmail.com</li>
              <li>
                <Link href="https://wa.me/918870524355" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  +91 8870524355
                </Link>
              </li>
              <li className="text-gray-400">Jeeva St,Pandiyan Nagar,Tirupur-641 602</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 The Black Crest. All rights reserved.
            <div className="flex gap-4 mt-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

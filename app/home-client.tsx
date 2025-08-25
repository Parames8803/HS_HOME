"use client";

import { motion, AnimatePresence } from "framer-motion"; // Keep motion and AnimatePresence if other sections use them
import {
  ChevronDown,
  Code,
  ArrowRight,
  Zap,
  Smartphone,
  Palette,
} from "lucide-react"; // Keep only used icons
import { Button } from "@/components/ui/button"; // Keep Button if used in other sections
import Image from "next/image";
import Link from "next/link";
import LustreText from "@/components/ui/lustretext";


export default function HomeClient() {
  return (
    <div className="bg-black text-white relative">
      {/* Hero Section */}
<section
  id="home"
  data-section
  className="min-h-screen flex items-center justify-center relative pt-20 bg-black"
>
  <div className="container mx-auto px-4 py-20 relative z-10">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-light leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <LustreText text="Connecting"/>
          <br />
          <LustreText text="Creators" className="italic"/>
          <br />
          <LustreText text="to the World"/>
        </motion.h1>

        <motion.div
          className="w-16 h-px bg-white mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Digital solutions through WordPress, Shopify, and custom development
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Link href="/#services">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-normal rounded-none border-0">
              View Services
            </Button>
          </motion.div>
        </Link>

        <Link href="/contact">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-normal rounded-none"
            >
              Get in Touch
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </div>

    {/* Floating Elements */}
    <motion.div
      className="absolute top-1/4 left-10 md:left-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.6 }}
    >
      <motion.div
        className="w-2 h-2 bg-white rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>

    <motion.div
      className="absolute top-1/3 right-10 md:right-20"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <motion.div
        className="w-1 h-1 bg-gray-400 rounded-full"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </motion.div>

    <motion.div
      className="absolute bottom-1/4 left-1/4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        className="w-3 h-px bg-gray-600"
        animate={{ 
          scaleX: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>

    <motion.div
      className="absolute bottom-1/3 right-1/3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.2 }}
    >
      <motion.div
        className="w-px h-4 bg-gray-500"
        animate={{ 
          scaleY: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.div>
  </div>

  {/* Minimal Background Grid */}
  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  </div>

  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 2.4 }}
  >
    <motion.div
      className="flex flex-col items-center space-y-2 text-gray-500"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-sm font-light tracking-widest rotate-90 origin-center">
        SCROLL
      </span>
      <div className="w-px h-8 bg-gray-600" />
    </motion.div>
  </motion.div>
</section>

      {/* Global Service Section */}
<section className="py-32 bg-black relative">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Global
        <span className="block text-gray-400 italic">Reach</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Delivering solutions across continents with local expertise and global standards
      </motion.p>
    </motion.div>

    {/* Countries Grid */}
    <motion.div
      className="flex justify-around md:gap-8 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {[
        {
          name: "India",
          flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
          code: "IN"
        },
        {
          name: "United Kingdom",
          flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
          code: "UK"
        },
        {
          name: "Finland", 
          flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
          code: "FI"
        },
      ].map((country, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group"
        >
          <motion.div
            className="text-center space-y-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Flag Container */}
            <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24">
              <motion.div
                className="w-full h-full rounded-full overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Country Info */}
            <div className="space-y-2">
              <h3 className="text-white text-lg md:text-xl font-light">
                {country.name}
              </h3>
              <p className="text-gray-500 text-sm tracking-widest font-mono">
                {country.code}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>

    {/* Bottom Text */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
        Trusted by businesses worldwide for innovative technology solutions
      </p>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-20 left-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-1 h-1 bg-gray-600 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-32 right-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-20 left-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    />
  </div>
</section>

{/* Tech Stack Section */}
<section
  id="tech-stack"
  data-section
  className="py-32 bg-black relative"
>
  <div className="container mx-auto px-4">
    {/* Tech Stack Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Tech
        <span className="block text-gray-400 italic">Stack</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Modern tools for exceptional results
      </motion.p>
    </motion.div>

    {/* Technologies Minimal Grid */}
    <motion.div
      className="mb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12 max-w-6xl mx-auto">
        {[
          {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
          },
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            name: "Firebase",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          },
          {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          },
          {
            name: "PostgreSQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "Figma",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          },
          {
            name: "Shopify",
            logo: "https://img.icons8.com/color/48/shopify.png",
          },
        ].map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex flex-col items-center space-y-3"
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <span className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center font-light">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Marketing Platforms Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-5"
    >
      <motion.h3
        className="text-4xl md:text-6xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Digital
        <span className="block text-gray-400 italic">Presence</span>
      </motion.h3>

      <motion.div
        className="w-10 h-px bg-gray-600 mx-auto mb-16"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Marketing Platforms Minimal Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[
          {
            name: "YouTube",
            logo: "https://www.svgrepo.com/show/13671/youtube.svg",
          },
          {
            name: "Instagram",
            logo: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
          },
          {
            name: "LinkedIn",
            logo: "https://www.svgrepo.com/show/448234/linkedin.svg",
          },
          {
            name: "Facebook",
            logo: "https://www.svgrepo.com/show/448224/facebook.svg",
          },
          {
            name: "TikTok",
            logo: "https://www.svgrepo.com/show/452114/tiktok.svg",
          },
          {
            name: "Hotstar",
            logo: "/hotstar-svgrepo.png",
          },
        ].map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center space-y-3"
          >
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-full h-full object-contain group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-light">
              {platform.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
          Comprehensive solutions from development to digital marketing
        </p>
        
        <Link href="/marketing">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button
              variant="outline"
              className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light"
            >
              View Marketing Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-32 left-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 right-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-32 left-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

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
</section>

      {/* Products Section */}
      {/* Products Section */}
<section
  id="products"
  data-section
  className="py-32 bg-black relative"
>
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our
        <span className="block text-gray-400 italic">Products</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Innovative solutions for modern businesses
      </motion.p>
    </motion.div>

    {/* Products Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          image: "/erp_cover.jpeg",
          title: "Enterprise Resource Planning",
          description: "Comprehensive ERP solution for business operations",
          category: "Software",
        },
        {
          image: "/sub_cloth_cover.jpeg",
          title: "Fashion Subscription",
          description: "Launch your clothing brand with our subscription model",
          category: "E-commerce",
          viewMoreLink: "/drop?type=clothing",
        },
        {
          image: "/sub_cosmetics_cover.jpeg",
          title: "Beauty Subscription",
          description: "Start your cosmetics brand with plug & play model",
          category: "E-commerce",
          viewMoreLink: "/drop?type=cosmetics",
        },
        {
          image: "/sub_agri_cover.jpeg",
          title: "Agriculture Subscription",
          description: "Revolutionize agricultural business operations",
          category: "Agritech",
          viewMoreLink: "/drop?type=agri-products",
        },
      ].map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <motion.a
            href={product.viewMoreLink || "#"}
            target={product.viewMoreLink ? "_blank" : "_self"}
            rel={product.viewMoreLink ? "noopener noreferrer" : ""}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="block"
          >
            {/* Product Card */}
            <div className="relative overflow-hidden bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gray-400 font-light tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* View More Indicator */}
                {product.viewMoreLink && (
                  <motion.div
                    className="flex items-center space-x-2 pt-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light">
                      Explore
                    </span>
                    <motion.div
                      className="w-4 h-px bg-gray-600 group-hover:bg-gray-400 transition-colors duration-300"
                      whileHover={{ scaleX: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <p className="text-lg text-gray-500 mb-8 font-light">
        Ready to transform your business?
      </p>
      
       <Link href="/contact">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Button
          variant="outline"
          className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light"
        >
          Get Started
        </Button>
      </motion.div>
      </Link>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-40 right-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 left-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-40 right-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "140px 140px",
      }}
    />
  </div>
</section>

      {/* Services Section */}
<section
  id="services"
  data-section
  className="py-32 bg-black relative"
>
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our
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
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Digital solutions tailored for your success
      </motion.p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          image: "/web_app_cover.jpeg",
          title: "Web Applications",
          description: "Scalable web solutions for modern businesses",
          category: "Development",
          viewMoreLink: "/contact",
        },
        {
          image: "/mobile_app_cover.jpeg",
          title: "Mobile Applications",
          description: "Native and cross-platform mobile experiences",
          category: "Development",
          viewMoreLink: "/contact",
        },
        {
          image: "/custom_software_cover.jpeg",
          title: "Custom Software",
          description: "Bespoke solutions for unique business needs",
          category: "Development",
          viewMoreLink: "/contact",
        },
        {
          image: "https://img.icons8.com/color/96/shopify.png",
          title: "Shopify Development",
          description: "E-commerce stores built for performance",
          category: "E-commerce",
          isLogo: true,
          viewMoreLink: "/contact",
        },
        {
          image: "/googleads.jpeg",
          title: "Performance Marketing",
          description: "Data-driven marketing for measurable growth",
          category: "Marketing",
          viewMoreLink: "/marketing",
        },
        {
          image: "/ml_cover.jpg",
          title: "AI/ML Solutions",
          description: "Intelligent automation and predictive analytics",
          category: "AI/ML",
          viewMoreLink: "/contact",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <motion.a
            href={service.viewMoreLink || "#"}
            target={service.viewMoreLink ? "_blank" : "_self"}
            rel={service.viewMoreLink ? "noopener noreferrer" : ""}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="block h-full"
          >
            {/* Service Card */}
            <div className="relative h-full overflow-hidden bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 transition-all duration-300 flex flex-col">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                {service.isLogo ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  </>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gray-400 font-light tracking-wider">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Action Indicator */}
                <motion.div
                  className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300"
                >
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light">
                    {service.viewMoreLink ? "Learn More" : "Coming Soon"}
                  </span>
                  
                  {service.viewMoreLink && (
                    <motion.div
                      className="w-4 h-px bg-gray-600 group-hover:bg-gray-400 transition-colors duration-300"
                      whileHover={{ scaleX: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>

    {/* Service Categories Summary */}
    <motion.div
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {[
        { category: "Development", count: "3" },
        { category: "E-commerce", count: "1" },
        { category: "Marketing", count: "1" },
        { category: "AI/ML", count: "1" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-2xl md:text-3xl font-light text-white">
            {item.count}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {item.category}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <p className="text-lg text-gray-500 mb-8 font-light">
        Ready to discuss your project?
      </p>
      
       <Link href="/contact">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Button
          variant="outline"
          className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light"
        >
          Start Conversation
        </Button>
      </motion.div>
      </Link>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-32 left-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 right-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-32 left-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "160px 160px",
      }}
    />
  </div>
</section>

      {/* Work Section */}
<section id="work" data-section className="py-32 bg-black relative">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our
        <span className="block text-gray-400 italic">Work</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Featured projects and client success stories
      </motion.p>
    </motion.div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {[
        {
          title: "Teerex",
          category: "Custom Development",
          image: "/teerex_web.jpeg?height=400&width=600",
          link: "https://teerex.in",
          description: "E-commerce platform with custom features",
        },
        {
          title: "SugarStar",
          category: "Shopify Development",
          image: "/sugarstar_web.jpeg?height=400&width=600",
          link: "https://sugarstar.in",
          description: "Premium confectionery online store",
        },
        {
          title: "Mallika Garments",
          category: "Custom Development",
          image: "/malika-garments_web.jpg?height=400&width=600",
          link: "https://www.mallikagarments.com",
          description: "Fashion retail business solution",
        },
      ].map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="block h-full"
          >
            {/* Project Card */}
            <div className="relative h-full overflow-hidden bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 transition-all duration-300 flex flex-col">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gray-300 font-light tracking-wider bg-black/50 px-2 py-1 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* External Link Indicator */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-6 h-6 border border-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 border-t border-r border-gray-400"
                      style={{ transform: "rotate(45deg)" }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Visit Link */}
                <motion.div
                  className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300"
                >
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light">
                    Visit Live Site
                  </span>
                  
                  <motion.div
                    className="w-4 h-px bg-gray-600 group-hover:bg-gray-400 transition-colors duration-300"
                    whileHover={{ scaleX: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>

    {/* Project Statistics */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {[
        { number: "15+", label: "Projects Delivered" },
        { number: "3", label: "Countries Served" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-2xl md:text-3xl font-light text-white">
            {stat.number}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <p className="text-lg text-gray-500 mb-8 font-light">
        Ready to create something amazing together?
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
         <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Button
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light"
          >
            Start Your Project
          </Button>
        </motion.div>
        </Link>
        
        <Link href="/#products">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Button
            variant="outline"
            className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light"
          >
            View All Projects
          </Button>
        </motion.div>
        </Link>
      </div>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-40 left-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/3 right-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-40 left-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "180px 180px",
      }}
    />
  </div>
</section>

      {/* Clients Section */}
<section id="clients" data-section className="py-32 bg-black relative">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our
        <span className="block text-gray-400 italic">Clients</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.p
        className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Trusted by businesses across industries
      </motion.p>
    </motion.div>

    {/* Clients Grid */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {[
        {
          title: "Teerex",
          category: "Textile",
          image: "/teerex_logo.jpg",
        },
        {
          title: "SugarStar",
          category: "Textile",
          image: "/sugarstar_logo.jpg",
        },
        {
          title: "Twinstar",
          category: "Textile",
          image: "/twinstar_logo.jpg",
        },
        {
          title: "Kyto",
          category: "Textile",
          image: "/kyto_logo.jpg",
        },
        {
          title: "NSK",
          category: "Textile",
          image: "/nsk_logo.jpg",
        },
        {
          title: "Mallika Garments",
          category: "Textile",
          image: "/mallika_garments_logo.jpg",
        },
        {
          title: "NP Global Exports",
          category: "Textile",
          image: "/npglobal_logo.jpg",
        },
        {
          title: "JP Aluminium",
          category: "Interiors",
          image: "/jpnets_logo.jpg",
        },
        {
          title: "Zyden",
          category: "Textile",
          image: "/zyden_logo.jpg",
        },
        {
          title: "Graasp",
          category: "Textile",
          image: "/graasp_logo.jpg",
        },
      ].map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group flex flex-col items-center space-y-4"
        >
          {/* Logo Container */}
          <motion.div
            className="relative w-20 h-20 md:w-24 md:h-24"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="w-full h-full overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors duration-300 bg-gray-900/20">
              <img
                src={client.image}
                alt={client.title}
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 pointer-events-none" />
          </motion.div>

          {/* Client Info */}
          <div className="text-center space-y-1">
            <h3 className="text-sm md:text-base font-light text-gray-300 group-hover:text-white transition-colors duration-300">
              {client.title}
            </h3>
            <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light tracking-wider">
              {client.category}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Industry Categories */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {[
        {
          category: "Textile & Fashion",
          count: "9",
          description: "Leading textile manufacturers and fashion brands",
        },
        {
          category: "Manufacturing",
          count: "1", 
          description: "Industrial and interior solution providers",
        },
      ].map((industry, index) => (
        <motion.div
          key={index}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-light text-white">
              {industry.count}
            </div>
            <div className="text-lg md:text-xl font-light text-gray-300">
              {industry.category}
            </div>
            <div className="w-8 h-px bg-gray-700 mx-auto" />
          </div>
          <p className="text-sm text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
            {industry.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* Client Testimonial Quote */}
    <motion.div
      className="text-center max-w-2xl mx-auto mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="text-lg md:text-xl text-gray-400 font-light italic leading-relaxed">
          "Working with diverse clients across industries has strengthened our expertise 
          and ability to deliver tailored solutions."
        </div>
        <div className="w-16 h-px bg-gray-600 mx-auto" />
      </motion.div>
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <p className="text-lg text-gray-500 mb-8 font-light">
        Ready to join our growing list of satisfied clients?
      </p>
      
      <Link href="/contact">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Button
          variant="outline"
          className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light"
        >
          Become a Client
        </Button>
      </motion.div>
      </Link>
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-32 left-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 right-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-32 left-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 2.2 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "200px 200px",
      }}
    />
  </div>
</section>

      {/* About Section */}
<section
  id="about"
  data-section
  className="py-32 bg-black relative"
>
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-light mb-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our
        <span className="block text-gray-400 italic">Approach</span>
      </motion.h2>
      
      <motion.div
        className="w-12 h-px bg-white mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </motion.div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative hidden lg:block"
      >
        <div className="relative h-[500px] overflow-hidden">
          <motion.div
            className="w-full h-full border border-gray-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <img
              src="/approach.jpg"
              alt="Our Approach"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300" />
          </motion.div>
          
          {/* Decorative border elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-gray-600" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-gray-600" />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-12"
      >
        {/* Introduction */}
        <div className="space-y-6">
          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Strategic thinking meets creative execution for exceptional digital experiences
          </motion.p>
          
          <motion.div
            className="w-16 h-px bg-gray-600"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {[
            {
              number: "01",
              title: "Discovery",
              description: "Understanding your business, goals, and audience"
            },
            {
              number: "02", 
              title: "Strategy",
              description: "Tailored approach for your specific objectives"
            },
            {
              number: "03",
              title: "Development",
              description: "Beautiful, functional solutions that perform"
            },
            {
              number: "04",
              title: "Launch",
              description: "Smooth deployment with ongoing optimization"
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="group flex items-start gap-6"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-sm font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {step.number}
                  </span>
                </motion.div>
              </div>

              {/* Step Content */}
              <div className="flex-grow space-y-2 pt-1">
                <h3 className="text-lg md:text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < 3 && (
                <motion.div
                  className="absolute left-[54px] mt-12 w-px h-8 bg-gray-800"
                  initial={{ height: 0 }}
                  whileInView={{ height: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Philosophy Section */}
    <motion.div
      className="mt-32 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
          Philosophy
        </h3>
        
        <motion.div
          className="w-12 h-px bg-gray-600 mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.4 }}
        />
        
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed italic">
          "Every project is an opportunity to create something meaningful. 
          We believe in building not just software, but lasting partnerships 
          that drive real business value."
        </p>
      </motion.div>
    </motion.div>

    {/* Statistics */}
    <motion.div
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 2.6 }}
    >
      {[
        { number: "4", label: "Step Process" },
        { number: "15+", label: "Projects Delivered" },
        { number: "3", label: "Countries" },
        { number: "100%", label: "Client Success" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
        >
          <div className="text-2xl md:text-3xl font-light text-white">
            {stat.number}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-40 right-16"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 3 }}
    >
      <div className="w-1 h-1 bg-gray-700 rounded-full" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 left-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 3.2 }}
    >
      <div className="w-2 h-px bg-gray-700" />
    </motion.div>

    <motion.div
      className="absolute bottom-40 right-24"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 3.4 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </div>

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "220px 220px",
      }}
    />
  </div>
</section>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { caseStudies } from "../data/case-studies"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Case Studies &
              <span className="block text-gray-400 italic">User Stories</span>
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
              Real-world solutions and success stories from our client partnerships
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Users, number: `${caseStudies.length}+`, label: "Case Studies" },
              { icon: Target, number: "15+", label: "Industries Served" },
              { icon: TrendingUp, number: "300%", label: "Average Growth" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="w-16 h-16 border border-gray-700 flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-gray-400" />
                </div>
                <div className="text-2xl md:text-3xl font-light text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="bg-gray-900/20 border-gray-800 text-white h-full flex flex-col group-hover:border-gray-600 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-gray-500 font-light">
                        {study.clientName}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow pb-6">
                      <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {study.overview}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                      <Link href={`/case-studies/${study.id}`} className="w-full">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <Button 
                            className="w-full bg-white text-black hover:bg-gray-200 font-light rounded-none group/button"
                            variant="default"
                          >
                            Know More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {caseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 border border-gray-700 flex items-center justify-center mx-auto mb-8">
                <Users className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Case Studies Coming Soon
              </h3>
              <p className="text-gray-400 font-light max-w-md mx-auto leading-relaxed">
                We're currently documenting our client success stories. Check back soon for detailed case studies.
              </p>
            </motion.div>
          )}
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
                Ready to Create Your
                <span className="block text-gray-400 italic">Success Story?</span>
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
                Let's discuss how we can help transform your business with our proven solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href="/contact">
                    <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href="/about">
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white px-8 py-3 rounded-none font-light bg-transparent"
                    >
                      Learn More About Us
                    </Button>
                  </Link>
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
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
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
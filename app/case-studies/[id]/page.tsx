"use client"

import { motion } from "framer-motion"
import { caseStudies } from "../../data/case-studies"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, User, Target, CheckCircle, Lightbulb, TrendingUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

import React from "react"; // Add React import for React.use

interface CaseStudyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <section className="pt-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {caseStudy.title}
            </motion.h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.h2
              className="text-xl md:text-2xl text-gray-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {caseStudy.clientName}
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Overview */}
              {caseStudy.overview && (
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                      <Target className="w-6 h-6 text-gray-500" />
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      {caseStudy.overview}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Initial Conversation */}
              {caseStudy.initialConversation && (
                  <Card className="bg-gray-900/20 border-gray-800 text-white">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                        <MessageCircle className="w-6 h-6 text-gray-500" />
                        Initial Conversation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 font-light leading-relaxed">
                        {caseStudy.initialConversation}
                      </p>
                    </CardContent>
                  </Card>
              )}

              {/* Detailed Conversations */}
              {caseStudy.detailedConversations && caseStudy.detailedConversations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-gray-900/20 border-gray-800 text-white">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                        <MessageCircle className="w-6 h-6 text-gray-500" />
                        Detailed Conversations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {caseStudy.detailedConversations.map((conversation, index) => (
                        <div key={index} className="space-y-4">
                          <div className="bg-gray-900/40 border border-gray-800 p-6">
                            <p className="font-light text-gray-400 mb-2 text-sm uppercase tracking-wider">
                              Client Challenge:
                            </p>
                            <p className="text-gray-300 font-light leading-relaxed mb-4">
                              {conversation.clientChallenge}
                            </p>
                            <p className="font-light text-gray-400 mb-2 text-sm uppercase tracking-wider">
                              Hynox Response:
                            </p>
                            <p className="text-gray-300 font-light leading-relaxed">
                              {conversation.hynoxResponse}
                            </p>
                          </div>
                          {index < caseStudy.detailedConversations.length - 1 && (
                            <Separator className="bg-gray-800" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Case Study Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-gray-500" />
                      Case Study Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {caseStudy.caseStudyContent}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* User Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                      <User className="w-6 h-6 text-gray-500" />
                      User Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {caseStudy.userStory}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why It Matters */}
              {caseStudy.whyItMatters && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-gray-900/20 border-gray-800 text-white">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-gray-500" />
                        Why It Matters
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 font-light leading-relaxed">
                        {caseStudy.whyItMatters}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-gray-500" />
                      Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudy.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300 font-light leading-relaxed">
                          <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Final Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-light text-white flex items-center gap-3">
                      <Target className="w-6 h-6 text-gray-500" />
                      Final Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {caseStudy.finalSolution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Call to Action */}
              {caseStudy.callToAction && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-white text-black">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light text-black">
                        Ready to Get Started?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 font-light leading-relaxed mb-6">
                        {caseStudy.callToAction}
                      </p>
                      <Link href="/contact">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <Button className="bg-black text-white hover:bg-gray-800 font-light rounded-none">
                            Start Your Project
                          </Button>
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="sticky top-32"
              >
                <Card className="bg-gray-900/20 border-gray-800 text-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl font-light text-white">
                      Case Study Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-light text-gray-400 uppercase tracking-wider mb-2">
                        Client Name
                      </p>
                      <p className="text-gray-300 font-light">
                        {caseStudy.clientName}
                      </p>
                    </div>
                    <Separator className="bg-gray-800" />
                    <div>
                      <p className="text-sm font-light text-gray-400 uppercase tracking-wider mb-2">
                        Project Type
                      </p>
                      <p className="text-gray-300 font-light">
                        Custom Solution
                      </p>
                    </div>
                    <Separator className="bg-gray-800" />
                    <div>
                      <p className="text-sm font-light text-gray-400 uppercase tracking-wider mb-2">
                        Status
                      </p>
                      <p className="text-gray-300 font-light">
                        Completed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
    </div>
  )
}

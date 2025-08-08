"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Users,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Link as LinkIcon
} from "lucide-react";
import toast from "react-hot-toast";

interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  type: string;
  location: string;
  stipend: string;
  duration: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Video Editing Intern",
    description: "Join our creative team as a Video Editing Intern and gain hands-on experience in professional video production. You'll work on exciting projects ranging from social media content to promotional videos.",
    requirements: [
      "Proficiency in Adobe Premiere Pro, After Effects, or DaVinci Resolve",
      "Basic understanding of video editing principles and storytelling",
      "Knowledge of color grading and audio editing",
      "Creative mindset with attention to detail",
      "Ability to work with tight deadlines",
      "Portfolio showcasing previous video editing work"
    ],
    type: "Internship",
    location: "Remote",
    stipend: "Performance-based up to ₹5,000/month",
    duration: "6 months"
  },
  {
    id: "2",
    title: "Content Creation Intern",
    description: "Be part of our content strategy team and help create engaging content across multiple platforms. You'll learn content marketing, social media strategy, and brand storytelling.",
    requirements: [
      "Strong writing and communication skills",
      "Experience with social media platforms and content creation",
      "Basic knowledge of graphic design tools (Canva, Photoshop)",
      "Understanding of current digital trends and viral content",
      "Creative thinking and ideation skills",
      "Portfolio of content creation work or personal projects"
    ],
    type: "Internship",
    location: "Remote",
    stipend: "Performance-based up to ₹5,000/month",
    duration: "6 months"
  },
  {
    id: "3",
    title: "Research Intern",
    description: "Support our strategic initiatives through comprehensive research and analysis. You'll dive deep into market trends, competitor analysis, and industry insights to inform business decisions.",
    requirements: [
      "Strong analytical and research skills",
      "Proficiency in data analysis tools (Excel, Google Sheets)",
      "Excellent written communication for research reports",
      "Attention to detail and accuracy",
      "Ability to synthesize complex information",
      "Academic background in business, marketing, or related field"
    ],
    type: "Internship",
    location: "Remote",
    stipend: "Performance-based up to ₹5,000/month",
    duration: "6 months"
  },
  {
    id: "4",
    title: "Brand Media (On Camera Presenter)",
    description: "Become the face of our brand across various digital platforms. You'll present content, host live sessions, and represent our company in video communications with confidence and charisma.",
    requirements: [
      "Excellent communication and presentation skills",
      "Comfortable and confident on camera",
      "Professional appearance and demeanor",
      "Experience in public speaking or presenting",
      "Understanding of brand messaging and tone",
      "Portfolio or demo reel showcasing on-camera presence"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based up to ₹5,000/month",
    duration: "6 months"
  },
  {
    id: "5",
    title: "Software Development Intern",
    description: "Join our tech team and contribute to cutting-edge software solutions. You'll work on real-world projects involving AI/ML implementations, full-stack web applications, and innovative digital products using modern technologies.",
    requirements: [
      "Strong knowledge of MERN stack (MongoDB, Express.js, React, Node.js)",
      "Proficiency in JavaScript, TypeScript, and Python",
      "Understanding of AI/ML concepts and frameworks (TensorFlow, PyTorch)",
      "Experience with version control systems (Git/GitHub)",
      "Knowledge of database management and API development",
      "Portfolio of coding projects and GitHub repositories"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based up to ₹5,000/month",
    duration: "6 months"
  }
];

const colorDots = [
  { color: "bg-red-500", delay: 0 },
  { color: "bg-blue-500", delay: 0.2 },
  { color: "bg-green-500", delay: 0.4 },
  { color: "bg-yellow-500", delay: 0.6 }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
    portfolioLinks: "",
    jobTitle: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }
    data.append("coverLetter", formData.coverLetter);
    data.append("portfolioLinks", formData.portfolioLinks);
    data.append("jobTitle", selectedJob?.title || "");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success("Application submitted successfully! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
          portfolioLinks: "",
          jobTitle: "",
        });
        setSelectedJob(null);
      } else {
        const errorData = await response.json();
        toast.error(`Submission failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Strategic Color Dot Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left cluster */}
        <div className="absolute top-20 left-10">
          {colorDots.map((dot, index) => (
            <motion.div
              key={`tl-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.8, delay: dot.delay }}
              className={`absolute w-3 h-3 ${dot.color} rounded-full`}
              style={{
                left: `${index * 8}px`,
                top: `${index * 6}px`
              }}
            />
          ))}
        </div>

        {/* Top right cluster */}
        <div className="absolute top-32 right-16">
          {colorDots.map((dot, index) => (
            <motion.div
              key={`tr-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, delay: dot.delay + 0.5 }}
              className={`absolute w-4 h-4 ${dot.color} rounded-full`}
              style={{
                right: `${index * 10}px`,
                top: `${index * 8}px`
              }}
            />
          ))}
        </div>

        {/* Bottom left cluster */}
        <div className="absolute bottom-32 left-20">
          {colorDots.map((dot, index) => (
            <motion.div
              key={`bl-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 0.8, delay: dot.delay + 1 }}
              className={`absolute w-2 h-2 ${dot.color} rounded-full`}
              style={{
                left: `${index * 6}px`,
                bottom: `${index * 4}px`
              }}
            />
          ))}
        </div>

        {/* Bottom right cluster */}
        <div className="absolute bottom-20 right-12">
          {colorDots.map((dot, index) => (
            <motion.div
              key={`br-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.8, delay: dot.delay + 1.5 }}
              className={`absolute w-5 h-5 ${dot.color} rounded-full animate-pulse`}
              style={{
                right: `${index * 12}px`,
                bottom: `${index * 10}px`
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/corporate.png"
              alt="Careers Cover"
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex justify-center mb-6 relative">
                <div className="p-6 bg-white rounded-full">
                  <Users className="w-16 h-16 text-black" />
                </div>
                {/* Colored dots around the icon */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -top-2 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
                JOIN OUR TEAM
              </h1>
              
              <div className="flex justify-center gap-3 my-8">
                {colorDots.map((dot, i) => (
                  <div key={i} className={`w-12 h-3 ${dot.color} rounded-full`}></div>
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Start your career journey with <span className="text-white font-bold">hands-on experience</span> and 
                learn from industry professionals in a <span className="text-white font-bold">dynamic environment</span>.
              </p>
              
              <div className="pt-8">
                <Button
                  onClick={() => document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black hover:bg-gray-200 font-black text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Briefcase className="w-6 h-6 mr-3" />
                  EXPLORE INTERNSHIPS
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-black">INTERNSHIP OPPORTUNITIES</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                6-month internship programs with performance-based stipends up to ₹5,000/month. 
                Gain real-world experience and build your professional portfolio.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white text-black rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 relative group border border-gray-200"
                >
                  {/* Colored dot indicator */}
                  <div className={`absolute top-6 right-6 w-4 h-4 rounded-full ${
                    colorDots[index % 4].color
                  } animate-pulse`}></div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-black">{job.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{job.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Star className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-xs">{job.stipend}</span>
                      </div>
                    </div>

                  <Link
                    href={`/careers/${job.id}`}
                    className="w-full bg-black text-white hover:bg-gray-800 font-bold py-4 rounded-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center"
                  >
                    VIEW DETAILS & APPLY
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white">
                READY TO START YOUR JOURNEY?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't see the perfect internship for you? We're always open to exceptional talent. 
                Reach out and tell us how you can contribute to our mission.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="my-4">
                    <Button className="bg-white text-black hover:bg-gray-200 font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105">
                <Mail className="w-6 h-6 mr-3" />
                GET IN TOUCH
              </Button>
    </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

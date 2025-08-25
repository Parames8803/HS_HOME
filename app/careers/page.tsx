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
    id: "b3f4b603-acea-4faa-8706-0eb1ca92fad7",
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
    id: "ccf683ac-2390-4041-b161-febf02b4c296",
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
    id: "929b7ce8-0450-4bac-902f-b62f0cf94646",
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
    id: "0b57cc99-59d2-42d6-b91c-39e037d137e8",
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
    id: "c3cb793c-de06-4b8c-96c6-22620f3ab56e",
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
  },
  {
  id: "a7d9e2f1-3b8c-4e5f-9a1d-6c7b8e9f0a2b",
  title: "UI/UX Designer Intern",
  description: "Join our design team and help create exceptional user experiences across digital platforms. You'll work on user interface design, user research, prototyping, and collaborate with developers to bring designs to life using modern design tools and methodologies.",
  requirements: [
    "Proficiency in design tools (Figma, Adobe XD, Sketch, or similar)",
    "Understanding of UI/UX design principles and user-centered design",
    "Knowledge of wireframing, prototyping, and user flow creation",
    "Basic understanding of HTML/CSS and responsive design principles",
    "Experience with design systems and component libraries",
    "Portfolio showcasing UI/UX projects and design process"
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
    <div className="min-h-screen bg-black text-white relative">
  <main className="relative z-10">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center py-32">
      <div className="absolute inset-0">
        <Image
          src="/corporate.png"
          alt="Careers Cover"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Join Our
            <span className="block text-gray-400 italic">Team</span>
          </motion.h1>
          
          <motion.div
            className="w-16 h-px bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Start your career journey with hands-on experience and learn from 
            industry professionals in a dynamic environment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black hover:bg-gray-200 font-light px-8 py-3 rounded-none transition-all duration-300"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Explore Opportunities
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Internships Section */}
    <section id="internships" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-light text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Internship
            <span className="block text-gray-400 italic">Programs</span>
          </motion.h2>
          
          <motion.div
            className="w-12 h-px bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            6-month programs with performance-based stipends up to ₹5,000/month. 
            Build your professional portfolio with real-world experience.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 p-8 h-full transition-all duration-300 flex flex-col"
              >
                <div className="flex-grow space-y-6">
                  <div>
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-justify justify-between">
                      <span className="text-gray-600 font-light">Duration:</span>
                      <span className="text-gray-400 font-light">{job.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-light">Location:</span>
                      <span className="text-gray-400 font-light">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-light">Type:</span>
                      <span className="text-gray-400 font-light">{job.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-light">Stipend:</span>
                      <span className="text-gray-400 font-light text-right">{job.stipend}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  <Link href={`/careers/${job.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="w-full bg-white text-black hover:bg-gray-200 py-3 text-center font-light transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-32 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-light text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Ready to Start Your
            <span className="block text-gray-400 italic">Journey?</span>
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
            Don't see the perfect opportunity? We're always open to exceptional talent. 
            Reach out and tell us how you can contribute to our mission.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button className="border border-gray-600 text-gray-400 hover:border-gray-400 hover:text-black px-8 py-3 rounded-none font-light bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Decorative Elements */}
    <motion.div
      className="absolute top-40 left-16"
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

    <motion.div
      className="absolute bottom-40 left-24"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="w-px h-3 bg-gray-700" />
    </motion.div>
  </main>

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
  );
}

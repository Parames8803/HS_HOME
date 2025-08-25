"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle,
  Star,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Link as LinkIcon,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

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


export default function ApplyPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const selectedJob = jobs.find((job) => job.id === jobId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
    additionalLinks: "",
    jobTitle: selectedJob?.title || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData((prev) => ({ ...prev, jobTitle: selectedJob.title }));
    }
  }, [selectedJob]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    data.append("additionalLinks", formData.additionalLinks);
    data.append("jobTitle", formData.jobTitle);

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
          additionalLinks: "",
          jobTitle: selectedJob?.title || "",
        });
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

  if (!selectedJob) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 max-w-md mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-6 border border-gray-700 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-white mb-4">
            Position Not Found
          </h1>
          <p className="text-gray-400 font-light mb-8">
            The position you are looking for does not exist.
          </p>
          <Link href="/careers">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-none font-light">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link
            href="/careers"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-light"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Opportunities
          </Link>
          
          <div className="text-center space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Apply for
              <span className="block text-gray-400 italic">{selectedJob.title}</span>
            </motion.h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedJob.duration}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {selectedJob.location}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                {selectedJob.stipend}
              </span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Job Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/20 border border-gray-800 p-8 sticky top-32">
              <h3 className="text-xl font-light text-white mb-6">
                Position Overview
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-light text-gray-400 mb-3 text-sm uppercase tracking-wider">
                    Description
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed text-sm">
                    {selectedJob.description}
                  </p>
                </div>
                
                <div>
                  <p className="font-light text-gray-400 mb-3 text-sm uppercase tracking-wider">
                    Key Requirements
                  </p>
                  <ul className="space-y-2">
                    {selectedJob.requirements.slice(0, 4).map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-400 font-light leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {selectedJob.requirements.length > 4 && (
                    <p className="text-xs text-gray-500 mt-3 font-light">
                      +{selectedJob.requirements.length - 4} more requirements
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900/20 border border-gray-800 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-white mb-2">
                  Application Form
                </h2>
                <p className="text-gray-400 font-light">
                  Tell us about yourself and why you're interested in this position.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-light text-white border-b border-gray-800 pb-3">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-light text-gray-400 tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-light text-gray-400 tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-light text-gray-400 tracking-wider">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-light text-gray-400 tracking-wider">
                        Resume (PDF) *
                      </Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white font-light rounded-none file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-light file:bg-gray-800 file:text-gray-300 hover:file:bg-gray-700"
                        required
                      />
                      {formData.resume && (
                        <p className="text-xs text-gray-400 flex items-center gap-2 mt-2">
                          <CheckCircle className="w-3 h-3 text-gray-500" />
                          {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-light text-white border-b border-gray-800 pb-3">
                    Additional Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="additionalLinks" className="text-sm font-light text-gray-400 tracking-wider">
                      Portfolio & Work Samples
                    </Label>
                    <Textarea
                      id="additionalLinks"
                      value={formData.additionalLinks}
                      onChange={handleInputChange}
                      className="min-h-[100px] border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 resize-none text-white placeholder-gray-500 font-light rounded-none"
                      placeholder="Share links to your portfolio, GitHub, YouTube, Behance, or any relevant work samples..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter" className="text-sm font-light text-gray-400 tracking-wider">
                      Cover Letter
                    </Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="min-h-[120px] border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 resize-none text-white placeholder-gray-500 font-light rounded-none"
                      placeholder="Tell us why you're the perfect fit for this internship. What motivates you? What unique value can you bring to our team?"
                      rows={5}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-800">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-white text-black hover:bg-gray-200 font-light rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </motion.div>
                  
                  <p className="text-xs text-gray-500 text-center mt-4 font-light">
                    By submitting this application, you agree to our terms and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 left-16"
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
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </div>
  );
}
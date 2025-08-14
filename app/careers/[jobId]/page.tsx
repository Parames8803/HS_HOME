"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20"> {/* Added pt-20 for navbar */}
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <Briefcase className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The position you are looking for does not exist.</p>
          <Link href="/careers">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black from-gray-50 to-gray-100 pt-20 pb-8 px-4"> {/* Added pt-20 for navbar */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/careers"
            className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Job Openings
          </Link>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Apply for {selectedJob.title}
                </h1>
                <p className="text-gray-600">
                  Join our team and help shape the future of technology
                </p>
                
                {/* Job meta info */}
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedJob.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {selectedJob.stipend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-28"> {/* Changed top-8 to top-28 */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Position Overview
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700 mb-2">Description</p>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700 mb-2">Key Requirements</p>
                  <ul className="space-y-1 text-gray-600">
                    {selectedJob.requirements.slice(0, 3).map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  {selectedJob.requirements.length > 3 && (
                    <p className="text-xs text-gray-500 mt-2">
                      +{selectedJob.requirements.length - 3} more requirements
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-red-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Application Form</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg text-gray-900 bg-white placeholder:text-gray-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg text-gray-900 bg-white placeholder:text-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg text-gray-900 bg-white placeholder:text-gray-400"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Resume (PDF) *
                      </Label>
                      <div className="relative">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg text-gray-900 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                          required
                        />
                      </div>
                      {formData.resume && (
                        <p className="text-xs text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Additional Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="additionalLinks" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      Portfolio & Work Samples
                    </Label>
                    <Textarea
                      id="additionalLinks"
                      value={formData.additionalLinks}
                      onChange={handleInputChange}
                      className="min-h-[100px] border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg resize-none text-gray-900 bg-white placeholder:text-gray-400"
                      placeholder="Share links to your portfolio, GitHub, YouTube, Behance, or any relevant work samples..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Cover Letter
                    </Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="min-h-[120px] border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-lg resize-none text-gray-900 bg-white placeholder:text-gray-400"
                      placeholder="Tell us why you're the perfect fit for this internship. What motivates you? What unique value can you bring to our team?"
                      rows={5}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    By submitting this application, you agree to our terms and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
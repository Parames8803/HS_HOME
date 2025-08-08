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
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-lg text-gray-700">The job you are looking for does not exist.</p>
          <Link href="/careers" passHref>
            <Button className="mt-8 border border-black bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-black relative overflow-hidden py-20">
      <main className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-100 rounded-3xl shadow-md border border-gray-300 p-8 md:p-12"
        >
          <Link
            href="/careers"
            className="flex items-center text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Job Openings
          </Link>

          <div className="pb-6 border-b border-gray-300 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-300 rounded-xl">
                <Briefcase className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black">{`Apply for ${selectedJob.title}`}</h1>
                <p className="text-gray-600 text-lg">
                  Join our team and help shape the future of technology.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Job Details */}
            <div className="bg-gray-200 rounded-2xl p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
                <CheckCircle className="w-5 h-5 text-black" />
                Position Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4 font-semibold">Description:</p>
                  <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <p className="mb-4 font-semibold">Key Requirements:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-300 text-gray-700">
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-sm">Duration</p>
                  <p className="font-semibold">{selectedJob.duration}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-sm">Location</p>
                  <p className="font-semibold">{selectedJob.location}</p>
                </div>
                <div className="text-center">
                  <Star className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-sm">Type</p>
                  <p className="font-semibold">{selectedJob.type}</p>
                </div>
                <div className="text-center">
                  <Briefcase className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-sm">Stipend</p>
                  <p className="font-semibold">{selectedJob.stipend}</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-black">
                  <Send className="w-5 h-5" />
                  Application Form
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border border-gray-400 text-white h-12 rounded-md focus:border-black focus:ring-0"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-gray-400 text-white h-12 rounded-md focus:border-black focus:ring-0"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      type="number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border border-gray-400 text-white h-12 rounded-md focus:border-black focus:ring-0"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-black font-semibold">Resume (PDF) *</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="border border-gray-400 text-white h-12 rounded-md focus:border-black focus:ring-0"
                        required
                      />
                      <Upload className="absolute right-3 top-3 w-6 h-6 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Label htmlFor="additionalLinks" className="text-black font-semibold flex items-center gap-2">
                    Additional Links (Portfolio / Work Samples)
                  </Label>
                  <Textarea
                    id="additionalLinks"
                    value={formData.additionalLinks}
                    onChange={handleInputChange}
                    className="border border-gray-400 text-white min-h-[80px] rounded-md focus:border-black focus:ring-0 resize-none placeholder:text-gray-500"
                    placeholder="Provide links to your portfolio, GitHub, YouTube, Behance, etc."
                    rows={3}
                  />
                </div>

                <div className="mt-6 space-y-2">
                  <Label htmlFor="coverLetter" className="text-black font-semibold">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="border border-gray-400 text-white min-h-[120px] rounded-md focus:border-black focus:ring-0 resize-none"
                    placeholder="Tell us why you're perfect for this internship..."
                    rows={5}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-black text-white font-bold rounded-md hover:bg-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

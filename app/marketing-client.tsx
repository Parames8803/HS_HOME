"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion"; // Re-add useScroll, useTransform
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  ShoppingCart,
  Search,
  MousePointer,
  Newspaper,
  Monitor,
  Mail,
  Network,
  Rocket,
  Calendar,
  Play,
  Award,
  Calculator,
  DollarSign,
  CheckCircle,
  Lightbulb,
  Sliders,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState, useRef } from "react";
import Image from "next/image"; // Re-add Image
import Link from "next/link"; // Re-add Link

const formSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [stats, setStats] = useState({
    roas: 0,
    leads: 0,
    conversion: 0,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState([5000]);
  const [timeline, setTimeline] = useState([3]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResults, setAuditResults] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [estimatedROI, setEstimatedROI] = useState(0);

  const serviceOptions = [
    {
      id: "seo",
      icon: Search,
      title: "SEO Optimization",
      description: "Boost organic visibility and drive high-intent traffic",
      basePrice: 1500,
      features: [
        "Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Backlink Building",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "ppc",
      icon: MousePointer,
      title: "PPC Advertising",
      description: "Instant traffic with optimized ad campaigns",
      basePrice: 2000,
      features: [
        "Google Ads",
        "Facebook & Instagram",
        "Amazon Sponsored",
        "ROI Optimization",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      id: "native",
      icon: Newspaper,
      title: "Native Advertising",
      description: "Non-disruptive ads that blend seamlessly",
      basePrice: 1800,
      features: [
        "Premium Platforms",
        "Seamless Integration",
        "High Conversion",
        "Brand Engagement",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      id: "display",
      icon: Monitor,
      title: "Display Advertising",
      description: "Visual campaigns across millions of websites",
      basePrice: 1200,
      features: [
        "Visual Campaigns",
        "Retargeting",
        "Brand Awareness",
        "Wide Reach",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Marketing",
      description: "Build relationships with targeted campaigns",
      basePrice: 800,
      features: [
        "Lead Nurturing",
        "Automation",
        "Personalization",
        "Analytics",
      ],
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: "listing",
      icon: ShoppingCart,
      title: "Listing Optimization",
      description: "Maximize marketplace visibility and sales",
      basePrice: 1000,
      features: [
        "Marketplace Optimization",
        "Keyword-Rich Titles",
        "High-Quality Visuals",
        "Conversion Focus",
      ],
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: "crm",
      icon: Users,
      title: "CRM Integration",
      description: "Streamline customer relationships and sales",
      basePrice: 2500,
      features: [
        "Lead Capture",
        "Customer Tracking",
        "Automation",
        "Sales Alignment",
      ],
      color: "from-teal-500 to-green-600",
    },
    {
      id: "tcm",
      icon: Network,
      title: "Through-Channel Marketing",
      description: "Empower partners with localized campaigns",
      basePrice: 3000,
      features: [
        "Partner Empowerment",
        "Localized Campaigns",
        "Brand Compliance",
        "Performance Dashboards",
      ],
      color: "from-red-500 to-pink-600",
    },
  ];

  const steps = ["Choose Services", "Set Budget & Timeline", "Get Instant Quote", "Start Project"]
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);
  };

  const calculateROI = () => {
    const totalInvestment = calculateTotalPrice();
    const multiplier = selectedServices.length * 0.5 + 2;
    return Math.round(totalInvestment * multiplier);
  };

  const runWebsiteAudit = async () => {
    if (!websiteUrl) return;
    setIsAuditing(true);

    // Simulate audit process
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setAuditResults({
      seoScore: Math.floor(Math.random() * 40) + 30,
      speedScore: Math.floor(Math.random() * 30) + 40,
      mobileScore: Math.floor(Math.random() * 35) + 45,
      securityScore: Math.floor(Math.random() * 25) + 60,
      issues: [
        "Missing meta descriptions on 15 pages",
        "Page load speed could be improved by 2.3s",
        "Mobile responsiveness issues detected",
        "SSL certificate needs renewal",
        "Missing alt tags on 23 images",
      ],
    });
    setIsAuditing(false);
  };

  useEffect(() => {
    if (selectedServices.length > 0) {
      setEstimatedROI(calculateROI());
    }
  }, [selectedServices, budget]);

  const builderSteps = [
    {
      title: "We analyze your business & craft high-converting ads",
      description:
        "Our team dives deep into your business, audience, and competitors to create ads that resonate and convert.",
    },
    {
      title: "We A/B test and optimize in real-time",
      description:
        "Continuous testing and optimization ensure your campaigns perform at their peak efficiency.",
    },
    {
      title: "We scale winning campaigns for massive ROI",
      description:
        "Once we identify winning strategies, we scale them strategically to maximize your return on investment.",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => {
      let roas = 0,
        leads = 0,
        conversion = 0;
      const interval = setInterval(() => {
        roas = Math.min(roas + 5, 350);
        leads = Math.min(leads + 4, 240);
        conversion = Math.min(conversion + 1, 85);
        setStats({ roas, leads, conversion });

        if (roas >= 350 && leads >= 240 && conversion >= 85) {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Meta Ads",
      icon: <Users className="h-10 w-10" />,
      description:
        "Lead Generation, Sales, Retargeting strategies that convert your audience into customers.",
    },
    {
      title: "Google Ads",
      icon: <Target className="h-10 w-10" />,
      description:
        "Search, Display, YouTube, and Shopping campaigns optimized for maximum ROI.",
    },
    {
      title: "Performance Tracking",
      icon: <BarChart3 className="h-10 w-10" />,
      description:
        "Advanced analytics and conversion optimization to ensure every dollar counts.",
    },
    {
      title: "Scaling Strategies",
      icon: <TrendingUp className="h-10 w-10" />,
      description:
        "Data-driven approaches to scale winning campaigns for massive returns.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "/avatar.jpg?height=80&width=80",
      quote:
        "The team delivered a 350% ROAS on our campaigns. They're truly performance-focused and data-driven.",
    },
    {
      name: "Michael Chen",
      company: "Retail Solutions",
      quote:
        "Our lead generation increased by 240% within just 3 months of working with this amazing team.",
      image: "/avatar.jpg?height=80&width=80",
    },
    {
      name: "Emma Williams",
      company: "SaaS Platform",
      quote:
        "They transformed our Google Ads strategy, resulting in an 85% increase in conversion rate.",
      image: "/avatar.jpg?height=80&width=80",
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "919500656339"; // Use full international format without '+'
    const message = values.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {/* Hero Section */}
<section
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
>
  <motion.div
    style={{ opacity, scale }}
    className="container px-4 md:px-6 z-10"
  >
    <div className="flex flex-col items-center text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-light tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Data-Driven Performance
          <span className="block text-gray-400 italic">Marketing</span>
        </motion.h1>
        
        <motion.div
          className="w-16 h-px bg-white mx-auto"
          initial={{ width: 0 }}
          animate={{ width: isLoaded ? 64 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We scale brands with powerful Meta & Google Ads, optimized for maximum ROI.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-light px-8 py-3 rounded-none transition-all duration-300 group"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white font-light px-8 py-3 rounded-none bg-transparent transition-all duration-300 group"
          >
            Explore Strategy
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>

  {/* Minimal Background Elements */}
  <motion.div
    className="absolute top-1/4 left-16"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    <div className="w-1 h-1 bg-gray-700 rounded-full" />
  </motion.div>

  <motion.div
    className="absolute top-1/2 right-20"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
    transition={{ duration: 0.8, delay: 1.4 }}
  >
    <div className="w-2 h-px bg-gray-700" />
  </motion.div>

  <motion.div
    className="absolute bottom-1/4 left-1/3"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
    transition={{ duration: 0.8, delay: 1.6 }}
  >
    <div className="w-px h-3 bg-gray-700" />
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
</section>

     {/* Interactive Ad Previews */}
<section className="py-32 bg-black">
  <div className="container px-4 md:px-6">
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
        Powerful Ads That
        <span className="block text-gray-400 italic">Drive Results</span>
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
        We create high-converting campaigns across Meta and Google platforms.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="group"
      >
        <motion.div
          className="bg-gray-900/20 border border-gray-800 p-8 group-hover:border-gray-600 transition-all duration-300"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Platform Header */}
          <div className="flex items-center justify-center mb-8 h-16">
            <div className="relative">
              <Image
                src="/meta.png"
                alt="Meta"
                width={120}
                height={40}
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Ad Preview Container */}
          <div className="relative">
            <motion.div
              className="bg-black/50 border border-gray-700 p-4 aspect-[4/3] relative overflow-hidden group-hover:border-gray-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Image
                src="/meta_ads.jpeg"
                alt="Meta Ad Preview"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            </motion.div>
            
            {/* Platform Label */}
            <div className="absolute -bottom-4 left-4 bg-black border border-gray-700 px-3 py-1">
              <span className="text-xs text-gray-400 font-light tracking-wider uppercase">
                Meta Ads
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mt-8 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
            <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
              Targeted social media campaigns that reach your ideal customers across Facebook and Instagram.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="group"
      >
        <motion.div
          className="bg-gray-900/20 border border-gray-800 p-8 group-hover:border-gray-600 transition-all duration-300"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Platform Header */}
          <div className="flex items-center justify-center mb-8 h-16">
            <div className="relative">
              <Image
                src="/google.png"
                alt="Google"
                width={120}
                height={40}
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Ad Preview Container */}
          <div className="relative">
            <motion.div
              className="bg-black/50 border border-gray-700 p-4 aspect-[4/3] relative overflow-hidden group-hover:border-gray-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Image
                src="/googleads.jpeg"
                alt="Google Ad Preview"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            </motion.div>
            
            {/* Platform Label */}
            <div className="absolute -bottom-4 left-4 bg-black border border-gray-700 px-3 py-1">
              <span className="text-xs text-gray-400 font-light tracking-wider uppercase">
                Google Ads
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mt-8 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
            <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
              Search and display campaigns that capture high-intent customers when they're ready to buy.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Platform Stats */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 pt-16 border-t border-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      {[
        { number: "300%", label: "Average ROAS" },
        { number: "50+", label: "Campaigns Managed" },
        { number: "2.5M+", label: "Ad Spend Optimized" },
        { number: "95%", label: "Client Retention" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
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
  </div>

  {/* Decorative Elements */}
  <motion.div
    className="absolute top-40 right-16"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.6 }}
  >
    <div className="w-1 h-1 bg-gray-700 rounded-full" />
  </motion.div>

  <motion.div
    className="absolute bottom-40 left-20"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.8 }}
  >
    <div className="w-2 h-px bg-gray-700" />
  </motion.div>
</section>

      {/* How We Scale Brands */}
<section id="scale-brands" className="py-32 bg-black">
  <div className="container px-4 md:px-6">
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
        How We Scale
        <span className="block text-gray-400 italic">Brands</span>
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
        Our proven methodology delivers consistent results across all campaigns.
      </motion.p>
    </motion.div>

    <div className="space-y-20 max-w-5xl mx-auto">
      {builderSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="group"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Step Number */}
            <div className="lg:col-span-2">
              <motion.div
                className="w-16 h-16 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </motion.div>
            </div>

            {/* Step Content */}
            <div className="lg:col-span-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Special Content for Step 2 (Analytics) */}
              {index === 1 && (
                <motion.div
                  className="bg-gray-900/20 border border-gray-800 p-8 group-hover:border-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="h-32 relative">
                    <div className="absolute inset-0 flex items-end justify-between">
                      {[...Array(8)].map((_, i) => {
                        const height = 20 + Math.sin(i * 0.8) * 15 + i * 3;
                        return (
                          <motion.div
                            key={i}
                            className="bg-gray-600 group-hover:bg-gray-500 transition-colors duration-300"
                            style={{
                              height: `${height}%`,
                              width: '8px',
                            }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                        );
                      })}
                    </div>
                    <div className="absolute top-4 right-4 text-xs text-gray-400 font-light">
                      +127% Performance Growth
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-4 font-light">
                    <span>Campaign Launch</span>
                    <span>After Optimization</span>
                  </div>
                </motion.div>
              )}

              {/* Special Content for Step 3 (Scale) */}
              {index === 2 && (
                <motion.div
                  className="flex flex-col md:flex-row items-start md:items-center gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white">
                    10x ROI
                  </div>
                  <div className="w-px h-12 bg-gray-700 hidden md:block" />
                  <div className="text-gray-400 font-light leading-relaxed">
                    Average return our clients achieve when we scale winning campaigns across platforms
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Step Separator */}
          {index < builderSteps.length - 1 && (
            <motion.div
              className="w-px h-16 bg-gray-800 mx-8 mt-12 group-hover:bg-gray-700 transition-colors duration-300"
              initial={{ height: 0 }}
              whileInView={{ height: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          )}
        </motion.div>
      ))}
    </div>

    {/* Process Summary */}
    <motion.div
      className="mt-32 pt-16 border-t border-gray-800 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-light text-white mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        Proven Results
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[
          { metric: "300%", label: "Average ROAS Improvement" },
          { metric: "60%", label: "Reduction in Cost Per Acquisition" },
          { metric: "150%", label: "Increase in Qualified Leads" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <div className="text-2xl md:text-3xl font-light text-white">
              {stat.metric}
            </div>
            <div className="text-sm text-gray-500 font-light">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Decorative Elements */}
  <motion.div
    className="absolute top-1/3 left-16"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.4 }}
  >
    <div className="w-1 h-1 bg-gray-700 rounded-full" />
  </motion.div>

  <motion.div
    className="absolute bottom-1/3 right-20"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.6 }}
  >
    <div className="w-2 h-px bg-gray-700" />
  </motion.div>
</section>


{/* Interactive Service Builder */}
<section className="relative py-32 bg-black">
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
        Custom Marketing
        <span className="block text-gray-400 italic">Strategy</span>
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
        Select services, set your budget, and get instant pricing. Launch your campaign in minutes.
      </motion.p>
    </motion.div>

    {/* Progress Steps */}
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              className={`w-12 h-12 border flex items-center justify-center text-sm font-light ${
                index <= currentStep 
                  ? "border-white bg-white text-black" 
                  : "border-gray-700 text-gray-500"
              } transition-all duration-300`}
              whileHover={{ scale: index <= currentStep ? 1.05 : 1 }}
            >
              {index + 1}
            </motion.div>
            <div className="ml-3 text-sm text-gray-400 hidden md:block font-light">
              {step}
            </div>
            {index < steps.length - 1 && (
              <motion.div 
                className={`w-8 md:w-16 h-px mx-4 ${
                  index < currentStep ? "bg-white" : "bg-gray-800"
                } transition-all duration-300`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index < currentStep ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>

    <Tabs value={`step-${currentStep}`} className="max-w-6xl mx-auto">
      {/* Step 1: Service Selection */}
      <TabsContent value="step-0" className="space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOptions.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleService(service.id)}
              className="cursor-pointer group"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card
                className={`h-full transition-all duration-300 ${
                  selectedServices.includes(service.id)
                    ? "bg-white text-black border-white"
                    : "bg-gray-900/20 border-gray-800 text-white hover:border-gray-600"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      className={`w-12 h-12 border flex items-center justify-center ${
                        selectedServices.includes(service.id)
                          ? "border-black bg-black text-white"
                          : "border-gray-700 text-gray-400 group-hover:border-gray-500"
                      } transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <service.icon className="w-5 h-5" />
                    </motion.div>
                    <Badge
                      variant="outline"
                      className={`${
                        selectedServices.includes(service.id)
                          ? "border-gray-300 text-gray-600 bg-gray-100"
                          : "border-gray-700 text-gray-400 bg-transparent"
                      } font-light`}
                    >
                      ${service.basePrice}/mo
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-light">
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className={`font-light leading-relaxed ${
                      selectedServices.includes(service.id)
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Card className="bg-gray-900/20 border-gray-800 max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-3xl font-light text-white mb-2">
                  ${calculateTotalPrice().toLocaleString()}/month
                </div>
                <div className="text-gray-400 font-light mb-6">
                  {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    onClick={() => {
                      const sum = selectedServices.reduce((total, serviceId) => {
                        const service = serviceOptions.find((s) => s.id === serviceId);
                        return total + (service?.basePrice || 0);
                      }, 0);
                      setBudget([sum]);
                      setCurrentStep(1);
                    }}
                    className="w-full bg-white text-black hover:bg-gray-200 font-light rounded-none"
                    disabled={selectedServices.length === 0}
                  >
                    Continue to Budget
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </TabsContent>

      {/* Step 2: Budget & Timeline */}
      <TabsContent value="step-1" className="space-y-12">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/20 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 font-light text-xl">
                <DollarSign className="w-5 h-5" />
                Set Your Budget
              </CardTitle>
              <CardDescription className="text-gray-400 font-light">
                Adjust your monthly marketing budget
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 font-light">Monthly Budget</span>
                  <span className="text-3xl font-light text-white">
                    ${budget[0].toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  max={50000}
                  min={1000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-3 font-light">
                  <span>$1,000</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 font-light">Timeline to Results</span>
                  <span className="text-3xl font-light text-white">
                    {timeline[0]} month{timeline[0] > 1 ? "s" : ""}
                  </span>
                </div>
                <Slider
                  value={timeline}
                  onValueChange={setTimeline}
                  max={12}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-3 font-light">
                  <span>1 month</span>
                  <span>12+ months</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => setCurrentStep(0)}
                variant="outline"
                className="w-full bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white font-light rounded-none"
              >
                Back to Services
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-white text-black hover:bg-gray-200 font-light rounded-none"
                disabled={budget[0] <= 0 || timeline[0] <= 0}
              >
                Get Quote
                <Calculator className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </TabsContent>

      {/* Step 3: Instant Quote */}
      <TabsContent value="step-2" className="space-y-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/20 border-gray-800">
            <CardHeader className="text-center pb-8">
              <motion.div
                className="w-16 h-16 border border-gray-700 flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-8 h-8 text-gray-400" />
              </motion.div>
              <CardTitle className="text-3xl text-white font-light mb-2">
                Your Custom Strategy
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg font-light">
                Ready to launch in 60 seconds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-white mb-6">
                    Selected Services
                  </h3>
                  {selectedServices.map((serviceId) => {
                    const service = serviceOptions.find((s) => s.id === serviceId);
                    return (
                      <div
                        key={serviceId}
                        className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800"
                      >
                        <div className="flex items-center gap-4">
                          {service?.icon && (
                            <service.icon className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="text-white font-light">
                            {service?.title}
                          </span>
                        </div>
                        <span className="text-gray-400 font-light">
                          ${service?.basePrice}/mo
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-gray-900/40 border border-gray-800">
                    <h3 className="text-xl font-light text-white mb-6">
                      Investment Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-light">Monthly Investment</span>
                        <span className="text-white font-light">
                          ${budget[0].toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-light">Setup Fee</span>
                        <span className="text-white font-light">$5000</span>
                      </div>
                      <div className="border-t border-gray-800 pt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-light">
                            Estimated ROI ({timeline[0]} month{timeline[0] > 1 ? "s" : ""})
                          </span>
                          <span className="text-white font-light text-xl">
                            ${estimatedROI.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Button
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        className="w-full bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white font-light rounded-none"
                      >
                        Back to Budget
                      </Button>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Button
                        onClick={() => setCurrentStep(3)}
                        className="w-full bg-white text-black hover:bg-gray-200 font-light py-6 text-lg rounded-none"
                        disabled={selectedServices.length === 0 || budget[0] <= 0 || timeline[0] <= 0}
                      >
                        <Rocket className="w-5 h-5 mr-2" />
                        Launch My Campaign Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Step 4: Launch */}
      <TabsContent value="step-3" className="space-y-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div
              className="w-24 h-24 border border-gray-700 flex items-center justify-center mx-auto mb-8"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-12 h-12 text-gray-400" />
            </motion.div>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready for Launch!
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Your marketing strategy is configured. Start your campaign with one click.
            </p>
          </motion.div>

          <Card className="bg-gray-900/20 border-gray-800 mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-light text-white mb-2">24hrs</div>
                  <div className="text-sm text-gray-500 font-light">Campaign Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-2">7 days</div>
                  <div className="text-sm text-gray-500 font-light">First Results</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white mb-2">30 days</div>
                  <div className="text-sm text-gray-500 font-light">Full Optimization</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                onClick={() => setCurrentStep(2)}
                variant="outline"
                className="w-full bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white font-light rounded-none"
              >
                Back to Quote
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                className="w-full bg-white text-black hover:bg-gray-200 font-light py-6 text-lg rounded-none"
                onClick={() => {
                  const phoneNumber = "919500656339";
                  const selectedServiceTitles = selectedServices.map(id => {
                    const s = serviceOptions.find(opt => opt.id === id);
                    return s ? `• ${s.title}` : null;
                  }).filter(Boolean).join("\n");
                  const budgetStr = `$${budget[0].toLocaleString()}`;
                  const timelineStr = `${timeline[0]} month${timeline[0] > 1 ? "s" : ""}`;
                  const summary = `Hello, I'm interested in launching a marketing campaign.\n\nSelected Services:\n${selectedServiceTitles}\n\nBudget: ${budgetStr}\nTimeline: ${timelineStr}\n\nPlease provide more information.`;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(summary)}`;
                  window.open(url, "_blank");
                }}
              >
                <Play className="w-5 h-5 mr-2" />
                Launch My Campaign Now
              </Button>
            </motion.div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>

  {/* Decorative Elements */}
  <motion.div
    className="absolute top-1/4 left-16"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    <div className="w-1 h-1 bg-gray-700 rounded-full" />
  </motion.div>

  <motion.div
    className="absolute bottom-1/4 right-20"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    <div className="w-2 h-px bg-gray-700" />
  </motion.div>
</section>
{/* Success Stories */}
<section className="py-32 bg-black">
  <div className="container px-4 md:px-6">
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
        Success
        <span className="block text-gray-400 italic">Stories</span>
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
        Real results from our clients across different industries.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => {
        const statValues = [stats.roas, stats.leads, stats.conversion];
        const statLabels = ["increase in ROAS", "more leads generated", "conversion rate increase"];
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <motion.div
              className="bg-gray-900/20 border border-gray-800 p-8 h-full group-hover:border-gray-600 transition-all duration-300 flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Client Info */}
              <div className="flex items-center mb-8">
                <div className="relative mr-4">
                  <motion.div
                    className="w-16 h-16 overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-light text-lg text-white group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-grow mb-8">
                <p className="text-gray-300 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Metric */}
              <div className="pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl md:text-4xl font-light text-white">
                    {statValues[index]}%
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {statLabels[index]}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>

    {/* Overall Stats Summary */}
    <motion.div
      className="mt-32 pt-16 border-t border-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-light text-white text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        Proven Track Record
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {[
          { metric: "95%", label: "Client Satisfaction" },
          { metric: "300%", label: "Average ROAS" },
          { metric: "50+", label: "Successful Campaigns" },
          { metric: "2.5M+", label: "Ad Spend Managed" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <div className="text-2xl md:text-3xl font-light text-white">
              {stat.metric}
            </div>
            <div className="text-sm text-gray-500 font-light">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <motion.p
        className="text-lg text-gray-400 font-light mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        Ready to become our next success story?
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Button
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light"
          onClick={() => {
            const phoneNumber = "919500656339";
            const message = "Hello, I saw your success stories and I'm interested in discussing how you can help grow my business. Can we schedule a consultation?";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
        >
          Start Your Success Story
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </motion.div>
  </div>

  {/* Decorative Elements */}
  <motion.div
    className="absolute top-1/3 left-16"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 1.8 }}
  >
    <div className="w-1 h-1 bg-gray-700 rounded-full" />
  </motion.div>

  <motion.div
    className="absolute bottom-1/3 right-20"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 2 }}
  >
    <div className="w-2 h-px bg-gray-700" />
  </motion.div>
</section>
    </>
  );
}

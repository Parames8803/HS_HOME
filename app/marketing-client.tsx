"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Zap,
  X,
  Menu,
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

const formSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "919500656339"; // Use full international format without '+'
    const message = values.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <Image
              src="/hynox_logo.jpg"
              alt="HYNOX Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            HYNOX
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="flex items-center gap-8">
              <button className="text-white hover:text-gray-300 transition-colors">
                <Link href="/">Home</Link>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors">
                <Link href="/#products">Products</Link>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors">
                <Link href="/#services">Services</Link>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors">
                <Link href="/about">About Us</Link>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-white/10 md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { name: "Home", action: () => window.open("/") },
                {
                  name: "Products",
                  action: () => window.open("/#products"),
                },
                {
                  name: "Services",
                  action: () => window.open("/#services"),
                },
                { name: "About Us", action: () => window.open("/about") }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`capitalize py-2 ${
                    activeSection === item.name
                      ? "text-white border-l-2 pl-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity, scale }}
          className="container px-4 md:px-6 z-10"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Data-Driven Performance Marketing That Converts.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                We scale brands with powerful Meta & Google Ads, optimized for
                maximum ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-md group"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-md group"
                onClick={() => scrollToSection("scale-brands")}
              >
                Explore Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>

      {/* Interactive Ad Previews */}
      <section className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Ads That Drive Results
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We create high-converting campaigns across Meta and Google
              platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <div className="flex items-center mb-6 justify-center h-12">
                  <Image
                    src="/meta.png"
                    alt="Meta Logo"
                    width={120}
                    height={40}
                    className="object-contain h-full"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 aspect-[4/3] relative group">
                  <Image
                    src="/meta_ads.jpeg"
                    alt="Meta Ad Preview"
                    fill
                    className="rounded-md object-cover transition-all duration-300 group-hover:opacity-50"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                <div className="flex items-center mb-6 justify-center h-12">
                  <Image
                    src="/google.png"
                    alt="Google Logo"
                    width={120}
                    height={40}
                    className="object-contain h-full"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 aspect-[4/3] relative group">
                  <Image
                    src="/googleads.jpeg"
                    alt="Google Ad Preview"
                    fill
                    className="rounded-md object-cover transition-all duration-300 group-hover:opacity-50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Scale Brands */}
      <section id="scale-brands" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Scale Brands
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven methodology delivers consistent results.
            </p>
          </motion.div>

          <div className="space-y-16">
            {builderSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-7xl font-bold text-gray-800">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 max-w-2xl">{step.description}</p>

                  {index === 1 && (
                    <div className="mt-6 bg-gray-900 p-4 rounded-lg">
                      <div className="h-32 relative">
                        <div className="absolute inset-0 flex items-end">
                          {[...Array(12)].map((_, i) => {
                            const height =
                              20 + Math.sin(i * 0.8) * 10 + i * 2.5;
                            return (
                              <div
                                key={i}
                                className="w-1/12 bg-gradient-to-t from-blue-500 to-purple-500 mx-0.5 rounded-t-sm"
                                style={{
                                  height: `${height}%`,
                                  opacity: i > 8 ? 0.9 : 0.7,
                                }}
                              ></div>
                            );
                          })}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 border-dashed"></div>
                        <div className="absolute top-0 right-4 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                          +127%
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Campaign Start</span>
                        <span>After Optimization</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="mt-6 flex items-center">
                      <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
                        10x ROI
                      </div>
                      <div className="ml-4 text-gray-400">
                        Average return our clients see when we scale winning
                        campaigns
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Builder */}
      <section className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        </motion.div>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 text-white border-white/20"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Build Your Strategy
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Create Your Custom Marketing Mix
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select services, set your budget, and get instant pricing. Launch
              your campaign in minutes.
            </p>
          </AnimatedSection>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      index <= currentStep ? "bg-white text-black" : "bg-white/10 text-gray-400 border border-white/20"
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="ml-2 text-sm text-gray-300 hidden md:block">{step}</div>
                  {index < builderSteps.length - 1 && <div className="w-8 md:w-16 h-0.5 bg-white/20 mx-4" />}
                </div>
              ))}
            </div>
          </div>

          <Tabs value={`step-${currentStep}`} className="max-w-6xl mx-auto">
            {/* Step 1: Service Selection */}
            <TabsContent value="step-0" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceOptions.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleService(service.id)}
                    className="cursor-pointer"
                  >
                    <Card
                      className={`h-full transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? "bg-white text-black border-white shadow-2xl"
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <motion.div
                            className={`p-2 rounded-lg ${
                              selectedServices.includes(service.id)
                                ? "bg-black text-white"
                                : "bg-gradient-to-r " +
                                  service.color +
                                  " text-white"
                            }`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <service.icon className="w-5 h-5" />
                          </motion.div>
                          <Badge
                            variant={
                              selectedServices.includes(service.id)
                                ? "default"
                                : "secondary"
                            }
                            className={
                              selectedServices.includes(service.id)
                                ? "bg-black text-white"
                                : "bg-white/10 text-white border-white/20"
                            }
                          >
                            ${service.basePrice}/mo
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                        <CardDescription
                          className={
                            selectedServices.includes(service.id)
                              ? "text-gray-600"
                              : "text-gray-300"
                          }
                        >
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
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
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm max-w-md mx-auto">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-white mb-2">
                        ${calculateTotalPrice().toLocaleString()}/month
                      </div>
                      <div className="text-gray-300 mb-4">
                        {selectedServices.length} service
                        {selectedServices.length > 1 ? "s" : ""} selected
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => {
                            // Set budget to sum of selected services' base prices when moving from Step 1 to Step 2
                            const sum = selectedServices.reduce((total, serviceId) => {
                              const service = serviceOptions.find((s) => s.id === serviceId);
                              return total + (service?.basePrice || 0);
                            }, 0);
                            setBudget([sum]);
                            setCurrentStep(1);
                          }}
                          className="w-full bg-white text-black hover:bg-gray-200"
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
            <TabsContent value="step-1" className="space-y-8">
              <div className="max-w-2xl mx-auto space-y-8">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Set Your Budget
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Adjust your monthly marketing budget
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300">Monthly Budget</span>
                        <span className="text-2xl font-bold text-white">
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
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>$1,000</span>
                        <span>$50,000+</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300">
                          Timeline to Results
                        </span>
                        <span className="text-2xl font-bold text-white">
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
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>1 month</span>
                        <span>12+ months</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      onClick={() => setCurrentStep(0)}
                      variant="outline"
                      className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      Back to Services
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-white text-black hover:bg-gray-200"
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
            <TabsContent value="step-2" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Award className="w-8 h-8 text-black" />
                    </motion.div>
                    <CardTitle className="text-3xl text-white mb-2">
                      Your Custom Strategy
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Ready to launch in 60 seconds
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">
                          Selected Services
                        </h3>
                        {selectedServices.map((serviceId) => {
                          const service = serviceOptions.find(
                            (s) => s.id === serviceId
                          );
                          return (
                            <div
                              key={serviceId}
                              className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                {service?.icon && (
                                  <service.icon className="w-5 h-5 text-white" />
                                )}
                                <span className="text-white">
                                  {service?.title}
                                </span>
                              </div>
                              <span className="text-gray-300">
                                ${service?.basePrice}/mo
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-white/10 rounded-lg">
                          <h3 className="text-xl font-bold text-white mb-4">
                            Investment Summary
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-300">
                                Monthly Investment
                              </span>
                              <span className="text-white font-bold">
                                ${budget[0].toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Setup Fee</span>
                              <span className="text-white font-bold">$0</span>
                            </div>
                            <div className="border-t border-white/20 pt-3">
                              <div className="flex justify-between">
                                <span className="text-gray-300">
                                  Estimated ROI ({timeline[0]} month{timeline[0] > 1 ? "s" : ""})
                                </span>
                                <span className="text-green-400 font-bold text-xl">
                                  ${estimatedROI.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <Button
                              onClick={() => setCurrentStep(1)}
                              variant="outline"
                              className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                            >
                              Back to Budget
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.02 }}>
                            <Button
                              onClick={() => setCurrentStep(3)}
                              className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white text-lg py-6"
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
            <TabsContent value="step-3" className="space-y-8">
              <div className="max-w-2xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Rocket className="w-16 h-16 text-black" />
                    </motion.div>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Ready for Launch!
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Your marketing strategy is configured. Start your campaign
                    with one click.
                  </p>
                </motion.div>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          24hrs
                        </div>
                        <div className="text-sm text-gray-400">
                          Campaign Setup
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          7 days
                        </div>
                        <div className="text-sm text-gray-400">
                          First Results
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          30 days
                        </div>
                        <div className="text-sm text-gray-400">
                          Full Optimization
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Only one button in Step 4 */}
                <div className="flex flex-col gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setCurrentStep(2)}
                      variant="outline"
                      className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      Back to Quote
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6"
                      onClick={() => {
                        // Collect all data and send to WhatsApp
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
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={testimonials[0].image || "/placeholder.svg"}
                    alt={testimonials[0].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[0].name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonials[0].company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[0].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {stats.roas}%
                </div>
                <div className="ml-2 text-sm text-gray-400">
                  increase in ROAS
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonials[1].image || "/placeholder.svg"}
                    alt={testimonials[1].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[1].name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonials[1].company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[1].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  {stats.leads}%
                </div>
                <div className="ml-2 text-sm text-gray-400">
                  more leads generated
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonials[2].image || "/placeholder.svg"}
                    alt={testimonials[2].name}
                    width={80}
                    height={80}
                    className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[2].name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonials[2].company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{testimonials[2].quote}</p>
              <div className="mt-6 flex items-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                  {stats.conversion}%
                </div>
                <div className="ml-2 text-sm text-gray-400">
                  conversion rate increase
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Let's Scale Your Brand Today
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Book a free strategy call and discover how our data-driven
                approach can transform your marketing results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            {...field}
                            className="bg-gray-800 border-gray-700 focus:border-white transition-colors min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg py-6 rounded-md group"
                  >
                    Chat with us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-white" />
                <span className="ml-2 text-xl font-bold">Hynox</span>
              </div>
              <p className="text-gray-400">
                Delivers cutting-edge IT solutions and efficient manufacturing
                services. <br />
                We connect technology and industry to drive innovation and
                growth.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/hynox/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                <Link
                  href="https://www.instagram.com/hynox.z?igsh=aWdjZzd3OGo1NjY4&utm_source=qr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
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
                  <Link
                    href="/drop"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dropshipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">hello.hynox@gamil.com</li>
                <li className="text-gray-400">+91 9500656339</li>
                <li className="text-gray-400">
                  Jeeva St,Pandiyan Nagar,Tirupur-641 602
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 The Black Crest. All rights reserved.
              <div className="flex gap-4 mt-2">
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

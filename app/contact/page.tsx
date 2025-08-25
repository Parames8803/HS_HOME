"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phone: z.string().min(10, { message: "Phone number is required and must be at least 10 digits." }).max(15, { message: "Phone number cannot exceed 15 digits." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  interest: z.string().min(1, { message: "Please select a service or product." }),
  message: z.string().min(1, { message: "Message is required." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      subject: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "thehynoxofficial@gmail.com",
      href: "mailto:thehynoxofficial@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8870524355",
      href: "https://wa.me/918870524355",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tirupur, Tamil Nadu",
      href: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      href: null,
    }
  ];

  const interests = [
    "Web Application",
    "Mobile Application",
    "Custom Software",
    "Shopify Development",
    "Performance Marketing",
    "CRM System",
    "ERP Solution",
    "Subscription Services",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get in
            <span className="block text-gray-400 italic">Touch</span>
          </motion.h1>
          
          <motion.div
            className="w-12 h-px bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to transform your business? Let's create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/20 border border-gray-800 p-8 relative">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-400 font-light">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-light text-gray-400 tracking-wider">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your name" 
                      className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                      {...form.register("name")} 
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-sm font-light">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-light text-gray-400 tracking-wider">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="Enter your phone number" 
                      type="tel"
                      className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                      {...form.register("phone")} 
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-400 text-sm font-light">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-400 tracking-wider">
                    Subject *
                  </label>
                  <Input 
                    placeholder="What's this about?" 
                    className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-500 font-light rounded-none"
                    {...form.register("subject")} 
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-400 text-sm font-light">{form.formState.errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-400 tracking-wider">
                    Service of Interest *
                  </label>
                  <Select onValueChange={(value) => form.setValue("interest", value)} value={form.watch("interest")}>
                    <SelectTrigger className="h-12 border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 text-white rounded-none">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-gray-700 text-white">
                      {interests.map((item) => (
                        <SelectItem key={item} value={item} className="hover:bg-gray-800">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.interest && (
                    <p className="text-red-400 text-sm font-light">{form.formState.errors.interest.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-400 tracking-wider">
                    Message *
                  </label>
                  <Textarea 
                    className="min-h-[120px] border border-gray-700 bg-black/50 focus:border-gray-500 transition-all duration-300 resize-none text-white placeholder-gray-500 font-light rounded-none" 
                    placeholder="Tell us about your project..."
                    {...form.register("message")} 
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-sm font-light">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-white text-black hover:bg-gray-200 font-light rounded-none transition-all duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 p-6 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border border-gray-700 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-light text-lg text-white mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <Link 
                            href={item.href}
                            className="text-gray-400 hover:text-gray-300 transition-colors font-light"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </Link>
                        ) : (
                          <p className="text-gray-400 font-light">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-gray-900/20 border border-gray-800 p-8"
            >
              <h3 className="text-xl font-light text-white mb-6">
                Why Choose HYNOX?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert consultation and planning",
                  "Custom solutions for your needs", 
                  "Transparent pricing and timeline",
                  "24-hour response guarantee"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    <span className="font-light text-gray-400">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Urgent Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="bg-white text-black p-8"
            >
              <h3 className="text-xl font-light mb-4">Urgent Project?</h3>
              <p className="text-gray-600 mb-6 font-light">
                Need immediate assistance? Contact us directly.
              </p>
              <Link
                href="https://wa.me/918870524355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="inline-flex items-center gap-3 bg-black text-white hover:bg-gray-800 px-6 py-3 transition-all duration-300 font-light"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 left-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
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
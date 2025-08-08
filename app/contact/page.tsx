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
  Clock,
  CheckCircle,
  Zap
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
      dotColor: "bg-red-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8870524355",
      href: "https://wa.me/918870524355",
      dotColor: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      href: null,
      dotColor: "bg-green-500"
    }
  ];

  const colorDots = [
    { color: "bg-red-500", delay: 0 },
    { color: "bg-blue-500", delay: 0.2 },
    { color: "bg-green-500", delay: 0.4 },
    { color: "bg-yellow-500", delay: 0.6 }
  ];

  const interests = [
    "Web Application",
    "Mobile Application",
    "Custom Software",
    "Shopify",
    "Performance Marketing",
    "CRM System",
    "ERP Solution",
    "Subscription based Clothing",
    "Subscription based Cosmetics",
    "Subscription based Agri Products",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Color Dots */}
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

      {/* Hero Section */}
      <div className="container px-4 md:px-6 py-12 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="flex justify-center mb-6 relative">
            <div className="p-4 bg-white rounded-full">
              <MessageCircle className="w-12 h-12 text-black" />
            </div>
            {/* Colored dots around the icon */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            GET IN TOUCH
          </h1>
          
          <div className="flex justify-center gap-2 my-6">
            <div className="w-8 h-2 bg-red-500 rounded-full"></div>
            <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-2 bg-green-500 rounded-full"></div>
            <div className="w-8 h-2 bg-yellow-500 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's create something extraordinary together.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray text-black rounded-3xl p-8 shadow-2xl border border-gray-200 relative">
              {/* Decorative dots on form */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-black text-white mb-2">
                  DROP US A LINE
                </h2>
                <p className="text-gray-700 text-lg">
                  Fill out the form and we'll get back to you in 24 hours!
                </p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wider">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your name" 
                      className="h-14 border-2 border-gray-300 rounded-xl focus:border-black transition-all duration-300 text-white placeholder-gray-500 font-medium"
                      {...form.register("name")} 
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm font-semibold">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="Enter your phone number" 
                      type="tel"
                      className="h-14 border-2 border-gray-300 rounded-xl focus:border-black transition-all duration-300 text-white placeholder-gray-500 font-medium"
                      {...form.register("phone")} 
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm font-semibold">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">
                    Subject *
                  </label>
                  <Input 
                    placeholder="What's this about?" 
                    className="h-14 border-2 border-gray-300 rounded-xl focus:border-black transition-all duration-300 text-white placeholder-gray-500 font-medium"
                    {...form.register("subject")} 
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-sm font-semibold">{form.formState.errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">
                    Service/Product of Interest *
                  </label>
                  <Select onValueChange={(value) => form.setValue("interest", value)} value={form.watch("interest")}>
                    <SelectTrigger className="h-14 border-2 border-gray-300 rounded-xl focus:border-black transition-all duration-300 text-white placeholder-gray-500 font-medium">
                      <SelectValue placeholder="Select a service or product" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      {interests.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.interest && (
                    <p className="text-red-500 text-sm font-semibold">{form.formState.errors.interest.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea 
                    className="min-h-[160px] border-2 border-gray-300 rounded-xl focus:border-black transition-all duration-300 resize-none text-white placeholder-gray-500 font-medium" 
                    placeholder="Tell us about your project..."
                    {...form.register("message")} 
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm font-semibold">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-16 bg-black hover:bg-gray-800 text-white font-black text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl uppercase tracking-wider relative"
                  disabled={form.formState.isSubmitting}
                >
                  {/* Colored dots on button */}
                  <div className="absolute top-2 right-4 flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  
                  {form.formState.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3" />
                      SEND MESSAGE
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-white text-black rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative border border-gray-200"
                >
                  {/* Colored dot indicator */}
                  <div className={`absolute top-4 right-4 w-4 h-4 ${item.dotColor} rounded-full`}></div>
                  
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-black rounded-2xl">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-black mb-2 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <Link 
                          href={item.href}
                          className="text-gray-700 hover:text-black transition-colors text-lg font-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </Link>
                      ) : (
                        <p className="text-gray-700 text-lg font-semibold">{item.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl border border-gray-700 relative"
            >
              {/* Corner dots */}
              <div className="absolute top-4 left-4 grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-black uppercase tracking-wide">
                  Why Choose HYNOX?
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { text: "Lightning fast response", dotColor: "bg-red-500" },
                  { text: "Expert consultation", dotColor: "bg-blue-500" }, 
                  { text: "Custom solutions", dotColor: "bg-green-500" },
                  { text: "Transparent pricing", dotColor: "bg-yellow-500" }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-6 h-6 ${benefit.dotColor} rounded-full flex items-center justify-center`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-lg text-white">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-black text-white rounded-3xl p-8 shadow-2xl relative border-2 border-white"
            >
              {/* Animated dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-400"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-600"></div>
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">URGENT PROJECT?</h3>
              <p className="text-gray-300 mb-6 text-lg font-medium">
                Need immediate assistance? Call us now and let's make it happen!
              </p>
              <Link
                href="https://wa.me/918870524355"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl transition-all duration-300 font-black text-lg hover:scale-105 relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-6 h-6" />
                CALL: +91 8870524355
                {/* Small dots on button */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image" // Keep Image for team member images
import Link from "next/link" // Keep Link for navigation within the component

export default function TeamClient() {
  const teamMembers = [
    {
      name: "Sukash",
      role: "Founder & CEO",
      quote: "Leading the vision, empowering the team, and building a future where design meets purpose.",
      image: "/member5.jpg",
    },
    {
      name: "Parameswaran E",
      role: "Developer / CTO",
      quote: "Architecting robust solutions and pushing the boundaries of technology to create seamless experiences.",
      image: "/member6.jpg",
    },
    {
      name: "Swasthik",
      role: "Developer / CFO",
      quote: "Balancing innovation with financial strategy to ensure sustainable growth and a strong technical foundation.",
      image: "/member3.jpg",
    },
    {
      name: "Surrendar Prakash",
      role: "Graphic Designer",
      quote: "Transforming concepts into compelling visuals that resonate with our audience and define our brand identity.",
      image: "/member4.jpg",
    },
    {
      name: "Hrithik S",
      role: "Operations",
      quote: "Streamlining processes and ensuring smooth daily operations to deliver exceptional service and efficiency.",
      image: "/member2.jpg",
    },
    {
      name: "Anbu Selvan",
      role: "Store Manager",
      quote: "Creating an inviting atmosphere and ensuring a seamless experience for every customer who walks through our doors.",
      image: "/member1.jpg",
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Minds Behind
            <span className="block">HYNOX</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            We're not your typical team. We're dreamers who code, creators who ship, and rebels who believe fashion and
            technology can change the world. Meet the humans building tomorrow's wardrobe.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "bg-white border-2 border-black" : "bg-black text-white"
                }`}
              >
                <div className="p-8">
                  <div className="relative mb-6 mt-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-40 h-40 mx-auto rounded-full object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg font-medium mb-4 ${index % 2 === 0 ? "text-gray-600" : "text-gray-300"}`}>
                      {member.role}
                    </p>
                    <p className={`italic text-sm ${index % 2 === 0 ? "text-gray-500" : "text-gray-400"}`}>
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our DNA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Think Different</h3>
              <p className="text-gray-300">
                We question everything, challenge norms, and create solutions that don't exist yet.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Move Fast</h3>
              <p className="text-gray-300">
                Speed is our superpower. We iterate, learn, and ship at the speed of thought.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Human</h3>
              <p className="text-gray-300">
                Technology serves people, not the other way around. We build with empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Ready to Join the Revolution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for brilliant minds who want to reshape how the world thinks about fashion and
            technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/919500656339', '_blank')}
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

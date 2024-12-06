'use client'

import { Card, CardContent } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { useTheme } from '@/components/theme-provider'

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Anderson Chen",
    role: "Co-Fouder",
    image: "",
    bio: "Anderson designs products.",
    social: {
      linkedin: "https://www.linkedin.com/in/anderson-chen-2b6941216/",
    },
  },
  {
    name: "Kai-Wen Cheng",
    role: "Co-Founder",
    image: "",
    bio: "Kai makes things work.",
    social: {
      linkedin: "https://www.linkedin.com/in/kai-wencheng/",
    },
  },
  {
    name: "Henry Cheng",
    role: "Software Engineer",
    image: "",
    bio: "Henry does backend for us.",
    social: {},
  },
]

export default function TeamSection() {
  const { theme } = useTheme()
  
  return (
    <section className={`min-h-screen py-8 flex items-center justify-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'
    }`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Meet Our Team
            </h2>
            <p className={`max-w-[900px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
            }`}>
              We're a diverse group of passionate individuals, united by our mission to innovate and excel.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card 
              key={member.name} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <CardContent className="p-4">
                <div className="relative w-full h-60">
                  {member.image ? (
                    <Image
                      alt={member.name}
                      src={member.image}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className={`w-full h-full rounded-md flex items-center justify-center shadow-inner transition-all duration-300 ${
                      member.name === "Anderson Chen" 
                        ? "bg-gradient-to-br from-[#8ABFFF] to-[#C5E1FF] bg-opacity-90" 
                        : member.name === "Kai-Wen Cheng"
                        ? "bg-gradient-to-br from-[#FF8A8A] to-[#FFC5C5] bg-opacity-90"
                        : "bg-gradient-to-br from-[#FFE580] to-[#FAF5C8] bg-opacity-90"
                    }`}>
                      <span className={`text-5xl font-bold transition-all duration-300 ${
                        member.name === "Anderson Chen"
                          ? "text-[#5A9EFF] [text-shadow:_inset_0_2px_3px_rgb(0_0_0_/_40%)]"
                          : member.name === "Kai-Wen Cheng"
                          ? "text-[#FF6B6B] [text-shadow:_inset_0_2px_3px_rgb(0_0_0_/_40%)]"
                          : "text-[#B3A65E] [text-shadow:_inset_0_2px_3px_rgb(0_0_0_/_40%)]"
                      }`}
                      style={{
                        WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                        textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {member.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className={`mt-4 text-xl font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
                }`}>
                  {member.name}
                </h3>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
                }`}>
                  {member.role}
                </p>
                <p className={`mt-2 text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
                }`}>
                  {member.bio}
                </p>
                <div className="flex space-x-4 mt-4">
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-zinc-400 hover:text-blue-400' 
                          : 'text-gray-500 hover:text-blue-500'
                      }`}
                    >
                      <TwitterLogoIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-zinc-400 hover:text-blue-400' 
                          : 'text-gray-500 hover:text-blue-600'
                      }`}
                    >
                      <LinkedInLogoIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-zinc-400 hover:text-zinc-100' 
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      <GitHubLogoIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
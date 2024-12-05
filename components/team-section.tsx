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
    <section className={`min-h-screen flex items-center ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'}`}>
      <div className="container px-4 md:px-6">
        <div className="animate-fade-in-down flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl justify-center ${
              theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Meet Our Team
            </h2>
            <p className={`max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'
            }`}>
              We're a diverse group of passionate individuals, united by our mission to innovate and excel.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card 
              key={member.name} 
              className={`overflow-hidden transition-all hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-zinc-800 border-zinc-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <CardContent className="p-4">
                <div className="relative w-full h-60">
                  <Image
                    alt={member.name}
                    src={member.image}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className={`mt-4 text-xl font-bold ${
                  theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
                }`}>
                  {member.name}
                </h3>
                <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>
                  {member.role}
                </p>
                <p className={`mt-2 text-sm ${
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
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <TwitterLogoIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                      <LinkedInLogoIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
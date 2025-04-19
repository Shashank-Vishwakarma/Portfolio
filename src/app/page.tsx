"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"
import { Project } from "./projects/page"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsOverview = [
  {
    "title": "Frontend",
    skills: [
      {
        "name": "React.js",
        "level": 80,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      },
      {
        "name": "Next.js",
        "level": 85,
        "iconUrl": "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
      },
      {
        "name": "Tailwind CSS",
        "level": 75,
        "iconUrl": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      },
      {
        "name": "TypeScript",
        "level": 90,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      },
      {
        "name": "Redux",
        "level": 85,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
      },
    ]
  },
  {
    "title": "Backend",
    skills: [
      {
        "name": "Node.js",
        "level": 93,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      },
      {
        "name": "GoLang",
        "level": 90,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
      },
      {
        "name": "Python",
        "level": 90,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      },
      {
        "name": "MongoDB",
        "level": 85,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      },
      {
        "name": "PostgreSQL",
        "level": 88,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
      },
      {
        "name": "C++",
        "level": 80,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
      },
      {
        "name": "Java",
        "level": 85,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
      },
    ]
  },
  {
    "title": "DevOps & Others",
    skills: [
      {
        "name": "Git",
        "level": 90,
        "iconUrl": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      },
      {
        "name": "Docker",
        "level": 93,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
      },
      {
        "name": "Kubernetes",
        "level": 85,
        "iconUrl": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
      },
      {
        "name": "AWS",
        "level": 80,
        "iconUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      }
    ]
  }
]

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {  
      const fetchProjects = async () => {
        try {
          const response = await fetch("/api/projects")
          const data = await response.json()
  
          setProjects((data as Project[]).filter((project) => project.featured))
        } catch(err) {
          console.log("Error getting featured projects: ", err)
        }
      }
  
      fetchProjects()
    }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Hi, I&apos;m <span className="text-primary">Shashank Vishwakarma</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer specializing in Golang, Python, Javascript/Typescript, Node.js, React, Next.js, MongoDB, and more. Building modern applications with a focus on performance and user experience.",
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block', color: "#37ecba" }}
              />
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link target="_blank" className="flex" href="https://drive.google.com/file/d/13tHPFMZDAvFmAFBHgwK_1SiNqIs6DWfR/view?usp=sharing">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/portfolio-profile-cropped-2.jpg"
                  alt="Shashank Vishwakarma"
                  width={400}
                  height={400}
                  className="rounded-3xl object-cover border-4 border-background shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  {
                    project.demoUrl && (
                      <Button size="sm" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )
                  }
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      {/* Skills Overview */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsOverview.map((category) => (
              <div key={category.title} className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center">
                      <div className="mr-3 bg-primary/10 p-2 rounded-md">
                        <Image
                          src={skill.iconUrl || "/placeholder.svg"}
                          alt={skill.name}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}</span>
                        </div>
                        <Progress value={skill.level} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant
      <div className="fixed bottom-6 right-6 z-50">
        <AIChatButton />
      </div> */}
    </div>
  )
}

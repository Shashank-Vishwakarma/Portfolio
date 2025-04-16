"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600&text=Task+Management",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+Dashboard",
    tags: ["React", "Chart.js", "Weather API", "CSS Modules"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Content Management System",
    description:
      "A headless CMS with a user-friendly interface for managing digital content across multiple platforms.",
    image: "/placeholder.svg?height=400&width=600&text=CMS",
    tags: ["Next.js", "GraphQL", "MongoDB", "AWS S3"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness progress.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Mobile",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with private and group chat capabilities.",
    image: "/placeholder.svg?height=400&width=600&text=Chat+App",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    category: "Full-Stack",
  },
]

// Categories for filtering
const categories = ["All", "Frontend", "Full-Stack", "Mobile", "Backend"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work across various technologies and domains. Each project represents a unique challenge
            and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                  {project.featured && <Badge className="absolute top-2 right-2">Featured</Badge>}
                </div>
                <CardHeader>
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
                  <Button size="sm" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

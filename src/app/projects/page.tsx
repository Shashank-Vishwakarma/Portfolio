"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
  featured: boolean
  sortNumber: number
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Full-Stack")
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allProjects, setAllProjects] = useState<Project[]>([])
  const [projectsByCategory, setProjectsByCategory] = useState<Project[]>([])

  useEffect(() => {
    setSelectedCategory("Full-Stack")

    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        const data = await response.json()

        setAllProjects(data as Project[])

        setAllCategories(
          Array.from(
            new Set(
              (data as Project[]).map(
                (project) => project.category.substring(0, 1).toUpperCase() + project.category.substring(1)
              )
            )
          )
        )

        setProjectsByCategory((data as Project[]).filter((project) => project.category === selectedCategory))
      } catch(err) {
        console.log("Error getting projects: ", err)
      }
    }

    fetchProjects()
  }, [])

  useEffect(()=>{
    setProjectsByCategory(allProjects.filter((project) => project.category === selectedCategory))
  }, [selectedCategory])

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
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2 cursor-pointer"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsByCategory.map((project) => (
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
      </div>
    </div>
  )
}

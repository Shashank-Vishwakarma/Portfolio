"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Skill categories and data
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React.js", level: 95, description: "Building interactive UIs with React and its ecosystem" },
      { name: "Next.js", level: 90, description: "Creating server-rendered React applications" },
      { name: "TypeScript", level: 85, description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework for rapid UI development" },
      { name: "Framer Motion", level: 80, description: "Creating fluid animations and interactions" },
      { name: "HTML/CSS", level: 95, description: "Semantic markup and modern CSS techniques" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90, description: "Server-side JavaScript runtime" },
      { name: "Express.js", level: 85, description: "Web application framework for Node.js" },
      { name: "MongoDB", level: 85, description: "NoSQL database for modern applications" },
      { name: "PostgreSQL", level: 80, description: "Relational database management" },
      { name: "GraphQL", level: 75, description: "API query language and runtime" },
      { name: "GoLang", level: 70, description: "High-performance backend development" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control and collaboration" },
      { name: "Docker", level: 80, description: "Containerization for consistent environments" },
      { name: "AWS", level: 75, description: "Cloud infrastructure and services" },
      { name: "CI/CD", level: 85, description: "Automated testing and deployment pipelines" },
      { name: "Jest", level: 80, description: "JavaScript testing framework" },
      { name: "Webpack", level: 75, description: "Module bundler for JavaScript applications" },
    ],
  },
  {
    id: "other",
    name: "Other Skills",
    skills: [
      { name: "UI/UX Design", level: 70, description: "Creating user-centered designs and experiences" },
      { name: "Agile Methodologies", level: 85, description: "Scrum and Kanban project management" },
      { name: "Technical Writing", level: 80, description: "Documentation and knowledge sharing" },
      { name: "SEO", level: 75, description: "Search engine optimization techniques" },
      { name: "Performance Optimization", level: 85, description: "Web performance and core web vitals" },
      { name: "Accessibility", level: 80, description: "Building inclusive web applications" },
    ],
  },
]

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">My Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </div>

        <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 mb-3" />
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

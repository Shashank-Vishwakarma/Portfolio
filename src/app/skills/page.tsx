"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Skill {
  name: string
  description: string
  category: string
  iconUrl: string
}

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("Frontend")
  const [skills, setSkills] = useState<Skill[]>([])
  const [skillsByCategory, setSkillsByCategory] = useState<Skill[]>([])
  const [allCategories, setAllCategories] = useState<string[]>([])

  useEffect(() => {
    setActiveTab('Frontend')

    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills")
        const data = await response.json()

        setSkills(data as Skill[])
        setAllCategories(
          Array.from(
            new Set(
              (data as Skill[]).map(
                (skill) => skill.category.substring(0, 1).toUpperCase() + skill.category.substring(1)
              )
            )
          )
        )

        setSkillsByCategory((data as Skill[]).filter((skill) => skill.category === activeTab))
      } catch (error) {
        console.error("Error fetching skills:", error)
      }
    }

    fetchSkills()
  }, [])

  useEffect(()=>{
    setSkillsByCategory(skills.filter((skill) => skill.category === activeTab))
  }, [activeTab])

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">My Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </div>

        <Tabs defaultValue="Frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {allCategories.map((category, index) => (
              <TabsTrigger key={index} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {allCategories.map((category, index) => (
            <TabsContent key={index} value={category} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsByCategory.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-4 items-center mb-2">
                          {skill?.iconUrl && (
                            <Image
                              src={skill.iconUrl}
                              width={40}
                              height={40}
                              alt="android"
                            />
                          )}
                          <h3 className="font-semibold">{skill.name}</h3>
                        </div>
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

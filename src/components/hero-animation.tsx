"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "GoLang", color: "#00ADD8" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Docker", color: "#2496ED" },
  ]

  return (
    <div className="absolute -z-10 inset-0 overflow-hidden">
      <div ref={containerRef} className="relative w-full h-full">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute rounded-full flex items-center justify-center text-xs font-medium"
            style={{
              backgroundColor: `${tech.color}20`,
              color: tech.color,
              border: `1px solid ${tech.color}40`,
            }}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 1, 0.8, 1],
              scale: [0.5, 1, 0.9, 1],
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <span className="px-3 py-1.5">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

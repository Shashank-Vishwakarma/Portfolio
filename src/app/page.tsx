import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import AIChatButton from "@/components/ai-chat-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Developer specializing in React, Node.js, Next.js, TypeScript, MongoDB, and GoLang.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-background shadow-xl"
                  priority
                />
                <HeroAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Project+${i}`}
                    alt={`Project ${i}`}
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Project {i}</h3>
                  <p className="text-muted-foreground mt-2">
                    A brief description of project {i} and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["React", "TypeScript", "Tailwind"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href={`/projects/${i}`}>
                      <Button variant="link" className="p-0">
                        View Project <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "GoLang"] },
              { title: "Tools & Others", skills: ["Git", "Docker", "AWS", "CI/CD"] },
            ].map((category) => (
              <div key={category.title} className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 min-w-[80px]">{skill}</span>
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

      {/* Latest Blog Posts */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+${i}`}
                    alt={`Blog ${i}`}
                    width={400}
                    height={200}
                    className="object-cover w-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Technology</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Development</span>
                  </div>
                  <h3 className="text-xl font-semibold">How to Build a Modern Web App in 2024</h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">
                    Learn the latest techniques and technologies for building modern web applications.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">April 10, 2024</span>
                    <Link href={`/blog/post-${i}`}>
                      <Button variant="link" className="p-0">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <AIChatButton />
      </div>
    </div>
  )
}

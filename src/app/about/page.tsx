import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      company: "Decimal Point Analytics",
      description: "Contributing to backend development projects using Python, FastAPI, Docker, LLMs, and more.",
    },
    {
      year: "2023",
      title: "Backend Developer Intern",
      company: "Datazip Technologies Private Limited",
      description: "Contributing to backend development projects using GoLang, Python, Docker, LLMs, vector databases, and more.",
    },
    {
      year: "2020 - 2024",
      title: "B.Tech Undergrad",
      company: "Indian Institute of Technology, Ropar",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h1 className="text-4xl font-bold tracking-tighter mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6">
                I'm Shashank Vishwakarma, B.Tech. student from prestigious Indian Institute of Technology, Ropar -  a passionate software Engineer with experience in building modern web and mobile
                applications. I specialize in creating robust, scalable, and user-friendly solutions using cutting-edge
                technologies.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in tech started with an internship at Datazip Technologies, where I honed my skills as a backend developer.
                My tech skills spans across React, Nextjs, Nodejs, JavaScript/Typescript, Golang, Python, MongoDB, Postgres, Kafka, Redis, Message queues like BullMQ, Git and Github, Docker, Mobile App Development.
                I'm passionate about continuous learning and love tackling new challenges - whether it's building engaging applications or exploring the latest technologies. I'm excited about the impactful projects ahead!
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies.
              </p>
              <Button className="mt-4">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1 md:px-8 mb-4 md:mb-0">
                      <div className="bg-card p-6 rounded-lg shadow-sm">
                        <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.company}</p>
                        <p className="mt-3">{item.description}</p>
                      </div>
                    </div>
                    <div className="md:w-16 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

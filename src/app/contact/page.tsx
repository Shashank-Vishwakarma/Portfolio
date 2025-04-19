"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormState((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
    
  //   // TODO: send mail to me
  // }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          {/* <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}> */}
            {/* <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <div className="bg-primary/10 text-primary p-4 rounded-lg flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending</span>
                          <span className="animate-spin">
                            <Send className="h-4 w-4" />
                          </span>
                        </>
                      ) : (
                        <>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card> */}
          {/* </motion.div> */}

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="flex-1">
              <Card>
                <CardContent className="p-2">
                  <h2 className="text-2xl font-semibold mb-6 p-2 text-center md:text-left">Contact Information</h2>
                  <CardTitle>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 items-center">
                      <span className="text-lg font-semibold">Email: </span>
                      <span className="text-muted-foreground text-sm ">shashank78680@gmail.com</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 items-center">
                      <span className="text-lg font-semibold">GitHub: </span>
                      <Link href="https://github.com/Shashank-Vishwakarma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <span className="text-blue-400 text-sm underline">https://github.com/Shashank-Vishwakarma</span>
                      </Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 items-center">
                      <span className="text-lg font-semibold">LinkedIn: </span>
                      <Link href="https://www.linkedin.com/in/shashank9225/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <span className="text-blue-400 text-sm underline">https://www.linkedin.com/in/shashank9225/</span>
                      </Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 items-center">
                      <span className="text-lg font-semibold">Address: </span>
                      <span className="text-muted-foreground text-sm">Gorakhpur, Uttar Pradesh, India</span>
                    </div>
                  </CardTitle>
                </CardContent>
              </Card>
            </div>
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "What skills do you have?",
                    answer:
                      "I specialize in full-stack development using React.js, Next.js, Node.js, Golang, FastAPI, MongoDB, PostgreSQL, AWS and more.",
                  },
                  {
                    question: "Why should someone hire you?",
                    answer:
                      "I build scalable applications, solve complex problems, and deliver impactful solutions using modern technologies.",
                  },
                  {
                    question: "What makes you stand out?",
                    answer:
                      "My adaptability, experience in advanced projects, and focus on delivering business-specific solutions sets me apart.",
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

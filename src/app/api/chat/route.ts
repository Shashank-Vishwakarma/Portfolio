import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const lastMessage = messages[messages.length - 1].content

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `You are an AI assistant for a portfolio website. Answer questions about John Doe, a full-stack developer with expertise in React, Next.js, Node.js, TypeScript, MongoDB, and GoLang.
      
      The user asks: ${lastMessage}`,
      system: `You are a helpful AI assistant for John Doe's portfolio website. You should answer questions about John's skills, experience, and projects. Be professional, concise, and helpful. If you don't know something specific about John, you can provide general information about the technologies he works with.
      
      John is a full-stack developer with 7+ years of experience specializing in:
      - Frontend: React, Next.js, TypeScript, Tailwind CSS
      - Backend: Node.js, Express, MongoDB, PostgreSQL, GoLang
      - DevOps: Docker, AWS, CI/CD
      
      His notable projects include an e-commerce platform, task management app, and content management system.`,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}

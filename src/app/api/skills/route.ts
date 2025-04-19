import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"

export async function GET() {
    const skills = await prisma.skill.findMany()
    return NextResponse.json(skills)
}

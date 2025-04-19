import {NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"

export async function GET(request: Request) {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                sortNumber: "desc"
            }
        })
        return NextResponse.json(projects)
    } catch(err) {
        console.log("Error getting projects: ", err)
        return new NextResponse("Error getting projects", {status: 500})
    }
}

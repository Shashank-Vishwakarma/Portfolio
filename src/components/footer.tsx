import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-center items-center gap-12 w-full">
            <Link href="https://github.com/Shashank-Vishwakarma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/shashank9225/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:shashank78680@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shashank Vishwakarma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The course you're looking for doesn't exist or may have been removed.
        </p>
        <Button asChild className="bg-[#64ffda] text-black hover:bg-[#4fd1c7]">
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </Button>
      </div>
    </div>
  )
}

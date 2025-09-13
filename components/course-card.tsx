import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/courses"
import { Clock, BookOpen, Star, Play } from "lucide-react"

interface CourseCardProps {
  course: Course
  showPurchaseStatus?: boolean
}

export function CourseCard({ course, showPurchaseStatus = false }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 bg-gradient-to-br from-background to-muted/20 rounded-2xl shadow-md">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={
              course.thumbnail ||
              `/placeholder.svg?height=200&width=350&query=${encodeURIComponent(course.title + " course thumbnail") || "/placeholder.svg"}`
            }
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="bg-[#64ffda] text-black rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>

          {showPurchaseStatus && course.purchased && (
            <Badge className="absolute top-3 right-3 bg-[#64ffda] text-black font-semibold shadow-lg">
              ✓ Purchased
            </Badge>
          )}

          {course.category && (
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 bg-black/80 text-white border-0 backdrop-blur-sm"
            >
              {course.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {course.level && (
            <Badge
              variant="outline"
              className={`text-xs font-medium ${
                course.level.includes("Beginner")
                  ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-950"
                  : course.level.includes("Intermediate")
                    ? "border-yellow-500 text-yellow-600 bg-yellow-50 dark:bg-yellow-950"
                    : "border-red-500 text-red-600 bg-red-50 dark:bg-red-950"
              }`}
            >
              {course.level}
            </Badge>
          )}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-medium">4.8</span>
            <span className="text-xs text-muted-foreground">(2.3k)</span>
          </div>
        </div>

        <CardTitle className="text-xl mb-3 text-balance leading-tight group-hover:text-[#64ffda] transition-colors duration-200">
          {course.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">{course.description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          {course.duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
          )}
          {course.lessons && (
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{course.lessons} lessons</span>
            </div>
          )}
        </div>

        {course.instructor && (
          <p className="text-xs text-muted-foreground mb-4">
            by <span className="font-medium text-foreground">{course.instructor}</span>
          </p>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#64ffda]">₹{course.price.toLocaleString()}</span>
        </div>
        <Button
          asChild
          size="sm"
          className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Link href={`/courses/${course.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

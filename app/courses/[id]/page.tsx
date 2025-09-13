"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { PurchaseModal } from "@/components/purchase-modal"
import { courses } from "@/lib/courses"
import { useAppStore } from "@/lib/store"
import { Download, Play, Lock, ArrowLeft, Clock, BookOpen, User, Star } from "lucide-react"

interface CoursePageProps {
  params: Promise<{ id: string }>
}

export default function CoursePage({ params }: CoursePageProps) {
  const { id } = use(params)
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
  const { purchasedCourses } = useAppStore()

  const course = courses.find((c) => c.id === id)
  if (!course) {
    notFound()
  }

  const isPurchased = purchasedCourses.includes(course.id)
  const relatedCourses = courses.filter((c) => c.id !== course.id && c.category === course.category).slice(0, 2)

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-balance">{course.title}</h1>
                {isPurchased && <Badge className="bg-[#64ffda] text-black">Purchased</Badge>}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                {course.category && (
                  <Badge variant="secondary" className="bg-[#64ffda]/10 text-[#64ffda] border-[#64ffda]/20">
                    {course.category}
                  </Badge>
                )}
                {course.level && (
                  <Badge
                    variant="outline"
                    className={`${
                      course.level.includes("Beginner")
                        ? "border-green-500 text-green-600"
                        : course.level.includes("Intermediate")
                          ? "border-yellow-500 text-yellow-600"
                          : "border-red-500 text-red-600"
                    }`}
                  >
                    {course.level}
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">4.8 (2,341 reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                {course.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                )}
                {course.lessons && (
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                )}
                {course.instructor && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>by {course.instructor}</span>
                  </div>
                )}
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{course.description}</p>
            </div>

            {/* Video Section */}
            <Card className="mb-8 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden">
                  {isPurchased ? (
                    <div className="relative w-full h-full">
                      {/* ✅ Updated to support YouTube video embedding */}
                      <iframe
                        src={course.videoUrl}
                        title={course.title}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute top-4 right-4 bg-[#64ffda] text-black px-3 py-1 rounded-full text-sm font-medium">
                        HD Quality
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          course.thumbnail ||
                          `/placeholder.svg?height=400&width=700&query=${encodeURIComponent(course.title + " course preview") || "/placeholder.svg"}`
                        }
                        alt={course.title}
                        fill
                        className="object-cover blur-sm"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="relative mb-6">
                            <Lock className="h-20 w-20 mx-auto opacity-90" />
                            <div className="absolute -top-2 -right-2 bg-[#64ffda] text-black rounded-full p-2">
                              <Play className="h-4 w-4" />
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold mb-3 text-balance">Premium Content Locked</h3>
                          <p className="text-xl opacity-90 mb-4">Unlock high-quality video lessons</p>
                          <div className="flex items-center justify-center gap-2 text-[#64ffda]">
                            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
                            <span className="text-sm font-medium">HD Video • Lifetime Access</span>
                            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Course Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="leading-relaxed">
                    This comprehensive course is designed to take you from beginner to advanced level. You'll learn
                    through hands-on projects, real-world examples, and expert guidance. Our structured curriculum
                    ensures you build a solid foundation while developing practical skills that you can apply
                    immediately.
                  </p>
                  <h4 className="text-lg font-semibold mt-6 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    <li>Core concepts and fundamental principles</li>
                    <li>Practical applications and real-world scenarios</li>
                    <li>Industry best practices and modern techniques</li>
                    <li>Hands-on projects to build your portfolio</li>
                    <li>Real-world case studies and examples</li>
                    <li>Expert tips and advanced strategies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Course Materials */}
            <Card className="border-2 border-dashed border-[#64ffda]/30 hover:border-[#64ffda]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/10">
              <CardHeader className="bg-gradient-to-r from-[#64ffda]/5 to-transparent">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-[#64ffda]/10 rounded-lg">
                    <Download className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  Course Materials & Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {isPurchased ? (
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Access comprehensive study materials, detailed notes, source code, and bonus resources to enhance
                      your learning experience.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Button
                        asChild
                        className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <Link href={course.notesUrl} target="_blank">
                          <Download className="h-4 w-4 mr-2" />
                          Download Notes (PDF)
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-12 rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200 bg-transparent"
                      >
                        <Link href="#" target="_blank">
                          <Download className="h-4 w-4 mr-2" />
                          Bonus materials
                        </Link>
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#64ffda]">50+</div>
                        <div className="text-sm text-muted-foreground">Pages of Notes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#64ffda]">10+</div>
                        <div className="text-sm text-muted-foreground">Code Examples</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="relative mb-6">
                      <Lock className="h-12 w-12 mx-auto opacity-60" />
                      <div className="absolute -top-1 -right-1 bg-[#64ffda] text-black rounded-full p-1">
                        <Download className="h-3 w-3" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Premium Resources Locked</h4>
                    <p className="text-sm mb-4">Unlock comprehensive study materials after purchase</p>
                    <div className="flex items-center justify-center gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full" />
                        PDF Notes
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full" />
                        Cheatsheet
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full" />
                        Bonus Resources
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 mb-8 bg-gradient-to-br from-background to-muted/20 border-2 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#64ffda] mb-2">₹{course.price.toLocaleString()}</div>
                  <p className="text-muted-foreground">One-time purchase</p>
                </div>

                {isPurchased ? (
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <Badge className="bg-[#64ffda] text-black text-base px-4 py-2">✓ Course Purchased</Badge>
                    </div>
                    <Button asChild className="w-full bg-[#64ffda] text-black hover:bg-[#4fd1c7]">
                      <Link href="/dashboard">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setIsPurchaseModalOpen(true)}
                    className="w-full bg-[#64ffda] text-black hover:bg-[#4fd1c7] text-lg py-6 font-semibold"
                  >
                    Buy Now - ₹{course.price.toLocaleString()}
                  </Button>
                )}

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full" />
                    Lifetime access
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full" />
                    Downloadable resources
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full" />
                    Mobile and desktop access
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full" />
                    Certificate of completion
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Related Courses</h3>
                <div className="space-y-4">
                  {relatedCourses.map((relatedCourse) => (
                    <CourseCard key={relatedCourse.id} course={relatedCourse} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        courseTitle={course.title}
        coursePrice={course.price}
        courseId={course.id}
      />
    </div>
  )
}

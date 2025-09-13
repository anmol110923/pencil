"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { courses } from "@/lib/courses"
import { useAppStore } from "@/lib/store"
import { Play, BookOpen, Award, TrendingUp, Clock, Target } from "lucide-react"

export default function DashboardPage() {
  const { isLoggedIn, purchasedCourses } = useAppStore()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  const purchasedCourseData = courses.filter((course) => purchasedCourses.includes(course.id))
  const availableCourses = courses.filter((course) => !purchasedCourses.includes(course.id)).slice(0, 3)

  // Mock progress data
  const courseProgress = purchasedCourseData.map((course) => ({
    ...course,
    progress: Math.floor(Math.random() * 100),
    lastWatched: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  }))

  const totalProgress =
    courseProgress.length > 0
      ? Math.floor(courseProgress.reduce((acc, course) => acc + course.progress, 0) / courseProgress.length)
      : 0

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-xl text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
                  <p className="text-3xl font-bold">{purchasedCourseData.length}</p>
                  <p className="text-xs text-[#64ffda] font-medium">Active learning</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <BookOpen className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
                  <p className="text-3xl font-bold">{totalProgress}%</p>
                  <p className="text-xs text-green-500 font-medium">Keep going!</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold">{courseProgress.filter((c) => c.progress === 100).length}</p>
                  <p className="text-xs text-muted-foreground">courses finished</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <Award className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours Learned</p>
                  <p className="text-3xl font-bold">{purchasedCourseData.length * 8}</p>
                  <p className="text-xs text-muted-foreground">total time</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <Clock className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Continue Learning */}
            {courseProgress.length > 0 ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
                <div className="space-y-4">
                  {courseProgress.map((course) => (
                    <Card
                      key={course.id}
                      className="hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-background to-muted/20 border-0 rounded-2xl"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">Last watched: {course.lastWatched}</p>
                          </div>
                          <Badge
                            variant={course.progress === 100 ? "default" : "secondary"}
                            className={course.progress === 100 ? "bg-[#64ffda] text-black" : ""}
                          >
                            {course.progress === 100 ? "✓ Completed" : `${course.progress}% Complete`}
                          </Badge>
                        </div>
                        <div className="mb-4">
                          <Progress value={course.progress} className="h-3 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{course.progress}% complete</span>
                          <Button
                            asChild
                            size="sm"
                            className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                          >
                            <Link href={`/courses/${course.id}`}>
                              <Play className="h-4 w-4 mr-2" />
                              {course.progress === 100 ? "Review" : "Continue"}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-12 text-center">
                    <div className="p-4 bg-[#64ffda]/10 rounded-2xl w-fit mx-auto mb-6">
                      <BookOpen className="h-16 w-16 text-[#64ffda]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">No Courses Yet</h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Start your learning journey by enrolling in your first course
                    </p>
                    <Button
                      asChild
                      className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Link href="/courses">Browse Courses</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recommended Courses */}
            {availableCourses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {availableCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Learning Streak */}
            <Card className="mb-6 bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-[#64ffda]/10 rounded-lg">
                    <Award className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#64ffda] mb-2">7</div>
                  <p className="text-sm text-muted-foreground">Days in a row</p>
                  <div className="mt-4 p-3 bg-[#64ffda]/5 rounded-xl">
                    <p className="text-xs text-[#64ffda] font-medium">🔥 You're on fire!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-[#64ffda]/10 rounded-lg">
                    <Target className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start bg-transparent rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200"
                >
                  <Link href="/courses">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse All Courses
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start bg-transparent rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200"
                >
                  <Link href="/profile">
                    <Award className="h-4 w-4 mr-2" />
                    View Certificates
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/lib/courses"
import { useAppStore } from "@/lib/store"
import { Plus, Edit, Trash2, Users, BookOpen, DollarSign, TrendingUp, Eye } from "lucide-react"

export default function AdminPage() {
  const { isLoggedIn, isAdmin } = useAppStore()
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    } else if (!isAdmin) {
      router.push("/not-authorized")
    }
  }, [isLoggedIn, isAdmin, router])

  if (!isLoggedIn || !isAdmin) {
    return null
  }

  const handleDelete = async (courseId: string) => {
    setIsDeleting(courseId)
    // Simulate deletion
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsDeleting(null)
    // In a real app, this would update the courses state
    console.log(`Deleted course ${courseId}`)
  }

  const totalRevenue = courses.reduce((acc, course) => acc + course.price, 0)
  const averagePrice = Math.floor(totalRevenue / courses.length)

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground">Manage your courses and content</p>
          </div>
          <Button
            asChild
            className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="/admin/new">
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                  <p className="text-3xl font-bold">{courses.length}</p>
                  <p className="text-xs text-[#64ffda] font-medium">+2 this month</p>
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
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-3xl font-bold">1,234</p>
                  <p className="text-xs text-green-500 font-medium">+12% this month</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <Users className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-500 font-medium">+8% this month</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <DollarSign className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Price</p>
                  <p className="text-3xl font-bold">₹{averagePrice}</p>
                  <p className="text-xs text-muted-foreground">per course</p>
                </div>
                <div className="p-3 bg-[#64ffda]/10 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Table */}
        <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Course Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="font-semibold">Course</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Students</TableHead>
                  <TableHead className="text-right font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id} className="border-border/50 hover:bg-muted/20 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={
                              course.thumbnail ||
                              `/placeholder.svg?height=48&width=48&query=${encodeURIComponent(course.title)}`
                            }
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-base">{course.title}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">{course.description}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-[#64ffda]">₹{course.price.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-medium"
                      >
                        Published
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{Math.floor(Math.random() * 500) + 50}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-transparent hover:bg-[#64ffda]/10 hover:text-[#64ffda] rounded-lg"
                        >
                          <Link href={`/courses/${course.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-transparent hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 rounded-lg"
                        >
                          <Link href={`/admin/edit/${course.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(course.id)}
                          disabled={isDeleting === course.id}
                          className="text-destructive hover:text-destructive hover:bg-red-50 dark:hover:bg-red-950 bg-transparent rounded-lg"
                        >
                          {isDeleting === course.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

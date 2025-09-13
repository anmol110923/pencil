"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAppStore } from "@/lib/store"
import { ArrowLeft, Save, Plus } from "lucide-react"

export default function NewCoursePage() {
  const { isLoggedIn, isAdmin } = useAppStore()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    videoUrl: "",
    notesUrl: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Course title is required"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Course description is required"
    }
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "Valid price is required"
    }
    if (!formData.videoUrl.trim()) {
      newErrors.videoUrl = "Video URL is required"
    }
    if (!formData.notesUrl.trim()) {
      newErrors.notesUrl = "Notes URL is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    // Simulate course creation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("New course created:", formData)
    setIsSubmitting(false)
    router.push("/admin")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="pl-0 mb-4">
            <Link href="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Add New Course</h1>
          <p className="text-xl text-muted-foreground">Create a new course for your students</p>
        </div>

        <Card className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-[#64ffda]/5 to-transparent">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-[#64ffda]/10 rounded-lg">
                <Plus className="h-5 w-5 text-[#64ffda]" />
              </div>
              Course Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Course Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium">
                  Course Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter course title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-200 ${errors.title ? "border-destructive" : "border-border hover:border-[#64ffda]/50 focus:border-[#64ffda]"}`}
                />
                {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter course description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className={`min-h-[120px] rounded-xl border-2 transition-all duration-200 ${errors.description ? "border-destructive" : "border-border hover:border-[#64ffda]/50 focus:border-[#64ffda]"}`}
                />
                {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price" className="text-base font-medium">
                  Price (₹) *
                </Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price in rupees"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-200 ${errors.price ? "border-destructive" : "border-border hover:border-[#64ffda]/50 focus:border-[#64ffda]"}`}
                />
                {errors.price && <p className="text-sm text-destructive">{errors.price}</p>}
              </div>

              {/* Video URL */}
              <div className="space-y-2">
                <Label htmlFor="videoUrl" className="text-base font-medium">
                  YouTube Video URL *
                </Label>
                <Input
                  id="videoUrl"
                  type="url"
                  placeholder="https://www.youtube.com/embed/..."
                  value={formData.videoUrl}
                  onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-200 ${errors.videoUrl ? "border-destructive" : "border-border hover:border-[#64ffda]/50 focus:border-[#64ffda]"}`}
                />
                {errors.videoUrl && <p className="text-sm text-destructive">{errors.videoUrl}</p>}
              </div>

              {/* Notes URL */}
              <div className="space-y-2">
                <Label htmlFor="notesUrl" className="text-base font-medium">
                  Notes PDF URL *
                </Label>
                <Input
                  id="notesUrl"
                  type="url"
                  placeholder="https://example.com/notes.pdf"
                  value={formData.notesUrl}
                  onChange={(e) => handleInputChange("notesUrl", e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-200 ${errors.notesUrl ? "border-destructive" : "border-border hover:border-[#64ffda]/50 focus:border-[#64ffda]"}`}
                />
                {errors.notesUrl && <p className="text-sm text-destructive">{errors.notesUrl}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6 border-t border-border/40">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                      Creating Course...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Create Course
                    </>
                  )}
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  className="bg-transparent h-12 rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200"
                >
                  <Link href="/admin">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

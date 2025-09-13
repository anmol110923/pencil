import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { courses } from "@/lib/courses"
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react"

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

<section className="relative text-center py-24 px-6 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/pin3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional overlay for better contrast */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    {/* Heading */}
    <h1 className="text-5xl md:text-5xl font-extrabold text-white animate-fade-up">
      मेरा <span className="text-[#64ffda]">IPU</span>
    </h1>

    {/* Subheading */}
    <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fade-up delay-200 leading-relaxed">
      Everything in one place for 1st-year B.Tech students.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <Button
        asChild
        size="lg"
        className="bg-[#64ffda] text-black hover:bg-[#4fd1c7] text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Link href="/courses">
          Browse Courses
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="text-lg px-8 bg-transparent rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200"
      >
        <Link href="/login">Get Started</Link>
      </Button>
    </div>
  </div>
</section>

      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Collegindino?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Experience learning like never before with our innovative platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-[#64ffda]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access high-quality video lectures and comprehensive study materials crafted by industry experts.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#64ffda]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn at Your Pace</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flexible learning schedule that adapts to your lifestyle. Study anytime, anywhere, at your own speed.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-[#64ffda]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from industry professionals with years of real-world experience and proven track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Courses</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Start your learning journey with our most popular courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent rounded-xl border-2 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-200"
            >
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#64ffda]/5 to-transparent">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#64ffda] mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#64ffda] mb-2">50+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#64ffda] mb-2">100+</div>
              <div className="text-muted-foreground">Premium Courses</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#64ffda] mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Collegindino</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              At Collegindino, we believe that quality education should be accessible to everyone. Our mission is to
              democratize learning by providing world-class courses that empower individuals to achieve their goals and
              transform their careers. Join thousands of learners who have already started their journey with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

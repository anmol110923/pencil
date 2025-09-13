export interface Course {
  id: string
  title: string
  description: string
  price: number
  videoUrl: string
  notesUrl: string
  purchased: boolean
  thumbnail?: string
  duration?: string
  lessons?: number
  level?: string
  instructor?: string
  category?: string
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description:
      "Master modern web development with HTML5, CSS3, JavaScript, React, Node.js, and MongoDB. Build 10+ real-world projects and become a full-stack developer.",
    price: 2999,
    videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
    notesUrl: "/notes/web-development.pdf",
    purchased: false,
    thumbnail: "/web-development-course.jpg",
    duration: "42 hours",
    lessons: 156,
    level: "Beginner to Advanced",
    instructor: "Sarah Johnson",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Data Science & Machine Learning Mastery",
    description:
      "Learn Python, pandas, NumPy, scikit-learn, TensorFlow, and Keras. Master data analysis, visualization, and build ML models for real business problems.",
    price: 3499,
    videoUrl: "https://www.youtube.com/embed/7eh4d6sabA0",
    notesUrl: "/notes/data-science.pdf",
    purchased: false,
    thumbnail: "/data-science-course.jpg",
    duration: "38 hours",
    lessons: 142,
    level: "Intermediate",
    instructor: "Dr. Michael Chen",
    category: "Data Science",
  },
  {
    id: "3",
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native. Learn navigation, state management, API integration, and app deployment.",
    price: 2799,
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
    notesUrl: "/notes/react-native.pdf",
    purchased: false,
    thumbnail: "/mobile-development-course.jpg",
    duration: "35 hours",
    lessons: 128,
    level: "Intermediate",
    instructor: "Alex Rodriguez",
    category: "Mobile Development",
  },
  {
    id: "4",
    title: "Cloud Computing with AWS",
    description:
      "Master Amazon Web Services (AWS) cloud platform. Learn EC2, S3, Lambda, RDS, and deployment strategies. Prepare for AWS certification exams.",
    price: 3299,
    videoUrl: "https://www.youtube.com/embed/3hLmDS179YE",
    notesUrl: "/notes/aws-cloud.pdf",
    purchased: false,
    thumbnail: "/cloud-computing-course.jpg",
    duration: "45 hours",
    lessons: 167,
    level: "Intermediate to Advanced",
    instructor: "Jennifer Park",
    category: "Cloud Computing",
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    description:
      "Learn ethical hacking, network security, cryptography, and risk assessment. Understand security frameworks and protect systems from cyber threats.",
    price: 2599,
    videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
    notesUrl: "/notes/cybersecurity.pdf",
    purchased: false,
    thumbnail: "/cybersecurity-course.jpg",
    duration: "32 hours",
    lessons: 118,
    level: "Beginner to Intermediate",
    instructor: "Robert Kim",
    category: "Cybersecurity",
  },
  {
    id: "6",
    title: "Digital Marketing & SEO Mastery",
    description:
      "Master digital marketing strategies, SEO optimization, social media marketing, Google Ads, and analytics. Grow your online presence and drive traffic.",
    price: 1999,
    videoUrl: "https://www.youtube.com/embed/9no-28-QKGo",
    notesUrl: "/notes/digital-marketing.pdf",
    purchased: false,
    thumbnail: "/digital-marketing-course.jpg",
    duration: "28 hours",
    lessons: 95,
    level: "Beginner",
    instructor: "Emma Thompson",
    category: "Digital Marketing",
  },
]

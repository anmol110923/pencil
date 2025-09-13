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
    title: "Applied Chemistry",
    description:
      "Explore fundamental chemistry concepts with practical applications in engineering and technology.",
    price: 1499,
    videoUrl: "/videos/applied-chemistry.mp4",
    notesUrl: "/notes/applied-chemistry.pdf",
    purchased: false,
    thumbnail: "/public/applied-chemistry.jpg",
    duration: "3 hours",
    lessons: 12,
    level: "Beginner",
    instructor: "Kunwar Anmol",
    category: "Chemistry",
  },
  {
    id: "2",
    title: "Applied Mathematics 1",
    description:
      "Master calculus, differential equations, and mathematical foundations for engineering.",
    price: 1499,
    videoUrl: "/videos/applied-math1.mp4",
    notesUrl: "/notes/applied-math1.pdf",
    purchased: false,
    thumbnail: "/public/applied-maths1.jpg",
    duration: "4 hours",
    lessons: 15,
    level: "Beginner",
    instructor: "Kunwar Anmol",
    category: "Mathematics",
  },
  {
    id: "3",
    title: "Applied Physics 1",
    description:
      "Understand fundamental physics principles and their applications in modern technology.",
    price: 1499,
    videoUrl: "/videos/applied-physics1.mp4",
    notesUrl: "/notes/applied-physics1.pdf",
    purchased: false,
    thumbnail: "/public/applied-physics1.jpg",
    duration: "3 hours",
    lessons: 12,
    level: "Beginner",
    instructor: "Nandini Rai",
    category: "Physics",
  },
  {
    id: "4",
    title: "Manufacturing Processes",
    description:
      "Understand fundamental mechanics principles and their applications in modern technology.",
    price: 1599,
    videoUrl: "/videos/manufacturing-processes.mp4",
    notesUrl: "/notes/manufacturing-processes.pdf",
    purchased: false,
    thumbnail: "/public/manufacturing-process.jpg",
    duration: "3 hours",
    lessons: 12,
    level: "Beginner",
    instructor: "Nandini Rai",
    category: "Mechanical Engineering",
  },
  {
    id: "5",
    title: "Programming in C",
    description:
      "Learn the fundamentals of programming with C language and problem-solving techniques.",
    price: 1299,
    videoUrl: "/videos/programming-in-c.mp4",
    notesUrl: "/notes/programming-in-c.pdf",
    purchased: false,
    thumbnail: "/public/C.jpg",
    duration: "4 hours",
    lessons: 14,
    level: "Beginner",
    instructor: "Kunwar Anmol",
    category: "Computer Science",
  },
  {
    id: "6",
    title: "Communication Skills",
    description:
      "Develop effective verbal and written communication skills for professional success.",
    price: 999,
    videoUrl: "/videos/communication-skills.mp4",
    notesUrl: "/notes/communication-skills.pdf",
    purchased: false,
    thumbnail: "/public/CS.jpg",
    duration: "2 hours",
    lessons: 8,
    level: "Beginner",
    instructor: "Nandini Rai",
    category: "Soft Skills",
  },
  {
    id: "7",
    title: "Electrical Science",
    description:
      "Explore electrical circuits, electronics, and electrical engineering fundamentals.",
    price: 1599,
    videoUrl: "/videos/electrical-science.mp4",
    notesUrl: "/notes/electrical-science.pdf",
    purchased: false,
    thumbnail: "/public/ES.jpg",
    duration: "3 hours",
    lessons: 12,
    level: "Beginner",
    instructor: "Kunwar Anmol",
    category: "Electrical Engineering",
  },
  {
    id: "8",
    title: "Environmental Science",
    description:
      "Study environmental systems, sustainability, and ecological conservation principles.",
    price: 1199,
    videoUrl: "/videos/environmental-science.mp4",
    notesUrl: "/notes/environmental-science.pdf",
    purchased: false,
    thumbnail: "/public/evs.jpg",
    duration: "2 hours",
    lessons: 8,
    level: "Beginner",
    instructor: "Kunwar Anmol",
    category: "Environmental Science",
  },
];

"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppState {
  isLoggedIn: boolean
  isAdmin: boolean
  purchasedCourses: string[]
  isDarkMode: boolean
  setLoggedIn: (status: boolean) => void
  setAdmin: (status: boolean) => void
  purchaseCourse: (courseId: string) => void
  toggleDarkMode: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      isAdmin: false,
      purchasedCourses: [],
      isDarkMode: false,
      setLoggedIn: (status) => set({ isLoggedIn: status }),
      setAdmin: (status) => set({ isAdmin: status }),
      purchaseCourse: (courseId) =>
        set((state) => ({
          purchasedCourses: [...state.purchasedCourses, courseId],
        })),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "collegindino-storage",
    },
  ),
)

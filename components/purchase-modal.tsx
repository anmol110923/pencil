"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAppStore } from "@/lib/store"
import { CheckCircle, CreditCard } from "lucide-react"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  courseTitle: string
  coursePrice: number
  courseId: string
}

export function PurchaseModal({ isOpen, onClose, courseTitle, coursePrice, courseId }: PurchaseModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)
  const { purchaseCourse } = useAppStore()

  const handlePurchase = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    purchaseCourse(courseId)
    setIsProcessing(false)
    setIsPurchased(true)

    // Auto close after success
    setTimeout(() => {
      setIsPurchased(false)
      onClose()
      window.location.reload() // Refresh to show purchased state
    }, 2000)
  }

  if (isPurchased) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-[#64ffda]" />
            </div>
            <DialogTitle className="text-2xl">Purchase Successful!</DialogTitle>
            <DialogDescription className="text-base">
              You now have access to <strong>{courseTitle}</strong>. Enjoy your learning journey!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Complete Your Purchase</DialogTitle>
          <DialogDescription className="text-base">
            You're about to purchase access to <strong>{courseTitle}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-medium">{courseTitle}</span>
              <span className="text-2xl font-bold text-[#64ffda]">₹{coursePrice}</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Demo Mode:</strong> Razorpay integration coming soon. This is a simulated purchase for
              demonstration purposes.
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} disabled={isProcessing} className="bg-transparent">
            Cancel
          </Button>
          <Button
            onClick={handlePurchase}
            disabled={isProcessing}
            className="bg-[#64ffda] text-black hover:bg-[#4fd1c7]"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Purchase Now - ₹{coursePrice}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

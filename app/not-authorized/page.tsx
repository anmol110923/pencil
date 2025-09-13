import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft } from "lucide-react"

export default function NotAuthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You don't have permission to access this page. Admin privileges are required.
        </p>
        <Button asChild className="bg-[#64ffda] text-black hover:bg-[#4fd1c7]">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

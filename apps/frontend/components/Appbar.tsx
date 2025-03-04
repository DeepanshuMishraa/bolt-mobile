'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Appbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between p-4 font-normal border-b border-border">
      <Link href="/" className="text-xl font-semibold">
        holt.new
      </Link>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </div>
    </div>
  )
}

export default Appbar

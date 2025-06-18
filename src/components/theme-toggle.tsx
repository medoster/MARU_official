"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? resolvedTheme : theme
  const toggleTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light"
    setTheme(nextTheme)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white">
      {currentTheme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

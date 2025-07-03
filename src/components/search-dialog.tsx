"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { CommandDialog, CommandInput } from "@/components/ui/command"

export default function SearchDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="p-2 text-white md:hidden"
      >
        <Search className="h-5 w-5" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <p className="p-4 text-center text-sm text-zinc-400">
          Coming soon
        </p>
      </CommandDialog>
    </>
  )
}

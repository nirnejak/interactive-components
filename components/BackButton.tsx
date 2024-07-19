"use client"
import * as React from "react"

import { ArrowBack } from "akar-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

const BackButton: React.FC = () => {
  const path = usePathname()

  if (path === "/") {
    return null
  } else {
    return (
      <div className="fixed left-8 top-8">
        <Link
          href={"/"}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 focus:bg-zinc-800"
        >
          <ArrowBack size={18} /> Back
        </Link>
      </div>
    )
  }
}

export default BackButton

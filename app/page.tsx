import * as React from "react"

import { type Metadata } from "next"

import { ArrowRight } from "akar-icons"
import Link from "next/link"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Interactive Components",
  description:
    "A Gallery of interactive components made with React, TailwindCSS, Framer Motion and TypeScript",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <div className="flex max-w-[580px] flex-col gap-3">
        <Link
          href="/dynamic-island/"
          className="group flex items-center gap-1.5 text-zinc-200"
        >
          <span>Dynamic Island</span>
          <span className="transition-all group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </Link>
        <Link
          href="/calculate-hex-alpha/"
          className="group flex items-center gap-1.5 text-zinc-200"
        >
          <span>Calculate HEX Alpha</span>
          <span className="transition-all group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </Link>
        <Link
          href="/exit-animation/"
          className="group flex items-center gap-1.5 text-zinc-200"
        >
          <span>Exit Animation</span>
          <span className="transition-all group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </main>
  )
}

export default Home

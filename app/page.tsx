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

const components = [
  { title: "Dynamic Island", link: "/dynamic-island/" },
  { title: "Calculate HEX Alpha", link: "/calculate-hex-alpha/" },
  { title: "Exit Animation", link: "/exit-animation/" },
  { title: "Dynamic Button", link: "/dynamic-button/" },
  { title: "Slider Tabs", link: "/slider-tabs/" },
  { title: "Animate Height", link: "/animate-height/" },
]

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <div className="flex max-w-[580px] flex-col gap-3">
        {components.map((component, i) => (
          <Link
            key={i}
            href={component.link}
            className="group flex items-center gap-1.5 text-zinc-200"
          >
            <span>{component.title}</span>
            <span className="transition-all group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home

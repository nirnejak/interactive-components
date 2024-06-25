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
  { title: "Slider Tabs", link: "/slider-tabs/" },
  { title: "Exit Animation", link: "/exit-animation/" },
  { title: "Dynamic Island", link: "/dynamic-island/" },
  { title: "Animate Height", link: "/animate-height/" },
  { title: "Dynamic Button", link: "/dynamic-button/" },
]

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <div className="mr-24 flex max-w-[580px] flex-col gap-3">
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

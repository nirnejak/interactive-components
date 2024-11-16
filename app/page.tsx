import * as React from "react"

import { type Metadata } from "next"

import { ArrowRight } from "akar-icons"
import Link from "next/link"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Interactive Interfaces",
  description:
    "A collection of interactive and animated components made with React, TailwindCSS, Framer Motion and TypeScript",
})

const components = [
  { title: "Jelly Tags", link: "/jelly-tags/" },
  { title: "Slider Tabs", link: "/slider-tabs/" },
  { title: "Airbnb Cards", link: "/airbnb-cards/" },
  { title: "Upvote Button", link: "/upvote-button/" },
  { title: "Exit Animation", link: "/exit-animation/" },
  { title: "Dynamic Island", link: "/dynamic-island/" },
  { title: "Animate Height", link: "/animate-height/" },
  { title: "Dynamic Button", link: "/dynamic-button/" },
  { title: "Gradual Content Loading", link: "/gradual-content-loading/" },
]

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <div className="max-w-[380px]">
        <h1 className="mb-4 font-serif text-3xl text-zinc-100">
          Interactive Interfaces
        </h1>
        <p className="mb-20 font-serif text-base text-zinc-300">
          A collection of interactive and animated components built with React,
          TypeScript, TailwindCSS & Framer Motion.
        </p>
        <div className="flex flex-col gap-3">
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
      </div>
    </main>
  )
}

export default Home

import * as React from "react"

import { type Metadata } from "next"

import DynamicIsland from "@/components/DynamicIsland"
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
      <DynamicIsland />
    </main>
  )
}

export default Home

import * as React from "react"

import { type Metadata } from "next"

import DynamicIsland from "@/components/DynamicIsland"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Dynamic Island | Interactive Components",
  description:
    "A Dynamic Island built for web with React, TypeScript and TailwindCSS",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <DynamicIsland />
    </main>
  )
}

export default Home
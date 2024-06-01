import * as React from "react"

import { type Metadata } from "next"

import DynamicIsland from "@/components/DynamicIsland"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Next.js App",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <DynamicIsland />
    </main>
  )
}

export default Home

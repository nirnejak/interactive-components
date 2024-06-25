import * as React from "react"

import { type Metadata } from "next"

import GradualContentLoading from "@/components/GradualContentLoading"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/gradual-content-loading/",
  title: "Gradual Content Loading | Interactive Components",
  description: "Gradual Content Loading",
})

const GradualContentLoadingPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <GradualContentLoading />
    </main>
  )
}

export default GradualContentLoadingPage

import * as React from "react"

import { type Metadata } from "next"

import CalculateHexAlpha from "@/components/CalculateHexAlpha"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/calculate-hex-alpha/",
  title: "Calculate HEX Alpha | Interactive Components",
  description: "Calculate alpha value for HEX color values",
})

const CalculateHexAlphaPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <CalculateHexAlpha />
    </main>
  )
}

export default CalculateHexAlphaPage

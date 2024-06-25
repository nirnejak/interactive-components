import * as React from "react"

import type { Viewport } from "next"

import { Inter, Source_Serif_4 } from "next/font/google"

import classNames from "utils/classNames"

import "../styles/main.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const serifFont = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
})

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body
        className={classNames(
          sansFont.variable,
          serifFont.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout

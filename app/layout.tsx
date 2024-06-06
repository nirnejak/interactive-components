import * as React from "react"

import type { Viewport } from "next"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import classNames from "utils/classNames"

import "../styles/main.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body
        className={classNames(
          GeistSans.variable,
          GeistMono.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout

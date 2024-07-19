import * as React from "react"

import type { Viewport } from "next"

import { Inter, Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

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

const monoFont = localFont({
  variable: "--font-mono",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="react-interactive-components.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body
        className={classNames(
          monoFont.variable,
          sansFont.variable,
          serifFont.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
        <div className="fixed bottom-4 flex w-full text-center text-sm text-zinc-400">
          <p className="mx-auto">
            Crafted by{" "}
            <a
              target="blank"
              href="https://nirnejak.com"
              className="transition-colors hover:text-zinc-300"
            >
              Jitendra Nirnejak
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

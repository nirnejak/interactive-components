import * as React from "react"

import type { Viewport } from "next"

import { Inter, IBM_Plex_Serif, Instrument_Serif } from "next/font/google"
import localFont from "next/font/local"

import BackButton from "@/components/BackButton"
import classNames from "utils/classNames"

import "../styles/main.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const serifFont = IBM_Plex_Serif({
  variable: "--font-serif",
  weight: ["400", "500"],
  subsets: ["latin"],
})

const instrumentSerifFont = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
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
          instrumentSerifFont.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
        <div className="fixed bottom-4 flex w-full text-center font-serif text-sm text-zinc-400">
          <p className="mx-auto">
            Crafted by{" "}
            <a
              target="blank"
              href="https://nirnejak.com"
              className="text-zinc-300 transition-colors hover:text-zinc-100"
            >
              Jitendra Nirnejak
            </a>
          </p>
        </div>
        <BackButton />
      </body>
    </html>
  )
}

export default RootLayout

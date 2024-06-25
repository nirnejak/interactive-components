"use client"
import * as React from "react"

import { motion } from "framer-motion"

const GradualContentLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="grid min-h-64 w-96 place-content-center rounded-lg bg-black p-8">
        {COPY.map((copy, index) => (
          <motion.p
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.12 * index + 1,
              type: "spring",
              bounce: 0,
            }}
            key={copy}
            className="mb-5 font-serif text-sm font-normal"
          >
            {copy}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

const COPY = [
  `The registration for the course opens on June 17th, 9AM EST.`,
  `When you purchase it, you'll get instant access to three 3 chapters, 2 interviews, a Discord invite, and a vault with useful links articles, videos, courses etc.`,
  `That's 16 lessons, 27 videos, more than 30 interactive examples, 15 exercises with a custom code editor, and a lot of code.`,
  `All future updates will be free. You'll get notified about a new lesson, interview, or an update to an existing lesson.`,
  `Students that purchased it, love it, but if you discover that it's not right for you, whatever the reason is, you can ask for a refund at any time by sending an email. No questions asked, and no hard feelings. `,
]

export default GradualContentLoading

"use client"
import * as React from "react"
import useMeasure from "react-use-measure"

import { AnimatePresence, motion } from "framer-motion"

const AnimateHeight: React.FC = () => {
  const [showExtraContent, setShowExtraContent] = React.useState(false)

  const [elementRef, bounds] = useMeasure()

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="grid h-64 w-96 place-content-center rounded-lg bg-black p-4 text-sm transition-all ease-out">
        <motion.div
          animate={{ height: bounds.height }}
          className="rounded-md bg-zinc-900 text-sm text-zinc-50"
        >
          <div ref={elementRef} className="p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            quas veniam
            {showExtraContent ? (
              <AnimatePresence>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  nemo iusto architecto quis iusto architecto quis corrupti
                  necessitatibus animi iure exercitationem? Nesciunt facere iste
                  dolor incidunt quaerat nihil earum corporis esse?
                </motion.p>
              </AnimatePresence>
            ) : (
              "..."
            )}
          </div>
        </motion.div>
      </div>

      <button
        className="rounded bg-zinc-300 px-3 py-1.5 text-sm text-zinc-900"
        onClick={() => {
          setShowExtraContent(!showExtraContent)
        }}
      >
        Toggle Content
      </button>
    </div>
  )
}

export default AnimateHeight

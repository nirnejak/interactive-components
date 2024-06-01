"use client"
import * as React from "react"

import useLinkHighlight from "@/hooks/useLinkHighlight"
import classNames from "@/utils/classNames"

interface Props {
  tabsOptions: string[]
  activeTab: number
  setActiveTab: (value: number) => void
  className?: string
}

const Tabs: React.FC<Props> = ({
  tabsOptions,
  activeTab,
  setActiveTab,
  className,
}) => {
  const { wrapperRef, highlightStyles } = useLinkHighlight(activeTab)

  return (
    <nav
      className={classNames("relative flex gap-1", className)}
      ref={wrapperRef}
    >
      <div
        style={highlightStyles}
        className="absolute left-0 h-full rounded-md bg-zinc-800 transition-all"
      />
      {tabsOptions.map((tab, index) => (
        <button
          key={index}
          className="relative inline-block rounded-md border border-transparent px-3 py-1.5 outline-none"
          onClick={() => {
            setActiveTab(index)
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

export default Tabs

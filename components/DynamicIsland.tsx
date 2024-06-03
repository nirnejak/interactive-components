"use client"
import * as React from "react"

import { ArrowCounterClockwise, Bell, Cross, Pause, Play } from "akar-icons"

import Tabs from "./Tabs"
import classNames from "@/utils/classNames"

const initialSeconds = 30

const DynamicIsland: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const [seconds, setSeconds] = React.useState(initialSeconds)
  const [isTimerActive, setIsTimerActive] = React.useState(false)

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isTimerActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(intervalId)
            return 0
          }
          return prevSeconds - 1
        })
      }, 1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isTimerActive])

  const renderIslandContent = (): React.ReactNode => {
    switch (activeTab) {
      case 0:
        return null
      case 1:
        return (
          <>
            <span className="flex w-10 items-center justify-center rounded-full bg-red-500 py-1.5">
              <Bell size={16} />
            </span>
            <span className="mr-2">Ring</span>
          </>
        )
      case 2:
        return (
          <>
            <div className="flex animate-fadeIn gap-2">
              <button
                className="ml-2 rounded-full bg-yellow-600/40 p-3 text-yellow-600"
                onClick={() => {
                  if (seconds === 0 && isTimerActive) {
                    setSeconds(initialSeconds)
                  }
                  setIsTimerActive(!isTimerActive)
                }}
              >
                {isTimerActive ? (
                  seconds === 0 ? (
                    <ArrowCounterClockwise />
                  ) : (
                    <Pause strokeWidth={5} />
                  )
                ) : (
                  <Play />
                )}
              </button>
              <button
                className="rounded-full bg-zinc-700 p-3"
                onClick={() => {
                  setActiveTab(0)
                  setSeconds(initialSeconds)
                }}
              >
                <Cross />
              </button>
            </div>
            <span className="mr-3 text-4xl font-light text-yellow-600">
              0:{seconds.toString().padStart(2, "0")}
            </span>
          </>
        )
    }
  }

  const tabClass = React.useMemo(() => {
    switch (activeTab) {
      case 0:
        return "w-32 h-10"
      case 1:
        return "w-44 h-10"
      case 2:
        return "w-72 h-20"
    }
  }, [activeTab])

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      <div
        className={classNames(
          "flex items-center justify-between rounded-full bg-black px-2 text-sm transition-all ease-out",
          tabClass
        )}
      >
        {renderIslandContent()}
      </div>
      <Tabs
        className="mt-10 text-zinc-200"
        tabsOptions={["Idle", "Ring", "Timer"]}
        activeTab={activeTab}
        setActiveTab={(nextTab) => {
          if (nextTab !== 2) {
            setSeconds(initialSeconds)
          }
          setIsTimerActive(nextTab === 2)
          setActiveTab(nextTab)
        }}
      />
    </div>
  )
}

export default DynamicIsland

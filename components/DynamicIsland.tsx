"use client"
import * as React from "react"

import { ArrowCounterClockwise, Bell, Cross, Pause, Play } from "akar-icons"

import Tabs from "./Tabs"
import classNames from "@/utils/classNames"

const initialSeconds = 30

const DynamicIsland: React.FC = () => {
  const [state, setState] = React.useState(0)

  const [seconds, setSeconds] = React.useState<number>(initialSeconds)
  const [isActive, setIsActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isActive) {
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
  }, [isActive])

  const renderIslandContent = (): React.ReactNode => {
    switch (state) {
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
                  if (seconds === 0 && isActive) {
                    setSeconds(initialSeconds)
                  }
                  setIsActive(!isActive)
                }}
              >
                {isActive ? (
                  seconds === 0 ? (
                    <ArrowCounterClockwise />
                  ) : (
                    <Pause />
                  )
                ) : (
                  <Play />
                )}
              </button>
              <button
                className="rounded-full bg-zinc-700 p-3"
                onClick={() => {
                  setState(0)
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

  const stateClass = React.useMemo(() => {
    switch (state) {
      case 0:
        return "w-32 h-10"
      case 1:
        return "w-44 h-10"
      case 2:
        return "w-72 h-20"
    }
  }, [state])

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      <div
        className={classNames(
          stateClass,
          "flex items-center justify-between rounded-full bg-black px-2 text-sm transition-all ease-out"
        )}
      >
        {renderIslandContent()}
      </div>
      <div className="mt-10 text-zinc-200">
        <Tabs
          tabsOptions={["Idle", "Ring", "Timer"]}
          activeTab={state}
          setActiveTab={(tab) => {
            if (tab !== 2) {
              setSeconds(initialSeconds)
            }
            setIsActive(tab === 2)
            setState(tab)
          }}
        />
      </div>
    </div>
  )
}

export default DynamicIsland

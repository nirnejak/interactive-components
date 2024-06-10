"use client"
import * as React from "react"

const CalculateHexAlpha: React.FC = () => {
  const [percentage, setPercentage] = React.useState("")

  const hexValue = React.useMemo(() => {
    const num = Number(percentage)
    if (isNaN(num) || num < 0 || num > 100) {
      return "00" // Default values for out-of-range or invalid inputs
    }
    // const decimalValue = ((255 * num) / 100).toFixed(2)
    const hexValue = Math.round((255 * num) / 100)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase()
    return hexValue
  }, [percentage])

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      <div className="rounded-lg bg-black p-4 text-center text-sm transition-all ease-out">
        <h1 className="mb-4 text-4xl text-white">
          {percentage === "" ? "00" : hexValue}
        </h1>
        <input
          type="number"
          value={percentage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPercentage(e.target.value)
          }}
          min={0}
          max={100}
          className="w-48 rounded-md bg-zinc-900 px-3 py-2.5 text-center text-zinc-300 placeholder:text-zinc-400 focus:outline-none"
          placeholder="Percent"
        />
      </div>
    </div>
  )
}

export default CalculateHexAlpha

import React, { useEffect, useRef } from "react"
import { Button, useColorMode } from "theme-ui"

export const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    const changeColorMode = e => {
      e.matches ? setColorMode("dark") : setColorMode("light")
    }

    changeColorMode(window.matchMedia("(prefers-color-scheme: dark)"))

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", changeColorMode)

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", changeColorMode)
  }, [])
  return (
    <Button
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      {colorMode === "default" ? "⚫️" : "⚪️"}
    </Button>
  )
}

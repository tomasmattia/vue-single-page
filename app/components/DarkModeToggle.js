"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className="w-5"
      onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default DarkModeToggle
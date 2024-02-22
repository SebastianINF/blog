'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from '@/components/icons'
import { useEffect } from 'react'

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme()

  const toogleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button onClick={toogleTheme} className='text-white ml-2'>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}

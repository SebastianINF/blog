'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from '@/components/icons'

export default function DarkModeButton() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const toogleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    document
  }
  return (
    <button onClick={toogleTheme} className='text-white ml-2'>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}

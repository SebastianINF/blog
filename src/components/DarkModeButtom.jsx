'use client'

import { useState, useEffect } from 'react'
import SvgMoon from './SvgMoon'
import SvgSun from './SvgSun'

export default function DarkModeButtom() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  },[theme])

  const handleChangeTheme = () => {
    setTheme(previo => (previo === 'light' ? 'dark' : 'light'))
  }
  return (
    <button onClick={handleChangeTheme} className='text-white ml-2'>
      {theme === 'light' ? <SvgMoon /> : <SvgSun />}
    </button>
  )
}

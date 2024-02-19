'use client'
import { useState, useEffect, createRef } from 'react'
import ClipboardJS from 'clipboard'
import { ClipBoard, Check } from './icons'

export default function ClipBoardButton({ code }) {
  const buttonRef = createRef()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current, {
      text: () => code
    })

    clipboard.on('success', () => {
      console.log('Código copiado al portapapeles:')
    })

    return clipboard.destroy()
  }, [buttonRef, code])

  return (
    <button
      className={`z-10  hover:bg-custom-black flex justify-center items-center border-none p-[1px] cursor-pointer rounded ${
        loading ? 'text-green-500' : 'text-white'
      }`}
      onClick={handleClick}
      ref={buttonRef}
    >
      {loading ? <Check /> : <ClipBoard />}
    </button>
  )
}

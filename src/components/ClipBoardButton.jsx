import { useState, useEffect, createRef } from 'react'
import ClipboardJS from 'clipboard'
import { ClipBoard, Check } from './icons'

export default function ClipBoardButton({ code }) {
  const buttonRef = createRef()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current, {
      text: () => code
    })

    // eslint-disable-next-line no-unused-vars
    clipboard.on('success', e => {
      console.log('Código copiado al portapapeles:')
    })

    return () => {
      clipboard.destroy()
    }
  }, [buttonRef, code])

  return loading ? (
    <button
      className='z-10 hover:bg-custom-black flex justify-center items-center border-none p-[1px] cursor-pointer rounded text-green-500'
      ref={buttonRef}
    >
      <Check />
    </button>
  ) : (
    <button
      className='z-10 flex justify-center items-center border-none p-[1px] cursor-pointer rounded text-white hover:bg-custom-black'
      ref={buttonRef}
      onClick={handleClick}
    >
      <ClipBoard />
    </button>
  )
}

import { useState, useEffect, createRef } from 'react'
import ClipboardJS from 'clipboard'

export default function ClipBoardButton({ code }) {
  const buttonRef = createRef()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
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
    <button className='z-10 hover:bg-custom-black flex justify-center items-center border-none p-[1px] cursor-pointer rounde' ref={buttonRef}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-check'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke='currentColor'
        fill='none'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M5 12l5 5l10 -10' />
      </svg>
    </button>
  ) : (
    <button className='z-10 hover:bg-custom-black flex justify-center items-center border-none p-[3px] cursor-pointer rounded ' ref={buttonRef} onClick={handleClick}>
      <svg
        className='z-20 flex items-center justify-center w-[20px] h-[20px] fill-slate-300'
        aria-hidden='true'
        height='24'
        viewBox='0 0 16 16'
        version='1.1'
        width='24'
        data-view-component='true'
      >
        <path d='M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z'></path>
        <path d='M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z'></path>
      </svg>
    </button>
  )
}

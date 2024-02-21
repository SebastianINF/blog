'use client'
import { useState } from 'react'
import { Link } from './icons'

export default function Title({ id, children, type = 'h1' }) {
  const [isShow, setIsShown] = useState(false)
  const HeadingTag = type || 'h1'
  return (
    <HeadingTag
      id={id}
      className='w-full flex  items-center text-center relative border-b border-slate-300 my-1 py-2 fonto-bold'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <a
        href={`#${id}`}
        className={`absolute right-full m-0 mx-0 pr-1 ${
          isShow ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      </a>
      {children}
    </HeadingTag>
  )
}

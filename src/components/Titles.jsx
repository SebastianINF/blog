import { useState } from 'react'
import LinkIcon from './LinkIcon'

export function H1({ children, id }) {
  const [mouseOver, setMouseOver] = useState(false)

  const handleMouseOver = () => {
    setMouseOver(true)
  }
  const handleMouseOut = () => {
    setMouseOver(false)
  }

  return (
    <div className='flex flex-col justify-center'>
      <h1
        className='flex items-center text-3xl font-bold py-5'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        id={id}
      >
        {children}
        {mouseOver ? <LinkIcon /> : null}
      </h1>
    </div>
  )
}

export function H2({ children, id }) {
  const [mouseOver, setMouseOver] = useState(false)

  const handleMouseOver = () => {
    setMouseOver(true)
  }
  const handleMouseOut = () => {
    setMouseOver(false)
  }

  return (
    <div className='flex flex-col justify-center'>
      <h2
        className='flex items-center text-2xl font-bold py-3'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        id={id}
      >
        {children}
        {mouseOver ? <LinkIcon /> : null}
      </h2>
    </div>
  )
}

export function H3({ children, id }) {
  const [mouseOver, setMouseOver] = useState(false)

  const handleMouseOver = () => {
    setMouseOver(true)
  }
  const handleMouseOut = () => {
    setMouseOver(false)
  }

  return (
    <div className='flex flex-col justify-center'>
      <h3
        className='flex items-center text-xl font-bold py-3'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        id={id}
      >
        {children}
        {mouseOver ? <LinkIcon /> : null}
      </h3>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import DarkModeButton from './DarkModeButton'
import { GitHub } from './icons'

export default function Navbar() {
  return (
    <nav className='bg-slate-800 w-full fixed top-0 right-0 left-0 z-10'>
      <div className='dark:bg-blue-30 flex justify-between items-center mx-auto max-w-5xl py-3 h-[80px]'>
        <section className='flex items-center px-4 justify-center h-full'>
          <Link href='/'>
            <Image
              src='/images/perfil.png'
              className='items-center cursor-pointer rounded-full w-[60px] h-[60px] sm:hidden'
              width={60}
              height={60}
              quality={100}
              alt='image of perfil'
            />
          </Link>
        </section>
        <ul className='flex justify-between items-center mx-4'>
          <a href='https://github.com/SebastianINF' target='_blank' rel='noreferrer'>
            <GitHub />
          </a>
          <DarkModeButton />
          <li className='px-4'>
            <Link
              href='/'
              className='cursor-pointer dark:hover:text-white hover:text-white'
            >
              Layout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

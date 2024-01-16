import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='bg-slate-800 w-svw fixed top-0 right-0 left-0 z-10'>
      <div className='bg-blue-30 flex justify-between items-center mr-auto ml-auto max-w-5xl py-3'>
        <section className='flex items-center px-4 justify-center'>
          <Link href='/'>
            <Image
              className='flex items-center cursor-pointer rounded-full'
              src='/perfil.png'
              width={60}
              height={60}
              alt='image of perfil'
            />
          </Link>
        </section>
        <ul className='flex justify-between items-center mx-4'>
          <li className='px-4'>
            <Link href='/' className='cursor-pointer hover:text-orange-600'>
              Home
            </Link>
          </li>
          <li className='px-4'>
            <Link
              href='/about'
              className='cursor-pointer  hover:text-orange-600'
            >
              About
            </Link>
          </li>
          <li className='px-4'>
            <Link
              href='/contact'
              className='cursor-pointer  hover:text-orange-600'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

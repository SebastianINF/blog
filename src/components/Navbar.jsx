import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-slate-700 w-svw sticky'>
      <div className='bg-blue-30 flex justify-between items-center mr-auto ml-auto max-w-5xl'>
        <section className='size-10 flex items-center hover:text-gray-300 cursor-pointer px-4'>Logo</section>
        <ul className='flex justify-between items-center'>
          <li className='px-4'>
            <Link href='/' className='cursor-pointer hover:text-gray-400'>Home</Link>
          </li>
          <li className='px-4'>
            <Link href='/about' className='cursor-pointer  hover:text-gray-400'>About</Link>
          </li>
          <li className='px-4'>
            <Link href='/contact' className='cursor-pointer  hover:text-gray-400'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-slate-800 w-svw sticky'>
      <div className='bg-blue-30 flex justify-between items-center mr-auto ml-auto max-w-5xl py-3'>
        <section className='size-10 flex items-center cursor-pointer px-4'><h1 className='bold size-10 text-center flex items-center hover:text-orange-500'>Logo</h1></section>
        <ul className='flex justify-between items-center'>
          <li className='px-4'>
            <Link href='/' className='cursor-pointer hover:text-orange-600'>Home</Link>
          </li>
          <li className='px-4'>
            <Link href='/about' className='cursor-pointer  hover:text-orange-600'>About</Link>
          </li>
          <li className='px-4'>
            <Link href='/contact' className='cursor-pointer  hover:text-orange-600'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

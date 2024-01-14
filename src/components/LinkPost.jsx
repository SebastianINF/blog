import Link from 'next/link'
import Image from 'next/image'

export default function LinkPost({post}) {
  return (
    <Link
      href={`posts/${post}`}
      className='px-2 border-b-blue-600 border-b-2 w-full flex py-3 justify-between hover:bg-slate-800 bg-transparent'
    >
      <Image
        width={20}
        height={20}
        src={'/javascript.png'}
        alt='imagen de javascript'
      />
      {post}
    </Link>
  )
}

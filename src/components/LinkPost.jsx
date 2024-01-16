import Link from 'next/link'
import Image from 'next/image'
import getData from '@/lib/getData'

export default async function LinkPost({ postUrl, title }) {
  const data = await getData(postUrl)

  return (
    <Link
      href={`posts/${postUrl}`}
      className='px-2 dark:border-b-blue-600 border-b-2 w-full flex items-center py-3 justify-between dark:hover:bg-slate-800 dark:bg-transparent dark:hover:text-white dark:text-blue-600 border-zinc-800 text-black hover:text-blue-600 hover:border-b-blue-600'
    >
      <div className='flex items-center'>
        <Image
          className='mx-0'
          width={40}
          height={40}
          src={`/${data.data.image}.png`}
          alt={`image of ${data.data.image}`}
        />
        <div className='ml-3'>
          <h3 className='m-0'>{data.data.title}</h3>
          <span className='text-xs font-montserrat'>{data.data.fecha}</span>
        </div>
      </div>
    </Link>
  )
}

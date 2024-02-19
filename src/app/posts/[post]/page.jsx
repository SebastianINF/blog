import Article from '@/components/Article'
import getData from '@/lib/getData'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function PostPage({ params }) {
  const data = getData()

  const match = data.filter(value => value.id === params.post)[0]

  if (match.length === 0) return notFound()

  const { id, title, description, image, content, date } = match

  return (
    <>
      <div className='flex py-5 items-center'>
        <Image
          src={`/images/${image}.png`}
          width={40}
          height={40}
          alt={`image of ${image}`}
        />
        <h1 className='font-bold text-3xl ml-3 my-0'>{title}</h1>
      </div>
      <p className='text-xl m-0'>{description}</p>
      <span className='text-sm font-montserrat'>{date}</span>
      <Article content={content} />
    </>
  )
}

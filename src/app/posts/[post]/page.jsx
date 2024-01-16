import Article from '@/components/Article'
import getData from '@/lib/getData'
import Image from 'next/image'

export default async function PostPage({ params }) {
  const { data, content } = await getData(params.post)

  return (
    <>
      <div className='flex py-5 items-center'>
        <Image src={`/${data.image}.png`} width={40} height={40} alt={`image of ${data.image}`} />
        <h1 className='font-bold text-3xl ml-3 my-0'>{data.title}</h1>
      </div>
        <p className='text-xl m-0'>{data.description}</p>
        <span className='text-sm font-montserrat'>{data.fecha}</span>
      <Article content={content} />
    </>
  )
}

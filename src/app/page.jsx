import LinkItem from '@/components/LinkItem'
import getData from '@/lib/getData'

export default function Home() {
  const posts = getData()

  return (
    <>
      <h1 className='font-bold m-0 text-5xl py-5'>Blog</h1>
      <p className='text-xl py-4'>
        Aquí te comparto mis notas sobre temas de desarrollo web: artículos, tutoriales,
        teoría, fragmentos de código, presentaciones y uno que otro pensamiento.
      </p>
      <h2 className='py-3 font-bold text-xl'>Últimos artículos</h2>
      <nav className='flex flex-col items-center w-full'>
        {posts.map(post => (
          <LinkItem key={post.id} postUrl={post.id} />
        ))}
      </nav>
    </>
  )
}

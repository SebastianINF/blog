import LinkPost from "@/components/LinkPost"
import getNamesPosts  from "@/lib/getNamesPosts"

export default async function Home() {
  const names = await getNamesPosts()
  
  return (
    <>
      <h1>Blog</h1>
      <p>
        Aquí te comparto mis notas sobre temas de desarrollo web: artículos,
        tutoriales, teoría, fragmentos de código, presentaciones y uno que otro
        pensamiento.
      </p>
      <h2>Articulos</h2>
      <nav className='flex flex-col items-center w-full'>
        {
          names.map((o,i)=> <LinkPost key={i} post={o.params.posts} />)
        }
      </nav>
    </>
  )
}



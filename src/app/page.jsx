import LinkPost from "@/components/LinkPost"
import getData from "@/lib/getData"
import getNamesPosts  from "@/lib/getNamesPosts"

export default async function Home() {
  const names = await getNamesPosts()
  
  return (
    <>
      <h1 className="fonto-bold m-0 text-5xl py-5">Blog</h1>
      <p className="text-xl py-4">
        Aquí te comparto mis notas sobre temas de desarrollo web: artículos,
        tutoriales, teoría, fragmentos de código, presentaciones y uno que otro
        pensamiento.
      </p>
      <h2 className="py-3 font-bold text-xl">Últimos artículos</h2>
      <nav className='flex flex-col items-center w-full'>
        {
          names.map((o,i)=> <LinkPost key={i} postUrl={o.params.posts}/>)
        }
      </nav>
    </>
  )
}



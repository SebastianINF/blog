import Article from '@/components/Article'
import getData from '@/lib/getData'

export default async function PostPage({ params }) {
  const { data, content } = await getData(params.post)
  
  return <Article content={content} />
}


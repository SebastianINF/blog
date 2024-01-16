import path from 'node:path'
import fs from 'node:fs'

const getNamesPosts = async () => {
  // genera las rutas dinamicas del proyecto
  const postsDirectory = path.join(process.cwd(), 'posts')
  const markdownFiles = fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))

  const names = markdownFiles.map(file => ({
    params: { posts: path.basename(file, '.md') }
  }))

  return names
}

export default getNamesPosts

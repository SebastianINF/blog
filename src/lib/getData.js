import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'

const getData = async post => {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${post}.md`)
  const markdownContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(markdownContent)
  return {
    data,
    content
  }
}

export default getData

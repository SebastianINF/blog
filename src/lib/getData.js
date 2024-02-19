import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'
import { POST_DIRECTORY } from './constants'

const getData = () => {
  const fileNames = fs.readdirSync(POST_DIRECTORY)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(POST_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    return a.date < b.date ?  1: -1
  })
}

export default getData

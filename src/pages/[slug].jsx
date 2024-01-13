// src/pages/[slug].js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from '@/lib/one-dark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import rehypeRaw from 'rehype-raw'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import LinkIcon from '../components/LinkIcon'
import rehypeKatex from 'rehype-katex'
import { v4 as uuiv4 } from 'uuid'
import ClipBoardButton from '../components/ClipBoard'
import 'katex/dist/katex.min.css'
import '@/styles/pages.css'

//
const PostPage = data => {
  // Este componente es llamado por nextjs
  console.log(data)

  return (
    <>
      <h1>{data.data.title}</h1>
      <p>{data.data.description}</p>
      <Markdown
        children={data.content}
        remarkPlugins={[remarkGfm, remarkMath, remarkToc, remarkSlug]}
        rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSlug]}
        components={{
          code: function (props) {
            // eslint-disable-next-line react/prop-types, no-unused-vars
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')

            return match ? (
              <div style={{ position: 'relative' }} key={uuiv4()}>
                <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
                  <ClipBoardButton code={node.children[0].value} />
                </div>
                <SyntaxHighlighter
                  {...rest}
                  PreTag='div'
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={oneDark}
                />
              </div>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
          // eslint-disable-next-line no-unused-vars
          h1: function ({ children, id }) {
            return (
              <h1 style={{ display: 'flex', alignItems: 'center' }} id={id}>
                <LinkIcon />
                {children}
              </h1>
            )
          },
          // eslint-disable-next-line no-unused-vars
          h2: function ({ children, id }) {
            return (
              <h2 style={{ display: 'flex', alignItems: 'center' }} id={id}>
                <LinkIcon />
                {children}
              </h2>
            )
          },
          // eslint-disable-next-line no-unused-vars
          h3: function ({ children, id }) {
            return (
              <h3 style={{ display: 'flex', alignItems: 'center' }} id={id}>
                <LinkIcon />
                {children}
              </h3>
            )
          },
          input: function ({ checked, type }) {
            if (!checked) checked = false

            return (
              <input
                disabled={false}
                type={type}
                checked={checked}
                readOnly
              ></input>
            )
          }
        }}
      />
    </>
  )
}

// lo llama automaticamente nextjs
export async function getStaticPaths() {
  // genera las rutas dinamicas del proyecto
  const postsDirectory = path.join(process.cwd(), 'posts')
  const markdownFiles = fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))

  const paths = markdownFiles.map(file => ({
    params: { slug: path.basename(file, '.md') }
  }))

  return { paths, fallback: false }
}

// lo llama automaticamente nextjs
export async function getStaticProps({ params }) {
  // genera los datos del proyecto
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${params.slug}.md`)
  const markdownContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(markdownContent)

  return {
    props: {
      data,
      content
    }
  }
}

export default PostPage

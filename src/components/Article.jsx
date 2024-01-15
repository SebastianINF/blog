'use client'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from '@/lib/one-dark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import rehypeRaw from 'rehype-raw'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import { v4 as uuiv4 } from 'uuid'
import ClipBoardButton from '@/components/ClipBoardIcon'
import { H1, H2, H3 } from '@/components/Titles'
import 'katex/dist/katex.min.css'
import '@/styles/global.css'

export default function Article({content}) {

  return (
     <Markdown
      children={content}
      remarkPlugins={[remarkGfm, remarkMath, remarkToc, remarkSlug]}
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSlug]}
      components={{
        code: function (props) {
          // eslint-disable-next-line react/prop-types, no-unused-vars
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')

          return match ? (
            <div className='relative my-4' key={uuiv4()}>
              <div className='absolute top-1 right-1'>
                <ClipBoardButton code={node.children[0].value} />
              </div>
              <SyntaxHighlighter
                {...rest}
                PreTag='div'
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
          return <H1 children={children} id={id} />
        },
        // eslint-disable-next-line no-unused-vars
        h2: function ({ children, id }) {
          return <H2 children={children} id={id} />
        },
        // eslint-disable-next-line no-unused-vars
        h3: function ({ children, id }) {
          return <H3 children={children} id={id} />
        },
        input: function ({ checked, type }) {
          if (!checked) checked = false

          return (
            <input
              readOnly
              disabled={false}
              type={type}
              checked={checked}
            ></input>
          )
        },
        summary: function ({children}) {

          return (
            <summary className='hover:text-orange-600 cursor-pointer select-none text-white' >
              {children}
            </summary>
          )
        } 
      }}
    />
  )
}

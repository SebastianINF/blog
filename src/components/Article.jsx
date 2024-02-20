import Markdown from 'react-markdown'
import Title from './Title'
import ClipBoardButton from './ClipBoardButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import rehypeRaw from 'rehype-raw'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'

import { oneDark } from '@/lib/one-dark'
import 'katex/dist/katex.min.css'
import '@/styles/index.css'

export default function Article({ content }) {
  return (
    <Markdown
      className='prose dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent
      prose-p:flex prose-p:flex-wrap prose-img:gap-2 prose-a:mx-1 prose-img:my-2 prose-pre:overflow-auto'
      children={content}
      remarkPlugins={[remarkGfm, remarkMath, remarkToc, remarkSlug]}
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSlug]}
      components={{
        code: function (props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')

          return match ? (
            <div className='relative my-4'>
              <div className='absolute top-1 right-1 -z-0'>
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
        h1: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        },
        h2: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        },
        h3: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        },
        h4: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        },
        h5: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        },
        h6: function (props) {
          const {
            id,
            children,
            node: { tagName }
          } = props
          return (
            <Title type={tagName} id={id}>
              {children}
            </Title>
          )
        }
      }}
    />
  )
}

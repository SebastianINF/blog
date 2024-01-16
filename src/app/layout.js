import { Inter, Montserrat } from 'next/font/google'
import '@/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter' // <-- variable que se puede usar luego en el css
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat' // <-- variable que se puede usar luego en el css
})

/**
 * configuracion de la metadata
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export const metadata = {
  title: 'My blog',
  description:
    'My personal blog make for me',
  authors: [{ name: 'Sebastian' }], // varios autores
  creator: 'Sebastian Cespedes Rodas',
  publisher: 'Sebastian'
}

// lEER : https://nextjs.org/docs/app/building-your-application/routing
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/perfil.png" sizes="any"/>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-montserrat`}
      >
        <header className='relative mt-32'>
          <Navbar />
        </header>
        <main className='max-w-[48rem] mx-auto px-5'>{children}</main>
        <footer className='w-screen m-0 flex flex-col min-h-[100vh]'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

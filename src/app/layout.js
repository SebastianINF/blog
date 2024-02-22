import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { Providers } from '@/components/provider/providers'
import { inter, robotoMono } from '@/styles/fonts'
import '@/styles/global.css'

// forma de aplicar fuentes sin tailwind

/**
 * configuracion de la metadata
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export const metadata = {
  title: 'My blog',
  description: 'My personal blog make for me',
  authors: [{ name: 'Sebastian' }], // varios autores
  creator: 'Sebastian Cespedes Rodas',
  publisher: 'Sebastian'
}

// lEER : https://nextjs.org/docs/app/building-your-application/routing
export default function RootLayout({ children }) {
  return (
    <html lang='en'  >
      <head>
        <link rel='icon' href='/images/javascript.png' />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-inter`}>
        <Providers >
          <header className='relative mt-32'>
            <Navbar />
          </header>
          <main className='max-w-[48rem] mx-auto px-10'>{children}</main>
          <div className='w-screen m-0 flex flex-col min-h-[100vh]'>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

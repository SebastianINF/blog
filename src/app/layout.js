import { Roboto } from 'next/font/google'
import '@/styles/global.css'
import Navbar from '@/components/Navbar'

const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto' // <-- variable que se puede usar luego en el css
})

/**
 * configuracion de la metadata
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export const metadata = {
  title: 'My next app',
  description:
    'Proyecto para entender next js para usarlo en mis proximos proyectos',
  authors: [{ name: 'Sebastian' }, { name: 'Josh', url: 'https://nextjs.org' }], // varios autores
  creator: 'Sebastian Cespedes Rodas',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  metadataBase: new URL('https://acme.com'), // si acceden a esta ruta los redirige a la ruta de la pagina en producction
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
  openGraph: {
    // configuracion de la url cuando se comparta con otros usuarios
    title: 'My next app',
    description:
      'Proyecto para entender next js para usarlo en mis proximos proyectos',
    type: 'article',
    publishedTime: '2024-13-01T00:00:00.000Z',
    authors: ['Sebastian', 'Josh']
  },
  robots: {
    // configuracion para indicarle a los bots de google como indexar la pagina web
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

// lEER : https://nextjs.org/docs/app/building-your-application/routing
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} font-mono`}>
        <header>
          <Navbar />
        </header>
        <main className='max-w-16'>{children}</main>
      </body>
    </html>
  )
}

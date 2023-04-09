import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useRouter } from 'next/router'

const myFont = localFont({
  src: './fonts/IRANSansXV.woff2',
  variable: '--font-Iransans',
})
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${myFont.variable} bg-light dark:bg-dark w-full min-h-screen font-sans `}
      >
        <Navbar />
        {/* Create an Error */}
        {/* <AnimatePresence mode="wait"> */}
        <Component key={router.asPath} {...pageProps} />
        {/* </AnimatePresence> */}
        <Footer />
      </main>
    </>
  )
}

import Layout from '../components/Layout'
import Head from "next/head"
import '../styles/globals.css'

import { AnimatePresence} from "framer-motion"

function MyApp({ Component, pageProps }) {

  const variants = {
    initialFadeIn:{
      opacity:0,
      transition:{
        duration:.3,
      }
    },
    animatedFadeIn:{
      opacity:1,
      transition:{
        duration:.3,
      }
    }
  }

  return(
    <>
    <Head>
      <title>No Ordinary Self</title>
    </Head>
    <Layout>
      <AnimatePresence>
        <Component {...pageProps} variants={variants}/>
      </AnimatePresence>
    </Layout>
    </>
  )
}

export default MyApp

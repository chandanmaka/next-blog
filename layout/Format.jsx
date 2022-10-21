import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Head from 'next/head'

export default function Format({children}) {
  return (
    <div>
        <Head>
            <title>Blog</title>
        </Head>
        <Header/>
        <main>{children}</main>
        <Footer />
    </div>
  )
}

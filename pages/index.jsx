import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Vision from '../components/Vision'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Yugiro Advocacia</title>
        <meta name="title" content="Yugiro Advocacia"/>
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo."/>

        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Yugiro Advocacia"/>
        <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo."/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Yugiro Advocacia"/>
        <meta property="twitter:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eum quo."/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
      </Head>

      <Hero />
      <Services />
      <About />
      <Vision />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

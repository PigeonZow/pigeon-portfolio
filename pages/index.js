import Head from 'next/head'
// import Image from 'next/image'
// import Script from 'next/script'
// import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        {/* <Script src="../node_modules/tw-elements/dist/js/index.min.js" strategy='beforeInteractive'></Script> */}
        <title>Pigeon's Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <main className="min-h-screen flex flex-1 flex-col">
        <Nav/>
        <Banner src="/img/pigeon-on-computer-banner.png"/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

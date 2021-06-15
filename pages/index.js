import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>{siteTitle} | Login</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <p>Use NextAuth for identification</p>
      </main>

      
    </div>
    </Layout>
  )
}

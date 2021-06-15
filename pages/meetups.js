import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/Home.module.css";
import Nav from '../components/Nav'

export default function Events() {
    return (
        <Layout>
          <div className={styles.main}>
            <Head>
              <title>{siteTitle} | Meetups</title>
            </Head>
            <main>
              <div>
              <p>Render the meetups here</p>
              </div>
            </main>
            </div>
            <Nav />
        </Layout>
    )
}
import Head from "next/head";
import styles from "./Layout.module.css";

const name = "Play-Date";
export const siteTitle = "Play-Date";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Play-Date" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 className={styles.header}>Play-Date</h1>

      <main className={styles.main}>{children}</main>
    </div>
  );
}

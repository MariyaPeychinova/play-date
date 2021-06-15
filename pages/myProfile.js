import Head from 'next/head';
import Layout, { siteTitle } from "../components/Layout";
import Nav from '../components/Nav';
import styles from "../styles/Home.module.css";

export default function MyProfile() {
return (
    <Layout>
      <div className={styles.profile}>
        <Head>
          <title>{siteTitle} | My Profile</title>
        </Head>
        <main>
        <div>
            <h1>My Profile</h1>
            
                <h3>Username</h3>
                
                <h3>About Me</h3>
                
                <h3>Location</h3>
                
                <h3>Date of Birth</h3>
                
                <h3>Gender</h3>
                
                <h3>My Events</h3>
                <ul>
                  
                </ul>
                
          </div>
        </main>
        </div>
        <Nav />
    </Layout>
);
}
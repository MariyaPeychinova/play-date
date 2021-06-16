import Head from "next/head";
import Link from 'next/link';
import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/Home.module.css";
import Nav from '../components/Nav';
import { getAllMeetupsData } from '../database/model';

export async function getServerSideProps() {
    const allMeetups = await getAllMeetupsData();
    console.log(`allMeetups: ${allMeetups}`);
    const meetupData = JSON.stringify(allMeetups);

    return {
        props: { meetupData },
    };
}

export default function Meetups({ meetupData }) {
    const meetupsArray = JSON.parse(meetupData);
    
    return (
        <Layout>
          <div className={styles.main}>
            <Head>
              <title>{siteTitle} | Meetups</title>
            </Head>
            <main>
              <div>
              <p>Render the meetups here</p>
              { meetupsArray.map((meetup) => {
                  return (
                      <Link href='/meetups/[id]' as={`/meetups/${meetup.id}`}>
                          <a>
                              <div key={meetup.id}>
                                <h2>Meetup:</h2>
                                {meetup.meetup_title}
                                <h2>Location:</h2>
                                {meetup.location}
                                <h2>Date:</h2>
                                {meetup.date}
                                <h2>Time:</h2>
                                {meetup.time}
                              </div>
                          </a>
                      </Link>
                  )
              })}
              </div>
            </main>
            </div>
            <Nav />
        </Layout>
    )
}
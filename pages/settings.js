import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Nav from '../components/Nav';
import styles from "../styles/Home.module.css";

export default function Settings() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} | Settings</title>
            </Head>
            <Nav />
        </Layout>
    )
}
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import HomeStyles from "@/styles/Homse.module.css";
import SideNavPage from "./sidenav-page/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>SideNav || Tabs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <body className={styles.body}></body>
      </Head>
      <main>
        <SideNavPage />
      </main>
    </>
  );
}

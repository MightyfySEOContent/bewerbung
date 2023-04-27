import styles from "@/styles/Home.module.css";

import Head from "next/head";

function Home() {
    return (
        <>
            <Head>
                <title>Bewerber-Quiz - FizzBuzz - Autohaus König</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1>Willkommen zum Bewerber Quiz - FizzBuzz</h1>
            </main>
        </>
    );
}

export default Home;

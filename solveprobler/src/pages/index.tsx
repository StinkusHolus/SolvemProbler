import React from 'react';
import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';
import styles from '../styles/Terminal.module.css';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>SolvemProbler v1.0</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <main className={styles.terminal}>
                <div className={styles.scanline}></div>
                <div className={styles.overlay}></div>
                <div className={styles.container}>
                    <h1 className={styles.glitchText}>SolvemProbler v1.0</h1>
                    <ChatInterface />
                </div>
            </main>
        </>
    );
};

export default Home;
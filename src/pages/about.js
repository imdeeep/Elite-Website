import React from 'react'
import Head from "next/head";
import styles from "@/styles/About.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
      <div className={styles.page1}>
          <div className={styles.box1}></div>
          <h1>About <span style={{ WebkitTextStroke: '2px white', color: 'transparent', letterSpacing: '1px' }}>Us</span></h1>
        </div>
        <div>
          <h2 className={styles.h2}>This platform is for those who exhibit exceptional dedication, skill, and fervent desire to learn and innovate. We tackle real-world problems, developing solutions that not only have the potential to go live but also offer significant and tangible contributions to society.</h2>
        </div>
      </main>
    </>
  )
}

export default about
import Navbar from "@/presentation/components/layout/Navbar/Navbar";
import React from "react";
import styles from "./HomePage.module.scss";
import HeroBox from "./components/HeroBox/HeroBox";
import AboutSection from "./components/AboutSection/AboutSection";
import ImpactSection from "./components/ImpactSection/ImpactSection";
import NewsSection from "./components/NewsSection/NewsSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title># Foundation</title>
        <meta property="og:title" content="# Foundation" key="title" />
        <meta
          name="description"
          property="og:description"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </Head>
      <header className={styles.header}>
        <Navbar />
        <HeroBox />
      </header>
      <main className={styles.main}>
        <AboutSection />
        <ImpactSection />
        <NewsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default HomePage;

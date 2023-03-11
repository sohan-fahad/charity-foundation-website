import Navbar from "@/presentation/components/layout/Navbar/Navbar";
import React from "react";
import styles from "./HomePage.module.scss";
import HeroBox from "./components/HeroBox/HeroBox";
import AboutSection from "./components/AboutSection/AboutSection";

const HomePage = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
        <HeroBox />
      </header>
      <main>
        <AboutSection />
      </main>
    </>
  );
};

export default HomePage;

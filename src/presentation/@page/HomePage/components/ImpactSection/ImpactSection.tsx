import Image from "next/image";
import React from "react";
import styles from "./ImpactSection.module.scss";

const ImpactSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.line}></div>
        <div className="flex justify-center">
          <span>Our 2021 impact</span>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content_box}>
          <h2>£1M</h2>
          <p>committed since 2020 to our life-changing projects</p>
        </div>
        <div className={styles.content_box}>
          <h2>6000</h2>
          <p>trees turned into Tiny Forests</p>
        </div>
        <div className={styles.content_box}>
          <h2>7.2</h2>
          <p>tonnes of carbon avoided</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

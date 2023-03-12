import Image from "next/image";
import React from "react";
import styles from "./AboutSection.module.scss";
import about_img from "../../../../../assets/images/about-img.webp";
import about_img_right from "../../../../../assets/images/about-img1.webp";
import about_us from "../../../../../assets/images/about-us.svg";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div
        className={styles.left}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <Image src={about_img} alt="about image" />
      </div>
      <div
        className={styles.right}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="50"
      >
        <Image src={about_us} alt="about us" />
        <h2>Every child deserves nature.</h2>

        <div className={styles.right_content}>
          <p>
            Somewhere green to go and play. Grass to run around on. trees to
            climb. We want to protect our world, for them. And help kids to
            protect it too.
            <br />
            <br />
            100% of donation go straight to our life changing projects. And
            Foundation matches every penny you give. So together, we can do
            double the good.
          </p>
          <div
            className={styles.right_content_img}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <div className={styles.overlay}>
              <h3>Learn More</h3>
            </div>
            <Image className="w-full" src={about_img_right} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

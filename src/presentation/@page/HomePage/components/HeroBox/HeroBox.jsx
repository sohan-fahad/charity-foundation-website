import CustomLink from "@/presentation/components/CustomLink/CustomLink";
import React, { useEffect } from "react";
import styles from "./HeroBox.module.scss";

const HeroBox = () => {
  useEffect(() => {
    onScrollOpacityAnim();
    return window.removeEventListener("scroll", () => {});
  }, []);

  const onScrollOpacityAnim = () => {
    const scrollPosLimit = 400;
    window.addEventListener("scroll", () => {
      const scroll = window.pageYOffset;
      const docHeight = document.body.scrollHeight;
      const rateOpacityHero =
        1 - Math.round((scroll / scrollPosLimit) * 10) / 10;
      if (scroll < scrollPosLimit) {
        document.getElementById("hero-box").style.opacity = rateOpacityHero;
      }
    });
  };
  return (
    <div className={styles.herobox} id="hero-box">
      <h1 className="title">A GREENER, BRIGHTER FUTURE FOR EVERY CHILD</h1>
      <CustomLink path="#" title="See our projects" />
    </div>
  );
};

export default HeroBox;

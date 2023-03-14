import Image from "next/image";
import React from "react";
import styles from "./NewsSection.module.scss";
import newsImg from "../../../../../assets/images/news-img1.webp";
import userImg from "../../../../../assets/images/user.png";
import VarifiedIcon from "@/presentation/components/SVG/VarifiedIcon";

const NewsSection = () => {
  return (
    <section className={styles.news}>
      <div className={styles.titleWrapper}>
        <div className={styles.line}></div>
        <div className="flex justify-center">
          <span>Our letest news</span>
        </div>
      </div>

      <div className={styles.news_wrapper}>
        <div className={`${styles.news_card} col-span-6 sm:col-span-3`}>
          <Image src={newsImg} alt="news" />
          <div className={styles.content}>
            <h3>
              Introducing our 3 new charity partners! Our Tiny Forests are
              popping up all over England and Scotland
            </h3>
            <div className={styles.writer_info_wrapper}>
              <Image src={userImg} alt="user" />
              <div className={styles.writer_info}>
                <p className={styles.writer_name}>Lina Hiks</p>
                <p className={styles.writer_status}>
                  <VarifiedIcon className="fill-primary w-3" />
                  <span>Varified Writer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.news_card} col-span-6 sm:col-span-3`}>
          <Image src={newsImg} alt="news" />
          <div className={styles.content}>
            <h3>
              Introducing our 3 new charity partners! Our Tiny Forests are
              popping up all over England and Scotland
            </h3>
            <div className={styles.writer_info_wrapper}>
              <Image src={userImg} alt="user" />
              <div className={styles.writer_info}>
                <p className={styles.writer_name}>Lina Hiks</p>
                <p className={styles.writer_status}>
                  <VarifiedIcon className="fill-primary w-3" />
                  <span>Varified Writer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.news_card} col-span-6 sm:col-span-3 lg:col-span-2`}
        >
          <Image src={newsImg} alt="news" />
          <div className={styles.content}>
            <h3>
              Introducing our 3 new charity partners! Our Tiny Forests are
              popping up all over England and Scotland
            </h3>
            <div className={styles.writer_info_wrapper}>
              <Image src={userImg} alt="user" />
              <div className={styles.writer_info}>
                <p className={styles.writer_name}>Lina Hiks</p>
                <p className={styles.writer_status}>
                  <VarifiedIcon className="fill-primary w-3" />
                  <span>Varified Writer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.news_card} col-span-6 sm:col-span-3 lg:col-span-2`}
        >
          <Image src={newsImg} alt="news" />
          <div className={styles.content}>
            <h3>
              Introducing our 3 new charity partners! Our Tiny Forests are
              popping up all over England and Scotland
            </h3>
            <div className={styles.writer_info_wrapper}>
              <Image src={userImg} alt="user" />
              <div className={styles.writer_info}>
                <p className={styles.writer_name}>Lina Hiks</p>
                <p className={styles.writer_status}>
                  <VarifiedIcon className="fill-primary w-3" />
                  <span>Varified Writer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.news_card} col-span-6 sm:col-span-3 lg:col-span-2`}
        >
          <Image src={newsImg} alt="news" />
          <div className={styles.content}>
            <h3>
              Introducing our 3 new charity partners! Our Tiny Forests are
              popping up all over England and Scotland
            </h3>
            <div className={styles.writer_info_wrapper}>
              <Image src={userImg} alt="user" />
              <div className={styles.writer_info}>
                <p className={styles.writer_name}>Lina Hiks</p>
                <p className={styles.writer_status}>
                  <VarifiedIcon className="fill-primary w-3" />
                  <span>Varified Writer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

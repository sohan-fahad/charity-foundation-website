import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import teamImg from "../../../../../assets/images/team-img1.jpg";
import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="team-swipper"
        >
          <SwiperSlide>
            <div className={styles.team_info_wrapper}>
              <Image src={teamImg} alt="team image" />
              <div className={styles.info_overlay}>
                <h4>John Smith</h4>
                <p>Founder, Director</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.team_info_wrapper}>
              <Image src={teamImg} alt="team image" />
              <div className={styles.info_overlay}>
                <h4>John Smith</h4>
                <p>Founder, Director</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.team_info_wrapper}>
              <Image src={teamImg} alt="team image" />
              <div className={styles.info_overlay}>
                <h4>John Smith</h4>
                <p>Founder, Director</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.team_info_wrapper}>
              <Image src={teamImg} alt="team image" />
              <div className={styles.info_overlay}>
                <h4>John Smith</h4>
                <p>Founder, Director</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;

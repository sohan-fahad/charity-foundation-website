import CustomLink from "@/presentation/components/CustomLink/CustomLink";
import Link from "next/link";
import React from "react";
import styles from "./FooterSection.module.scss";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <h1>LOGO</h1>
        </div>

        <div className={styles.footer_menu}>
          <ul>
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Team</Link>
            </li>
            <li>
              <Link href={"#"}>News</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.info}>
          <p>
            The # Charitable Foundation <br /> Company no:1221211, Charity no:
            1155555 <br /> 1 Rivergate, Temple Quay, Brisol, United Kingdom, BS1
            6ED{" "}
          </p>
        </div>

        <div className={styles.copyright_info}>
          <p>Copyright © 2023 # Foundation</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

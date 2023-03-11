import Link from "next/link";
import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = (props: { isMenuActive: boolean }) => {
  const { isMenuActive } = props;

  return (
    <div
      className={`${styles.menu_wrapper} ${
        isMenuActive ? styles.menu_active : styles.menu_inactive
      }`}
    >
      <ul>
        <li>
          <h3>About</h3>
          <ul>
            <li>
              <Link href={"#"}>Our Strategy</Link>
            </li>
            <li>
              <Link href={"#"}>Our Strategy</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;

/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Navbar.module.scss";

interface INavProps {
  toggleNav?: () => void;
  isNavActive: boolean;
}

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const { pathname, push } = useRouter();

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <Link href={"/"}>
            <p className="text-white font-normal">Logo</p>
          </Link>
          {pathname !== "/admin/login" && (
            <button className={styles.navbar_toggle_btn} onClick={toggleNav}>
              <span
                className={
                  isNavActive ? styles.icon_bar_active : styles.icon_bar
                }
              />
              <span
                className={
                  isNavActive ? styles.icon_bar_active : styles.icon_bar
                }
              />
              <span
                className={
                  isNavActive ? styles.icon_bar_active : styles.icon_bar
                }
              />
            </button>
          )}
        </div>
      </nav>
      <MenuItem isMenuActive={isNavActive} />
    </>
  );
};

export default memo(Navbar);

import Link from "next/link";
import React from "react";
import styles from "./CustomLink.module.scss";

const CustomLink = (props: { path: string; target?: any; title: string }) => {
  const { path, title } = props;
  return (
    <>
      <Link href={path} {...props} className={styles.project_btn}>
        {title}
      </Link>
    </>
  );
};

export default CustomLink;

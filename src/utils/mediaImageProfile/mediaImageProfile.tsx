import React from "react";
import { ImageProfile } from "../imageProfile/imageProfile";
import ExpandIcon from "../expandIcon/expandIcon";
import styles from "./mediaImageProfile.module.css";

export const MediaImageProfile = () => {
  return (
    <div className={styles.supraContainer}>
    <div className={styles.container}>
      <ImageProfile />

      <div className={`${styles.block} ${styles.icon1}`}>
        <div className={styles.iconContainer}>
          <ExpandIcon name="LinkedIn" />
        </div>
      </div>

      <div className={`${styles.block} ${styles.icon2}`}>
        <div className={styles.iconContainer}>
          <ExpandIcon name="Github" />
        </div>
      </div>

      <div className={`${styles.block} ${styles.icon3}`}>
        <div className={styles.iconContainer}>
          <ExpandIcon name="Currículum" />
        </div>
      </div>
    </div>
    </div>
  );
};

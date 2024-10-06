import React from "react";
import { Typography } from "@mui/material";
import { ITechnologies } from "./dataTechnologies";
import styles from "./technologies.module.css";

interface TechnologiesProps {
  technologies: ITechnologies[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.techList}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <img src={tech.image} alt={tech.name} className={styles.techImage} />
            <div className={styles.techName}>
              <Typography variant="body1" >
                {tech.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

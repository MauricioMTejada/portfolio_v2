import React from "react";
import { Typography } from "@mui/material";
import { Technologies } from "../../../utils/technologies/technologies";
import { RepositoryLink } from "../../../utils/RepositoryLink/RepositoryLink";
import styles from "./projectCardTechnologies.module.css";
import { ITechnologies } from "../../../utils/technologies/dataTechnologies";

interface ProjectCardTechnologiesProps {
    technologies: ITechnologies[];
    repository: string;
    url: string;
}

export const ProjectCardTechnologies: React.FC<ProjectCardTechnologiesProps> = ({
    technologies,
    repository,
    url
}) => {
    return (
        <div className={styles.styleTextTechnologies}>
            {/* <Typography className={`${styles.styleTextTitle} ${styles.titleOrder}`}> */}
            <Typography className={styles.styleTextTitle}>
                Tecnologías Usadas:
            </Typography>
            <div className={styles.technologiesChipsContent}>
                <Technologies technologies={technologies} />
            </div>
            {/* <div className={styles.repositoryLinkOrder}>
                <RepositoryLink repository={repository} url={url} />
            </div> */}
        </div>
    );
};
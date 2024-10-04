import React from "react";
import { Typography } from "@mui/material";
import styles from "./projectCardTitle.module.css";
import { RepositoryLink } from "../../../utils/RepositoryLink/RepositoryLink";

interface ProjectCardTitleProps {
    name: string;
    repository: string;
    url: string;
}

export const ProjectCardTitle: React.FC<ProjectCardTitleProps> = ({ name, repository,url }) => {
    return (
        <div className={styles.titleProject}>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={styles.styleTextTitle}
            >
                {name}
            </Typography>
            <RepositoryLink repository={repository} url={url} />
        </div>
    );
};

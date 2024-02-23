import React from "react";
import { Typography } from "@mui/material";
import styles from "./projectsCard.module.css";

import { Technologies } from "../../utils/technologies/technologies";
import { IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { ProjectsCardTextDescription } from "./projectsCardTextDescription";

interface Props {
	data: IDataProjectWithTech;
	index: number;
}

export const ProjectsCard: React.FC<Props> = ({ data, index }) => {
	return (
		<a
            className={styles.styleLink}
            href={data.url}
            target="_blank" >

            <div
                className={`${styles.cardStyleGlass} ${styles.styleDivPrincipal}`}
                key={index}>

                <div className={styles.styleImageContainer}>
                    <img
                        src={data.imageProject}
                        alt="imageProject"
                        className={styles.styleImageProject}
                    />
                </div>

                <div className={styles.styleDataContainer}>
                    <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={styles.styleTextTitle}>
                        {data.name}
                    </Typography>

                    <ProjectsCardTextDescription textDescription={data.description} />

                    <div className={styles.styleTextTechnologies}>
                        <Typography >
                            Tecnologías Usadas:
                        </Typography>
                    </div>

                    <Technologies technologies={data.technologies} />
                </div>
            </div>
		</a>
	);
};

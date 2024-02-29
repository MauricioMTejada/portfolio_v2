import React from "react";
import { Typography } from "@mui/material";
import styles from "./projectsCard.module.css";

import { Technologies } from "../../utils/technologies/technologies";
import { IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { ProjectsCardTextDescription } from "./projectsCardTextDescription";
import { RepositoryLink } from "../../utils/RepositoryLink/RepositoryLink";

interface Props {
	data: IDataProjectWithTech;
	index: number;
}

export const ProjectsCard: React.FC<Props> = ({ data, index }) => {
	return (
		// <a className={styles.style01} href={data.url} target="_blank">
			<div
				className={`${styles.cardStyleGlass} ${styles.style02}`}
				key={index}>
				<div className={styles.style03}>
					<div className={styles.styleImageContainer}>
                        <Typography
							gutterBottom
							variant="h5"
							component="div"
							className={styles.styleTextTitle}
                            style={{ display: "block"}}
                            >
							{data.name}
						</Typography>
						<img
							src={data.imageProject}
							alt="imageProject"
							className={styles.styleImageProject}
						/>
					</div>

					<div className={styles.styleDataContainer} >
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							className={styles.styleTextTitle}
                            style={{ opacity: 0 }} >
							{"..."}
						</Typography>

						<ProjectsCardTextDescription textDescription={data.description} />
					</div>
				</div>

				<div className={styles.styleTextTechnologies}>
					<Typography className={styles.styleTextTitle}>
						Tecnologías Usadas:
					</Typography>
					<Technologies technologies={data.technologies} />
					<RepositoryLink repository={data.repository} url={data.url} />
				</div>
			</div>
		// </a>
	);
};

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
    const videoId = extractVideoId(data.video);

    return (
        <div className={`${styles.cardStyleGlass} ${styles.style02}`} key={index}>
            <div className={styles.style03}>
                <div className={styles.styleImageContainer}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.styleTextTitle}
                        style={{ display: "block" }}>
                        {data.name}
                    </Typography>
                    {/* <a href={data.url} target="_blank">
                        <img
                            src={data.imageProject}
                            alt="imageProject"
                            className={styles.styleImageProject}
                        />
                    </a> */}
                    {videoId ? (
                        <div className={styles.videoContainer}>
                            <iframe
                                className={styles.video}
                                width="350"
                                height="196"
                                src={`https://www.youtube.com/embed/${videoId}?vq=hd720`}
                                title={data.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <a href={data.url} target="_blank">
                            <img
                                src={data.imageProject}
                                alt="imageProject"
                                className={styles.styleImageProject}
                            />
                        </a>
                    )}
                </div>

                <div className={styles.styleDataContainer}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.styleTextTitle}
                        style={{ opacity: 0 }}>
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
    );
};

function extractVideoId(videoUrl: string | undefined): string | null {
    if (!videoUrl) return null; // Si videoUrl es undefined, devuelve null

    const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|v\/|embed\/|user\/(?:[\w#]+\/)+))([\w-]{11})/i;
    const match = videoUrl.match(regex);
    return match ? match[1] : null;
}

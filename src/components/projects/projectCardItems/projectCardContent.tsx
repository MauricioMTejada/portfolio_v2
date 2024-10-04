import React from "react";
import { ProjectsCardTextDescription } from "../projectsCardTextDescription";
import styles from "./projectCardContent.module.css";

interface ProjectCardContentProps {
    video: string | undefined;
    name: string;
    url: string;
    imageProject: string;
    description: string;
}

export const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
    video,
    name,
    url,
    imageProject,
    description
}) => {
    const videoId = extractVideoId(video);

    return (
        <div className={styles.style03}>
            <div className={styles.styleImageContainer}>
                {videoId ? (
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.video}
                            width="350"
                            height="196"
                            src={`https://www.youtube.com/embed/${videoId}?vq=hd720`}
                            title={name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={imageProject}
                            alt="imageProject"
                            className={styles.styleImageProject}
                        />
                    </a>
                )}
            </div>

            <div className={styles.styleDataContainer}>
                <ProjectsCardTextDescription textDescription={description} />
            </div>
        </div>
    );
};

function extractVideoId(videoUrl: string | undefined): string | null {
    if (!videoUrl) return null;

    const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|v\/|embed\/|user\/(?:[\w#]+\/)+))([\w-]{11})/i;
    const match = videoUrl.match(regex);
    return match ? match[1] : null;
}
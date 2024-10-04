import React from "react";
import styles from "./projectsCard.module.css";

import { IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { ProjectCardTitle } from "./projectCardItems/projectCardTitle";
import { ProjectCardContent } from "./projectCardItems/projectCardContent";
import { ProjectCardTechnologies } from "./projectCardItems/projectCardTechnologies";

interface Props {
    data: IDataProjectWithTech;
    index: number;
}

export const ProjectsCard: React.FC<Props> = ({ data, index }) => {
    return (
        <div className={`${styles.styleGlass} ${styles.content}`} key={index}>
            <ProjectCardTitle name={data.name} repository={data.repository} url={data.url}/>

            <ProjectCardContent
                video={data.video}
                name={data.name}
                url={data.url}
                imageProject={data.imageProject}
                description={data.description}
            />

            <ProjectCardTechnologies
                technologies={data.technologies}
                repository={data.repository}
                url={data.url}
            />
        </div>
    );
};
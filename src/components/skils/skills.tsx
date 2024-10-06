import React from "react";

import { TechnologiesSkills } from "../../utils/technologiesForSkills/technologiesSkills";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import OutlineLayout from "../layout/layout";
import { imageTitleGear } from "../../assets/icons/imagesFromTitles/index";

import styles from "./skills.module.css";

export const Skills: React.FC = () => {
    return (
        <OutlineLayout>
            <TitlesSections title={"Tecnologías"} image={imageTitleGear} />

            <div className={styles.columnContainer}>
                <div className={styles.column}>
                    <p className={styles.title}>Lenguajes:</p>
                    <TechnologiesSkills typeTech="language" />
                    <p className={styles.title}>Bases de Datos: </p>
                    <TechnologiesSkills typeTech="database" />
                </div>

                <div className={styles.column}>
                    <p className={styles.title}>Frameworks: </p>
                    <TechnologiesSkills typeTech="framework" />
                    <p className={styles.title}>Librerías:</p>
                    <TechnologiesSkills typeTech="library" />
                </div>

                <div className={styles.column}>
                    <p className={styles.title}>Herramientas: </p>
                    <TechnologiesSkills typeTech="tool" />
                </div>
            </div>
        </OutlineLayout>
    );
};

import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import styles from './articlesCard.module.css';
import { IInfo } from "./request";
import { useWindowSize } from "../../utils/widthWindow/useWindowSize";

interface Props {
    article: IInfo;
    isActive: boolean;
}

export const ArticlesCard: React.FC<Props> = ({ article, isActive }) => {
    const { width } = useWindowSize();

    const opacity = useMemo(() => {
        if (width < 769) {
            return isActive ? 1 : 0;
        } else {
            return isActive ? 1 : 0.4;
        }
    }, [isActive, width]);

    const cardStyle = useMemo(() => {
        return {
            opacity,
            width: width < 469 ? 'auto' : '400px',
            height: width < 469 ? 'auto' : '560px',
        };
    }, [opacity, width]);

    return (
        <a href={article.url} target="_blank" className={styles.cardLink}>
            <div className={`${styles.cardContainer} ${styles.cardStyleGlass}`} style={cardStyle}>
                <div className={styles.imageContainer}>
                    <img
                        src={article.cover_image}
                        alt="imageProject"
                        className={styles.articleImage}
                    />
                </div>

                <div className={styles.dataContainer}>
                    <div className={styles.titleContainer}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.title}>
                            {article.title}
                        </Typography>
                    </div>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        className={styles.description}>
                        {article.description}
                    </Typography>
                </div>
            </div>
        </a>
    );
};
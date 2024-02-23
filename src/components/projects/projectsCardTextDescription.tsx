import styles from "./projectsCardTextDescription.module.css";
import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    textDescription: string;
}

export const ProjectsCardTextDescription: React.FC<Props> = ({ textDescription}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (container) {
				const { scrollTop, scrollHeight, clientHeight } = container;
				const calculatedScrollPercentage =
					(scrollTop / (scrollHeight - clientHeight)) * 100;
				setScrollPercentage(calculatedScrollPercentage);
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

    const scrollBlur: React.CSSProperties = {
        // opacity: scrollPercentage === 100 ? 0 : 1 - (scrollPercentage / 100),
        // backdropFilter: scrollPercentage === 100 ? "blur(10px)" : "none",
        // opacity: scrollPercentage === 100 ? 1 : 0,
        // // position: "absolute",
        // left: 0,
        // width: "100%",
        // height: "20px",
        // pointerEvents: "none",
        // bottom: 0,
    };

	return (
        // <div style={{ position: "relative", width: "100px", height: "200px" }}>
		<div className="bandera2" style={scrollBlur}>
			{/* <div>Scroll Percentage: {scrollPercentage.toFixed(1)}%</div> */}
            <div className={styles.borderText}>

			<div
            className={styles.descriptionContainer}
            ref={containerRef}
            >
                <Typography
                    variant="body1"
                    color="text.secondary"
                    className={styles.descriptionText}>
                    {textDescription}
                </Typography></div>
			</div>
		</div>
	);
}

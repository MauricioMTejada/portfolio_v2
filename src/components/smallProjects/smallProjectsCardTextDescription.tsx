import styles from "./smallProjectsCardTextDescription.module.css";
import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    textDescription: string;
}

export const SmallProjectsCardTextDescription: React.FC<Props> = ({ textDescription}) => {
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
        // implementar efecto de blur
		width: "100%",
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

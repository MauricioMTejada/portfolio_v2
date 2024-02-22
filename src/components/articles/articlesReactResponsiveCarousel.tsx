import React, { Component, useState } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArticlesCard } from "./articlesCard";
import { IInfo } from "./request";

// Estilos
const styleDivContainer: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
};

const stylePrevContendButton: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	width: "70px",
	transform: "scaleX(-1)",
	order: 1,
};

const styleNextContendButton: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	width: "70px",
	transform: "scaleX(1)",
	order: 3,
};

const styleCarrouselContainer: React.CSSProperties = {
	order: 2,
	maskImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 97%, rgba(0, 0, 0, 0))`,
};

interface Props {
	data: IInfo[];
}

export const Slides: React.FC<Props> = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);

	const next = () => {
		setCurrentSlide((prevSlide) => prevSlide + 1);
	};

	const prev = () => {
		setCurrentSlide((prevSlide) => prevSlide - 1);
	};

	const updateCurrentSlide = (index: number) => {
		if (currentSlide !== index) {
			setCurrentSlide(index);
		}
	};

	return (
		<div style={styleDivContainer}>
			<div style={stylePrevContendButton}>
				<IconButton onClick={prev}>
					<SvgIcon style={{ color: "#FACC15" }}>
						<ArrowForwardIosIcon />
					</SvgIcon>
				</IconButton>
			</div>

			<div style={styleNextContendButton}>
				<IconButton onClick={next}>
					<SvgIcon style={{ color: "#FACC15" }}>
						<ArrowForwardIosIcon />
					</SvgIcon>
				</IconButton>
			</div>

			<div style={styleCarrouselContainer}>
				<Carousel
					autoPlay={false}
					selectedItem={currentSlide}
					onChange={updateCurrentSlide}
					showArrows={false}
					centerMode
					centerSlidePercentage={60}
					infiniteLoop
					width={"800px"}
					showThumbs={false}>
					{data.map((article, index) => (
						<ArticlesCard
							key={index}
							article={article}
							isActive={index === currentSlide}
						/>
					))}
				</Carousel>{" "}
			</div>
		</div>
	);
};

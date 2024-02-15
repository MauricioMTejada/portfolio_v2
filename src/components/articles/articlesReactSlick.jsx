/****************************************************************/
/*	Finalmente éste componente no se utilizó, pero es funcional	*/
/****************************************************************/

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Block } from "@mui/icons-material";

export default function SimpleSlider({ data }) {
	let sliderRef = useRef(null);

	const [activeIndex, setActiveIndex] = useState(0);

	const next = () => {
		sliderRef.current.slickNext();
	};

	const previous = () => {
		sliderRef.current.slickPrev();
	};

	const styleCentered = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	};
	const styleContendButton = { width: "70px" };

	var settings = {
		className: "center",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		centerMode: true,
		centerPadding: "100px",
		swipeToSlide: true,
		arrows: false,
		appendDots: (dots) => (
			<div
				style={{
					position: "static",
					// backgroundColor: "#ddd",
					// borderRadius: "10px",
					// padding: "10px"
					height: "63px",
				}}>
				<ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
			</div>
		),
		customPaging: (i, ) => {
			console.log(`i: ${i}`);
			return(
			<div
				style={{
					width: "30px",
					// color: active ? "white" : "gray",
					// color: "gray",
					color: i === activeIndex ? "white" : "gray",
					fontSize: "40px",
				}}>
					•
			</div>
		)},
		beforeChange: (oldIndex, newIndex) => {
			setActiveIndex(newIndex);
		  },
	};

	return (
		<Paper
			elevation={0}
			variant="outlined"
			sx={{ marginLeft: 2, marginRight: 2, padding: 2 }}>
			<div style={styleCentered}>
				<div style={{ ...styleCentered, ...styleContendButton, order: 1 }}>
					<IconButton onClick={previous} sx={{}}>
						<ArrowForwardIosIcon style={{ transform: "scaleX(-1)" }} />
					</IconButton>
				</div>

				<div style={{ ...styleCentered, ...styleContendButton, order: 3 }}>
					<IconButton onClick={next}>
						<ArrowForwardIosIcon style={{ transform: "scaleX(1)" }} />
					</IconButton>
				</div>

				<div style={{ width: "900px", order: 2 }}>
					<Slider ref={sliderRef} {...settings} style={{ display: "block" }}>
						{data.map((article) => (
							<div key={article.id} style={{ margin: "auto" }}>
								<Card
									sx={{
										display: "flex",
										flexDirection: "column",
										textAlign: "left",
										width: 310,
										// height: 390,
										margin: "auto",
									}}>
									<CardActionArea
										sx={{
											height: "100%",
											display: "flex",
											flexDirection: "column",
											justifyContent: "start",
										}}
										onClick={() => {
											window.open(article.url, "_blank");
										}}>
										<div style={{ padding: "16px" }}>
											<CardMedia
												component="img"
												alt="imageProject"
												image={article.cover_image}
												sx={{ width: "100%", borderRadius: "10px" }}
											/>
										</div>
										<CardContent sx={{ paddingTop: 0 }}>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{
													lineHeight: 1.1,
													margin: "15px 0",
													height: "106px",
												}}>
												{article.title}
											</Typography>
											<Typography
												variant="body1"
												color="text.secondary"
												sx={{
													lineHeight: 1.4,
													marginTop: "20px",
													marginBottom: "60px",
												}}>
												{article.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</Paper>
	);
}

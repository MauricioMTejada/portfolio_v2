import React from "react";
import { Article } from "./articles";

import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CircularProgress,
	Paper,
	Typography,
} from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carrousel = ({ data }: { data: Article[] }) => {
	// export const Carrousel = ({  }) => {

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<Paper
			elevation={0}
			variant="outlined"
			sx={{ marginLeft: 2, marginRight: 2, padding: 2 }}>
			<div className="slider-container">
				<Slider {...settings}>
					{data.map((article) => (
						<div key={article.id}>
							<Card
								sx={{
									marginRight: 2,
									display: "flex",
									flexDirection: "column",
									textAlign: "left",
									width: 310,
									height: 390,
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
											sx={{ lineHeight: 1 }}>
											{article.title}
										</Typography>
										<Typography variant="body1" color="text.secondary">
											{article.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
					))}
				</Slider>
			</div>
		</Paper>
	);
};

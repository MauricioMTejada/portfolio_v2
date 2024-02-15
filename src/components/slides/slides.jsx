import { Component } from "react";

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

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Slides = ({ data }) => {
	const styleCentered = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	};
	const styleContendButton = { width: "70px" };
	// class ExternalControlledCarousel extends Component<{}, { currentSlide: number; autoPlay: boolean }> {
	class SlidesControlled extends Component {
		constructor(props) {
			super(props);

			this.state = {
				currentSlide: 0,
				autoPlay: true,
			};
		}

		next = () => {
			this.setState((state) => ({
				currentSlide: state.currentSlide + 1,
			}));
		};

		prev = () => {
			this.setState((state) => ({
				currentSlide: state.currentSlide - 1,
			}));
		};

		updateCurrentSlide = (index) => {
			const { currentSlide } = this.state;

			if (currentSlide !== index) {
				this.setState({
					currentSlide: index,
				});
			}
		};

		render() {
			const buttonStyle = {
				fontSize: 20,
				padding: "5px 20px",
				margin: "5px 0px",
			};

			const containerStyle = { display: "flex", margin: "5px 0 20px" };

			return (
				<Paper
					elevation={0}
					variant="outlined"
					sx={{ marginLeft: 2, marginRight: 2, padding: 2 }}>
					<div style={styleCentered}>

						<div style={{ ...styleCentered, ...styleContendButton }}>
							<IconButton onClick={this.prev} sx={{}}>
								<ArrowForwardIosIcon style={{ transform: "scaleX(-1)" }} />
							</IconButton>
						</div>

						<Carousel
							autoPlay={false}
							selectedItem={this.state.currentSlide}
							onChange={this.updateCurrentSlide}
							{...this.props}
							showArrows={false}
							centerMode
							centerSlidePercentage={60}
							infiniteLoop
							width={"570px"}
							showThumbs={false}>
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
													sx={{ lineHeight: 1.1, margin: "15px 0", height: "106px" }}>
													{article.title}
												</Typography>
												<Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.4, marginTop: "20px", marginBottom: "60px" }}>
													{article.description}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
							))}
						</Carousel>

						<div style={{ ...styleCentered, ...styleContendButton }}>
							<IconButton onClick={this.next}>
								<ArrowForwardIosIcon style={{ transform: "scaleX(1)" }} />
							</IconButton>
						</div>

					</div>
				</Paper>
			);
		}
	}

	return <SlidesControlled />;
};

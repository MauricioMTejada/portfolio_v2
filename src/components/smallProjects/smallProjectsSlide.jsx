import { Component } from "react";

import { IconButton, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SmallProjectsCard from "./smallProjectsCard";

export const SmallProjectsSlide = ({ smallProjectsData }) => {
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
						<div style={{ ...styleCentered, ...styleContendButton, order: 1 }}>
							<IconButton onClick={this.prev} sx={{}}>
								<ArrowForwardIosIcon style={{ transform: "scaleX(-1)" }} />
							</IconButton>
						</div>

						<div style={{ ...styleCentered, ...styleContendButton, order: 3 }}>
							<IconButton onClick={this.next}>
								<ArrowForwardIosIcon style={{ transform: "scaleX(1)" }} />
							</IconButton>
						</div>

                        <div style={{  order: 2 }}>
						<Carousel
							autoPlay={false}
							selectedItem={this.state.currentSlide}
							onChange={this.updateCurrentSlide}
							{...this.props}
							showArrows={false}
							centerMode
							centerSlidePercentage={100}
							infiniteLoop
							width={"900px"}
							showThumbs={false}
                        >

							{smallProjectsData.map((data, index) => (
								<SmallProjectsCard key={index} data={data} />
							))}

						</Carousel>
                        </div>
					</div>
				</Paper>
			);
		}
	}

	return <SlidesControlled />;
};
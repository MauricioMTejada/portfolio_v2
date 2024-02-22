import { Component } from "react";

import { IconButton, Paper, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SmallProjectsCard from "./smallProjectsCard";

export const SmallProjectsSlide = ({ smallProjectsData }) => {

	// Estilos
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
			return (
				<div style={styleCentered}>
					<div style={{ ...styleCentered, ...styleContendButton, order: 1 }}>
						<IconButton onClick={this.prev} sx={{}}>
							<SvgIcon style={{ color: "#FACC15", transform: "scaleX(-1)" }}>
								<ArrowForwardIosIcon />
							</SvgIcon>
						</IconButton>
					</div>

					<div style={{ ...styleCentered, ...styleContendButton, order: 3 }}>
						<IconButton onClick={this.next}>
							<SvgIcon style={{ color: "#FACC15", transform: "scaleX(1)" }}>
								<ArrowForwardIosIcon />
							</SvgIcon>
						</IconButton>
					</div>

					<div style={{ order: 2 }}>
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
							showThumbs={false}>
							{smallProjectsData.map((data, index) => (
								<SmallProjectsCard key={index} data={data} />
							))}
						</Carousel>
					</div>
				</div>
			);
		}
	}

	return <SlidesControlled />;
};

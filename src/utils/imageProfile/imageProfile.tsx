import imageProfile from "../../assets/imageProfile/imageProfile.jpg";

const IMAGE_WIDTH_HEIGHT = "150px";

export const totalWidthHeightImage = parseInt(IMAGE_WIDTH_HEIGHT) + 20 + "px";

export const ImageProfile = () => {

	return (
		<div
			style={{
				width: totalWidthHeightImage,
				height: totalWidthHeightImage,
				borderRadius: "50%",
				border: "3px solid rgba(0, 255, 70, 1)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<img
				src={imageProfile}
				alt="imageProfile"
				style={{
					width: IMAGE_WIDTH_HEIGHT,
					height: IMAGE_WIDTH_HEIGHT,
					borderRadius: "50%",
				}}
			/>
		</div>
	);
};

import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import BuildIcon from "@mui/icons-material/Build";
import { SvgIconComponent } from "@mui/icons-material";
import { imageTitleGear } from "../../assets/icons/imagesFromTitles/index"

interface Props {
    title: string;
    // icon: SvgIconComponent;
    image: string;
}

// export const TitlesSections: React.FC<Props> = ({ title, icon: IconComponent }) => {
export const TitlesSections: React.FC<Props> = ({ title, image }) => {

    const ICON_MESURE = 27;

	const containerStyle: CSSProperties = {
		fontFamily: "Onest, sans-serif",
		display: "flex",
		flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
	};

    const textStyle: CSSProperties = {
        fontFamily: "Onest, sans-serif",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: "1.2rem",
        marginBottom: "1.2rem",
        // color: "rgb(0, 255, 70)"
        color: "#FACC15"
    }

    const iconStyles: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `100%`,
        height: `100%`,
        maxWidth: `${ICON_MESURE}px`,
        maxHeight: `${ICON_MESURE}px`,
        marginRight: "0.8rem",
    }

	return (
		<div style={containerStyle}>
            <img src={image} alt="imageIcon" style={{...iconStyles}} />
			{/* <IconComponent style={{...iconStyles}} /> */}
			<Typography style={textStyle}>{title}</Typography>
		</div>
	);
};

import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import BuildIcon from "@mui/icons-material/Build";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
    title: string;
    icon: SvgIconComponent;
}

export const TitlesSections: React.FC<Props> = ({ title, icon: IconComponent }) => {

    const ICON_MESURE = 40;

	const containerStyle: CSSProperties = {
		fontFamily: "Onest, sans-serif",
		display: "flex",
		flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
	};

    const testStyle: CSSProperties = {
        fontFamily: "Onest, sans-serif",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: "1.2rem",
        marginBottom: "1.2rem",
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
			<IconComponent style={{...iconStyles}} />
			<Typography style={testStyle}>{title}</Typography>
		</div>
	);
};

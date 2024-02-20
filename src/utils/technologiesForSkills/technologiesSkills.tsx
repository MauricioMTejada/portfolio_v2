import React from "react";
// import { languages } from "../../components/skils/dataSkills";
import { Typography } from "@mui/material";
import { ITechnologies, stringTypeTech } from "../technologies/dataTechnologies";

interface Props {
	arrayTech: ITechnologies[];
	typeTech : stringTypeTech;
}

export const TechnologiesSkills: React.FC<Props> = ({ arrayTech, typeTech }) => {
	const containerStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
	};

	const itemStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	};

	const imageStyles: React.CSSProperties = {
		maxWidth: "30px",
		maxHeight: "30px",
		marginRight: "5px",
		padding: "2px",
		borderRadius: "20%",
	};

	const textStyles: React.CSSProperties = {
		fontFamily: "Onest, sans-serif",
		marginRight: "30px",
	}

	return (
		<div style={containerStyles}>
			{arrayTech
				.filter(tech => tech.typeTech === typeTech)
				.map((arrayTech, index) => {
				return (
					<div key={index} style={itemStyles}>
						<img src={arrayTech.image} alt={arrayTech.name} style={imageStyles} />
						<Typography variant="body1" style={textStyles}>
							{arrayTech.name}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

export const TechnologiesSkillsImportant: React.FC<Props> = ({ arrayTech, typeTech }) => {
	const containerStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
	};

	const itemStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: "0.4rem",
	};

	const imageStyles: React.CSSProperties = {
		maxWidth: "35px",
		maxHeight: "35px",
		marginRight: "5px",
		padding: "2px",
		borderRadius: "20%",
	};

	const textStyles: React.CSSProperties = {
		fontFamily: "Onest, sans-serif",
		fontSize: "1.3rem",
		marginRight: "30px",
	}

	return (
		<div style={containerStyles}>
			{arrayTech
				.filter(tech => tech.typeTech === typeTech)
				.map((arrayTech, index) => {
				return (
					<div key={index} style={itemStyles}>
						<img src={arrayTech.image} alt={arrayTech.name} style={imageStyles} />
						<Typography variant="body1" style={textStyles}>
							{arrayTech.name}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

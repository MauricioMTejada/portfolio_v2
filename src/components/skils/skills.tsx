import React, { CSSProperties } from "react";
import { Typography } from "@mui/material";
import BuildIcon from '@mui/icons-material/Build';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';

import {
	languages,
	frameworks,
	dataBases,
	libraries,
	tools,
} from "./dataSkills";
import { TechnologiesSkills, TechnologiesSkillsImportant } from "../../utils/technologiesForSkills/technologiesSkills";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";

export const Skills = () => {
	// Definir los estilos en una constante
	const columContainer: CSSProperties = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	}
	const columnStyles: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "left",
		alignItems: "left",
	};

	const titlesStyles: CSSProperties = {
		fontFamily: "Onest, sans-serif",
		fontWeight: "bold",
		fontStyle: "",
		fontSize: "1.1rem",
		color: "#FFFBA1",
		// textDecoration: "underline",
		marginTop: "0.8rem",
		marginBottom: "0.8rem",
		textAlign: "left",
	}

	const titlePrincipalStyles: CSSProperties = {
		fontFamily: "Onest, sans-serif",
		display: "flex",
		flexDirection: "row",
	}

	return (
		<div>
			<TitlesSections title={"Tecnologías"} icon={MiscellaneousServicesOutlinedIcon} />

			<div style={columContainer}>
				{/* Utilizar la constante de estilos */}
				<div style={columnStyles}>
					<Typography style={titlesStyles}>Lenguajes:</Typography>
					<TechnologiesSkillsImportant arrayTech={languages} />
				</div>

				<div style={columnStyles}>
					<Typography style={titlesStyles}>Bases de Datos:</Typography>
					<TechnologiesSkillsImportant arrayTech={dataBases} />
					<Typography style={titlesStyles}>Frameworks:</Typography>
					<TechnologiesSkillsImportant arrayTech={frameworks} />
				</div>

				<div style={columnStyles}>
					<Typography style={titlesStyles}>Librerías:</Typography>
					<TechnologiesSkills arrayTech={libraries} />
					<Typography style={titlesStyles}>Herramientas:</Typography>
					<TechnologiesSkills arrayTech={tools} />
				</div>
			</div>
		</div>
	);
};

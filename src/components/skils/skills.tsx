import React, { CSSProperties } from "react";
import { Typography } from "@mui/material";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";

import technologies from "../../utils/technologies/dataTechnologies";
import {
	TechnologiesSkills,
	TechnologiesSkillsImportant,
} from "../../utils/technologiesForSkills/technologiesSkills";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import OutlineLayout from "../layout/layout";

export const Skills: React.FC = () => {
	// Definir los estilos en una constante
	const columContainer: CSSProperties = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	};
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
	};

	const titlePrincipalStyles: CSSProperties = {
		fontFamily: "Onest, sans-serif",
		display: "flex",
		flexDirection: "row",
	};

	return (
		<OutlineLayout>
			<TitlesSections
				title={"Tecnologías"}
				icon={MiscellaneousServicesOutlinedIcon}
			/>

			<div style={columContainer}>
				<div style={columnStyles}>
					<Typography style={titlesStyles}>Lenguajes:</Typography>
					<TechnologiesSkillsImportant
						arrayTech={technologies}
						typeTech="language"
					/>
				</div>

				<div style={columnStyles}>
					<Typography style={titlesStyles}>Bases de Datos:</Typography>
					<TechnologiesSkillsImportant
						arrayTech={technologies}
						typeTech="database"
					/>
					<Typography style={titlesStyles}>Frameworks:</Typography>
					<TechnologiesSkillsImportant
						arrayTech={technologies}
						typeTech="framework"
					/>
				</div>

				<div style={columnStyles}>
					<Typography style={titlesStyles}>Librerías:</Typography>
					<TechnologiesSkills arrayTech={technologies} typeTech="library" />
					<Typography style={titlesStyles}>Herramientas:</Typography>
					<TechnologiesSkills arrayTech={technologies} typeTech="tool" />
				</div>
			</div>
		</OutlineLayout>
	);
};

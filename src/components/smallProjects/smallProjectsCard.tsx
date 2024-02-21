import React from "react";
import { Typography, } from "@mui/material";
import { Technologies } from "../../utils/technologies/technologies";
import styles from '../projects/projectsCard.module.css'
import { IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";


// Estilos
const styleDivPrincipal: React.CSSProperties = {
  marginBottom: "3rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const styleImageContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // padding: "0.5rem",
}
const styleImageProject: React.CSSProperties = {
  width: '350px',
  padding: '1rem',
}

const styleDataContainer: React.CSSProperties = {
  padding: "2rem",
}

const styleTextTitle: React.CSSProperties = {
  fontFamily: "Onest, sans-serif",
  textAlign: 'left',
}

const styleTextDescription: React.CSSProperties = {
  fontFamily: "Onest, sans-serif",
  textAlign: 'left',
}

const styleTextTechnologies: React.CSSProperties = {
  fontFamily: "Onest, sans-serif",
  textAlign: 'left',
  marginTop: '20px',
  marginBottom: '20px',
}

const SmallProjectsCard = ({ data }: { data: IDataProjectWithTech }) => {
  return (
		<div className={styles.cardStyle} style={styleDivPrincipal}>
			<div style={styleImageContainer}>
				<img
					src={data.imageProject}
					alt="imageProject"
					style={styleImageProject}
				/>
			</div>

			<div style={styleDataContainer}>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					style={styleTextTitle}
					>
					{data.name}
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
					style={styleTextDescription}
				>
					{data.description}
				</Typography>

				<Typography style={styleTextTechnologies}>
					Tecnologías Usadas:
				</Typography>

				<Technologies technologies={data.technologies} />
			</div>
		</div>
	);
};

export default SmallProjectsCard;

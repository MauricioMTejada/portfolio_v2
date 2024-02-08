import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import { technologiesList } from "./dataProjects";
import { ITechnologies } from "./dataTechnologies";

interface TechnologiesProps {
	technologies: ITechnologies[];
}

export const Technologies: React.FC<TechnologiesProps> = ({technologies}) => {
	console.log(technologies)
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			{technologies.map((tech, index) => (
				<Card  raised key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", margin: "5px"}}>
					<img
						alt={tech.name}
						src={tech.image}
						style={{ width: "35px", height: "35px" }}
					/>
					<div style={{padding: 0, paddingBottom: "0px", maxWidth: "70px"}}>
						<Typography
							variant="subtitle2"
							color="text.secondary"
							sx={{ display: "inline", overflowWrap: "break-word", wordWrap: "break-word",  }}>
							{tech.name}
						</Typography>
					</div>
				</Card>
			))}
		</div>
	);
};

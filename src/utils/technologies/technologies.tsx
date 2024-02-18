import React from "react";

import { Typography, } from "@mui/material";

import { ITechnologies } from "./dataTechnologies";

interface TechnologiesProps {
	technologies: ITechnologies[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
	// console.log(technologies)
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					height: "34px",
				}}>
				{technologies.map((tech, index) => (
					<div
						key={index}
						style={{
							display: "flex",
							alignItems: "center",
							marginRight: "5px",
							border: "2px solid #6d6d6d",
							borderRadius: "16px",
						}}>
						<img
							src={tech.image}
							alt={tech.name}
							style={{
								width: "30px",
								height: "30px",
								marginRight: "5px",
								borderRadius: "50%",
								padding: "2px",
							}}
						/>
						<Typography variant="body1" style={{ marginRight: "5px" }}>
							{tech.name}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

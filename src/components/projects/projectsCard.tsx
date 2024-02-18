import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Technologies } from '../../utils/technologies/technologies'
import { Project } from '../../utils/data/dataProjects'

interface Props {
    data: Project;
    index: number;
}

export const ProjectsCard: React.FC<Props> = ({ data, index}) => {
  return (
    <Card key={index} sx={{ marginBottom: 2, display: "flex", textAlign: "left", fontFamily: "Onest, sans-serif" }}>
					<CardActionArea sx={{ display: "flex", }}>
						<CardMedia
							component="img"
							alt="imageProject"
							image={data.imageProject}
							sx={{ width: 300, padding: 2 }}
						/>
						<CardContent style={{ width: "100%" }}>
							<Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Onest, sans-serif" }} >
								{data.name}
							</Typography>

							<Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Onest, sans-serif" }}>
								{data.description}
							</Typography>

							<Typography style={{ marginTop: 10, fontFamily: "Onest, sans-serif" }} >
								Tecnologías Usadas:
							</Typography>

							<Technologies technologies={data.technologies} />
						</CardContent>
					</CardActionArea>
				</Card>
  )
}

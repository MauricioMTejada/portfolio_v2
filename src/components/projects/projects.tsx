import React from 'react'
import { dataProjects } from './dataProjects'
import Paper from '@mui/material/Paper';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Technologies } from './technologies';


export const Projects = () => {
	console.log(dataProjects)
  return (
    <div>
        <h2>Proyectos</h2>

        <Paper elevation={0} variant='outlined' sx={{ marginLeft: 2, marginRight: 2, padding: 2}}>
			{dataProjects.map((data, index) => { return (
				<Card key={index} sx={{ marginBottom: 2, display: "flex", textAlign: "left" }}>
					<CardActionArea sx={{ display: "flex", }}>
						<CardMedia
							component="img"
							alt="imageProject"
							image={data.imageProject}
							sx={{ width: 300, padding: 2 }}
						/>
						<CardContent style={{ width: "100%" }}>
							<Typography gutterBottom variant="h5" component="div" >
								{data.name}
							</Typography>

							<Typography variant="body1" color="text.secondary" >
								{data.description}
							</Typography>

							<Typography style={{ marginTop: 10,  }} >
								Tecnologías Usadas:
							</Typography>

							<Technologies technologies={data.technologies} />
						</CardContent>
					</CardActionArea>
				</Card>
			);})}

        </Paper>

    </div>
  )
}

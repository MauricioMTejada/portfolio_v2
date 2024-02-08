import React from 'react'
import { dataProjects } from './dataProjects'
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Technologies } from './technologies';


export const Projects = () => {
	console.log(dataProjects)
  return (
    <div>
        <h2>Proyectos</h2>

        <Paper elevation={0} variant='outlined' sx={{ marginLeft: 2, marginRight: 2, padding: 2}}>
			{dataProjects.map((data, index) => { return(
				<Card key={index} sx={{ display: 'flex', textAlign: 'left'}}>
					<CardMedia
						component="img"
						alt="imageProject"
						image={data.imageProject}
						sx={{ width: 200 }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
						<Typography variant="body1" color="text.secondary">
							{data.description}
						</Typography>

						<Typography style={{ marginTop: 10 }}>Tecnologías Usadas:</Typography>

						<Technologies technologies={data.technologies}/>


					</CardContent>
				</Card>
			)})}

        </Paper>

    </div>
  )
}

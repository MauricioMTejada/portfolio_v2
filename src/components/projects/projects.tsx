import { dataProjects } from "../../utils/data/dataProjects";
import { Paper } from "@mui/material";
import { ProjectsCard } from "./projectsCard";

export const Projects = () => {

	const dataProjectsFilter = dataProjects.filter( (data) => data.type === "project" );

	return (
		<div>
			<h2>Proyectos</h2>

			<Paper
				elevation={0}
				variant="outlined"
				sx={{ marginLeft: 2, marginRight: 2, padding: 2 }}>
				{dataProjectsFilter.map((data, index) => {
					return <ProjectsCard data={data} index={index} />;
				})}
			</Paper>
		</div>
	);
};

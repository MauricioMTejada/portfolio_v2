import { dataProjectWithTech }  from "../../utils/data/dataProjectsWithTechnologies";
import { Paper } from "@mui/material";
import { ProjectsCard } from "./projectsCard";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import TerminalIcon from '@mui/icons-material/Terminal';

export const Projects = () => {


	const dataProjectsFilter = dataProjectWithTech.filter( (data) => data.type === "project" );

	return (
		<div>
			<TitlesSections title={"Proyectos"} icon={TerminalIcon} />

			<Paper
				elevation={0}
				variant="outlined"
				sx={{ marginLeft: 2, marginRight: 2, padding: 2 }}>
				{dataProjectsFilter.map((data, index) => {
					return <ProjectsCard key={index} data={data} index={index} />;
				})}
			</Paper>
		</div>
	);
};

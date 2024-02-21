import { dataProjectWithTech }  from "../../utils/data/dataProjectsWithTechnologies";
import { ProjectsCard } from "./projectsCard";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import TerminalIcon from '@mui/icons-material/Terminal';
import OutlineLayout from "../layout/layout";

export const Projects = () => {
	const dataProjectsFilter = dataProjectWithTech.filter(
		(data) => data.type === "project"
	);

	return (
		<OutlineLayout>

			<TitlesSections title={"Proyectos"} icon={TerminalIcon} />

			{dataProjectsFilter.map((data, index) => {
				return <ProjectsCard key={index} data={data} index={index} />;
			})}

		</OutlineLayout>
	);
};

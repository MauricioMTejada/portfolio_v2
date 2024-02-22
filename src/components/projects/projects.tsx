import { dataProjectWithTech }  from "../../utils/data/dataProjectsWithTechnologies";
import { ProjectsCard } from "./projectsCard";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import TerminalIcon from '@mui/icons-material/Terminal';
import OutlineLayout from "../layout/layout";
import { imageTitleCode1 } from "../../assets/icons/imagesFromTitles/index"

export const Projects = () => {
	const dataProjectsFilter = dataProjectWithTech.filter(
		(data) => data.type === "project"
	);

	return (
		<OutlineLayout>

			{/* <TitlesSections title={"Proyectos"} icon={TerminalIcon} /> */}
			<TitlesSections title={"Proyectos"} image={imageTitleCode1} />

			{dataProjectsFilter.map((data, index) => {
				return <ProjectsCard key={index} data={data} index={index} />;
			})}

		</OutlineLayout>
	);
};

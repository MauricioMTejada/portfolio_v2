import { dataProjects } from "../../utils/data/dataProjects";
import { SmallProjectsSlide } from "./smallProjectsSlide";

export const SmallProjects = () => {
	const dataProjectsFilter = dataProjects.filter( (data) => data.type === "small project" );

	return (
		<div>
			<h2>Proyectos Sencillos</h2>

			<SmallProjectsSlide smallProjectsData={dataProjectsFilter} />
		</div>
	);
};

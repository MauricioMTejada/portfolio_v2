import { dataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import OutlineLayout from "../layout/layout";
import { SmallProjectsSlide } from "./smallProjectsSlide";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

export const SmallProjects = () => {
	const dataProjectsFilter = dataProjectWithTech.filter( (data) => data.type === "small project" );

	return (
		<OutlineLayout>
			<TitlesSections title={"Proyectos Sencillos"} icon={EditNoteOutlinedIcon} />

			<SmallProjectsSlide smallProjectsData={dataProjectsFilter} />
		</OutlineLayout>
	);
};

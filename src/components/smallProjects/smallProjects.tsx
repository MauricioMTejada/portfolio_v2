import { dataProjects } from "../../utils/data/dataProjects";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import { SmallProjectsSlide } from "./smallProjectsSlide";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

export const SmallProjects = () => {
	const dataProjectsFilter = dataProjects.filter( (data) => data.type === "small project" );

	return (
		<div>
			<TitlesSections title={"Proyectos Sencillos"} icon={EditNoteOutlinedIcon} />

			<SmallProjectsSlide smallProjectsData={dataProjectsFilter} />
		</div>
	);
};

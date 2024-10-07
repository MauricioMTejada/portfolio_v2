import { dataProjectWithTech, IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import OutlineLayout from "../layout/layout";
import { SmallProjectsSlide } from "./smallProjectsSlide";
import { imageTitleCode2 } from "../../assets/icons/imagesFromTitles/index"

export const SmallProjects = () => {
  const dataProjectsFilter: IDataProjectWithTech[] = dataProjectWithTech.filter((data) => data.type === "small project");

  return (
    <OutlineLayout>
      <TitlesSections title={"Proyectos Sencillos"} image={imageTitleCode2} />
      <SmallProjectsSlide smallProjectsData={dataProjectsFilter} />
    </OutlineLayout>
  );
};
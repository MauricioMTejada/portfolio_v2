import { dataProjects } from "./dataProjects";
import technologies, { ITechnologies, TechnologyName } from "../technologies/dataTechnologies";

export interface IDataProjectWithTech {
    name: string;
    imageProject: string;
    description: string;
    technologies: ITechnologies[];
    type: "project" | "small project";
}

const findTechnologies = (names: string[]): ITechnologies[] => {
    return names.flatMap(name => {
        const tech = technologies.find(tech => tech.name === name);
        if (tech) {
            return [tech]; // Devolver el objeto de tecnología
        }
        return []; // Devolver un arreglo vacío si no se encuentra la tecnología
    });
};

export const dataProjectWithTech: IDataProjectWithTech[] =
    dataProjects.map(project => {
        // project.technologies
        const { technologies: projectTechnologies, ...rest } = project;
        const techNames = findTechnologies(projectTechnologies);
        return { ...rest, technologies: techNames };
    });

// console.log(dataProjectWithTech);

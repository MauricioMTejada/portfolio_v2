import { ingeniaProject, timbringProject, countriesProject, cardQRProject, pokedexProject, centralMediaProject, radiobrowserProject } from './imagesDeployPreview';
// import { ITechnologies, techAuth0, techJavascript, techMaterialui, techNextjs, techTailwind, techTypescript, techVite } from '../technologies/dataTechnologies';
import technologies, { ITechnologies, TechnologyName } from "../technologies/dataTechnologies";

export interface Project {
    name: string;
    imageProject: string;
    description: string;
    // technologies: ITechnologies[];
    technologies: TechnologyName[];
    type: "project" | "small project";
}

export const dataProjects: Project[] = [
    {
        name: "Ingenia",
        imageProject: ingeniaProject,
        description: "Éste es mi primer proyecto grupal para Henry. Honestamente no recuerdo demasiado de mi vida veinte años atrás, pero sí sé que no estaba en una buena posición. Poco trabajo, poco dinero, ciclos de hardware extendidos al máximo… incluso llegué a usar Windows XP en un Pentium II de 233 MHz, que ya tenía seis años sobre los hombros. Nuestras opciones eran modificar-optimizar-destripar a Windows XP para obtener todo el rendimiento posible, o tirar los dados con Linux.",
        technologies: [ "JavaScript", "MaterialUI"],
        type: "project",
    },
    {
        name: "Timbring",
        imageProject: timbringProject,
        description: "Servicio de entrega para Mercadolibre",
        technologies: ["JavaScript", "Next.JS", "Auth0", "Tailwind"],
        type: "project",
    },
    {
        name: "Countries",
        imageProject: countriesProject,
        description: "Buscador de paises",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "project",
    },
    {
        name: "Card.QR",
        imageProject: cardQRProject,
        description: "Generador de Tarjeta QR",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
    },
    {
        name: "Pokedex",
        imageProject: pokedexProject,
        description: "Pokedex",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
    },
    {
        name: "centralMedia",
        imageProject: centralMediaProject,
        description: "centralMedia",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
    },
    {
        name: "radiobrowser",
        imageProject: radiobrowserProject,
        description: "radiobrowser",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
    }
];

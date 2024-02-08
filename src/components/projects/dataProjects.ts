import { Javascript } from '@mui/icons-material';
import { ingeniaProject } from './imagesDeployPreview';
import { logoJavascript, logoMaterialui, logoTypescript } from './imagesTechnologies';
import { ITechnologies, techJavascript, techMaterialui, techTypescript } from './dataTechnologies';

interface Project {
    name: string;
    imageProject: string;
    description: string;
    // technologies: technologiesList[];
    technologies: ITechnologies[];
}

export type technologiesList =
    "javascript"
    | "typescript"
    | "materialui";


export const dataProjects: Project[] = [
    {
        name: "Ingenia",
        imageProject: ingeniaProject,
        description: "Éste es mi primer proyecto grupal para Henry. Honestamente no recuerdo demasiado de mi vida veinte años atrás, pero sí sé que no estaba en una buena posición. Poco trabajo, poco dinero, ciclos de hardware extendidos al máximo… incluso llegué a usar Windows XP en un Pentium II de 233 MHz, que ya tenía seis años sobre los hombros. Nuestras opciones eran modificar-optimizar-destripar a Windows XP para obtener todo el rendimiento posible, o tirar los dados con Linux.",
        // technologies:[ 'javascript', 'materialui' ],
        technologies: [techJavascript, techMaterialui],
    },
];
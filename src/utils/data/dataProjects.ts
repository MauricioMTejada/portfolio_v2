import { ingeniaProject, timbringProject, countriesProject, cardQRProject, pokedexProject, centralMediaProject, radiobrowserProject } from './imagesDeployPreview';
// import { ITechnologies, techAuth0, techJavascript, techMaterialui, techNextjs, techTailwind, techTypescript, techVite } from '../technologies/dataTechnologies';
import technologies, { ITechnologies, TechnologyName } from "../technologies/dataTechnologies";

export interface Project {
    name: string;
    imageProject: string;
    description: string;
    technologies: TechnologyName[];
    type: "project" | "small project";
    url: string;
}

export const dataProjects: Project[] = [
    {
        name: "Ingenia",
        imageProject: ingeniaProject,
        description: `Proyecto grupal realizado para la academia Henry, Ingenia es una plataforma completa de venta de cursos en línea. Permite el registro de usuarios como Compradores, Vendedores y Administradores, cada uno con su propio panel de control. Utiliza una base de datos PostgreSQL y ofrece integración con PayPal para procesar pagos de manera segura.

        Destaca por su funcionalidad de publicación de artículos literarios por parte de los vendedores, lo que enriquece la experiencia del usuario. Además, cuenta con secciones clave como el Top de Ventas de publicaciones y una lista de cursos favoritos, facilitando así a los usuarios la compra de los cursos que más les interesan.

        Una característica destacada es su sección de descuentos, que promueve ofertas especiales y promociones para los usuarios. Este proyecto demuestra nuestro compromiso con la creación de soluciones completas y atractivas en el ámbito de la educación en línea.`,
        technologies: [ "JavaScript", "MaterialUI"],
        type: "project",
        url: "https://client-six-weld.vercel.app",
    },
    {
        name: "Timbring",
        imageProject: timbringProject,
        description: "Servicio de entrega para Mercadolibre",
        technologies: ["JavaScript", "Next.JS", "Auth0", "Tailwind"],
        type: "project",
        url: "https://www.timbring.com",
    },
    {
        name: "Countries",
        imageProject: countriesProject,
        description: "Buscador de paises",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "project",
        url: "https://pi-countries-frontend-seven.vercel.app",
    },
    {
        name: "Card.QR",
        imageProject: cardQRProject,
        description: "Generador de Tarjeta QR",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
        url: "https://tarjeta-reactform-reactqr.vercel.app",
    },
    {
        name: "Pokedex",
        imageProject: pokedexProject,
        description: "Pokedex",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
        url: "https://next-pokedesk-static.vercel.app",
    },
    {
        name: "centralMedia",
        imageProject: centralMediaProject,
        description: "centralMedia",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
        url: "https://media-recopilation.vercel.app",
    },
    {
        name: "radiobrowser",
        imageProject: radiobrowserProject,
        description: "radiobrowser",
        technologies: [ "JavaScript", "MaterialUI", "Vite" ],
        type: "small project",
        url: "https://react-radio-browser.vercel.app",
    }
];

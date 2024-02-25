import { logoJavascript, logoMaterialui, logoTypescript, logoAuth0, logoTailwind,
    logoNextjs, logoVite, logoHtml, logoCss, logoReact, logoRedux, logoReduxToolkit,
    logoNode, logoPostgresql, logoMongodb, logoGit, logoGithub, logoVisualStudioCode,
    logoPostman, logoVercel, logoFigma, logoTrello, logoExpress, logoNpm, logoNextUI,  } from "./imagesTechnologies";

export type stringTypeTech = "language" | "framework" | "library" | "database" | "tool" | "dependency";

export type TechnologyName = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React"
    | "Next.JS" | "Node.JS" | "Express" | "PostgreSQL" | "MongoDB" | "MaterialUI"
    | "Redux" | "ReduxToolkit" | "Tailwind" | "Auth0" | "Git" | "GitHub"
    | "Visual Studio Code" | "Postman" | "Figma" | "Vercel" | "Trello" | "Vite"
    | "react-datepicker" | "react-hook-form" | "react-qr-code" | "NextUI" | "radio-browser-api"
    | "react-h5-audio-player";

export interface ITechnologies {
    name: TechnologyName;
    image: string;
    typeTech: stringTypeTech;
}
const technologies: ITechnologies[] = [
    { name: "HTML", image: logoHtml, typeTech: "language" },
    { name: "CSS", image: logoCss, typeTech: "language" },
    { name: "JavaScript", image: logoJavascript, typeTech: "language" },
    { name: "TypeScript", image: logoTypescript, typeTech: "language" },
    { name: "React", image: logoReact, typeTech: "framework" },
    { name: "Next.JS", image: logoNextjs, typeTech: "framework" },
    { name: "Node.JS", image: logoNode, typeTech: "framework" },
    { name: "Express", image: logoExpress, typeTech: "framework" },
    { name: "PostgreSQL", image: logoPostgresql, typeTech: "database" },
    { name: "MongoDB", image: logoMongodb, typeTech: "database" },
    { name: "MaterialUI", image: logoMaterialui, typeTech: "library" },
    { name: "Redux", image: logoRedux, typeTech: "library" },
    { name: "ReduxToolkit", image: logoReduxToolkit, typeTech: "library" },
    { name: "Tailwind", image: logoTailwind, typeTech: "library" },
    { name: "Auth0", image: logoAuth0, typeTech: "library" },
    { name: "Git", image: logoGit, typeTech: "tool" },
    { name: "GitHub", image: logoGithub, typeTech: "tool" },
    { name: "Visual Studio Code", image: logoVisualStudioCode, typeTech: "tool" },
    { name: "Postman", image: logoPostman, typeTech: "tool" },
    { name: "Figma", image: logoFigma, typeTech: "tool" },
    { name: "Vercel", image: logoVercel, typeTech: "tool" },
    { name: "Trello", image: logoTrello, typeTech: "tool" },
    { name: "Vite", image: logoVite, typeTech: "tool" },
    { name: "react-datepicker", image: logoNpm, typeTech: "dependency", },
    { name: "react-hook-form", image: logoNpm, typeTech: "dependency", },
    { name: "react-qr-code", image: logoNpm, typeTech: "dependency", },
    { name: "NextUI", image: logoNextUI, typeTech: "dependency", },
    { name: "radio-browser-api", image: logoNpm, typeTech: "dependency", },
    { name: "react-h5-audio-player", image: logoNpm, typeTech: "dependency", },
];

export default technologies;

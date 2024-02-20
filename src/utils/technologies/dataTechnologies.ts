import { logoJavascript, logoMaterialui, logoTypescript, logoAuth0, logoTailwind,
    logoNextjs, logoVite, logoHtml, logoCss, logoReact, logoRedux, logoReduxToolkit,
    logoNode, logoPostgresql, logoMongodb, logoGit, logoGithub, logoVisualStudioCode,
    logoPostman, logoVercel, logoFigma, logoTrello, logoExpress, } from "./imagesTechnologies";

export type stringTypeTech = "language" | "framework" | "library" | "database" | "tool";

export type TechnologyName = "HTML" | "CSS" | "Javascript" | "typecript" | "React"
    | "Next.JS" | "Node.JS" | "Express" | "PostgreSQL" | "MongoDB" | "MaterialUI"
    | "Redux" | "ReduxToolkit" | "Tailwind" | "Auth0" | "Git" | "GitHub"
    | "Visual Studio Code" | "Postman" | "Figma" | "Vercel" | "Trello" | "Vite";

export interface ITechnologies {
    name: TechnologyName;
    image: string;
    typeTech: stringTypeTech;
}
const technologies: ITechnologies[] = [
    { name: "HTML", image: logoHtml, typeTech: "language" },
    { name: "CSS", image: logoCss, typeTech: "language" },
    { name: "Javascript", image: logoJavascript, typeTech: "language" },
    { name: "typecript", image: logoTypescript, typeTech: "language" },
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
    { name: "Vite", image: logoVite, typeTech: "tool" }
];

export default technologies;

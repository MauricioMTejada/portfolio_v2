import { logoJavascript, logoMaterialui, logoTypescript, logoAuth0, logoTailwind, logoNextjs, logoVite } from './imagesTechnologies';

export interface ITechnologies {
    name: string;
    image: string;
}

export const techJavascript: ITechnologies =
    {
        name: "Javascript",
        image: logoJavascript,
    };

export  const techTypescript: ITechnologies =
    {
        name: "Typescript",
        image: logoTypescript,
    };

export  const techMaterialui: ITechnologies =
    {
        name: "MaterialUI",
        image: logoMaterialui,
    };

export const techAuth0: ITechnologies =
    {
        name: "Auth0",
        image: logoAuth0,
    }

export const techTailwind: ITechnologies =
    {
        name: "Tailwind",
        image: logoTailwind,
    }

export const techNextjs: ITechnologies =
    {
        name: "Next.JS",
        image: logoNextjs,
    }

export const techVite: ITechnologies = {
    name: "Vite",
    image: logoVite,
}
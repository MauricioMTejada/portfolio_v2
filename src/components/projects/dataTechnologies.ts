import { logoJavascript, logoMaterialui, logoTypescript } from './imagesTechnologies';

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
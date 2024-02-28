import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import PdfIcon from "./PdfIcon";

export interface Brand {
    name: nameBrand;
    icon: React.ComponentType<any>;
    url: string;
}

export type nameBrand = "LinkedIn" | "Github" | "Currículum" | "Deploy";

export const dataBrand: Brand[] = [
    {
        name: "LinkedIn",
        icon: LinkedInIcon,
        url: "https://www.linkedin.com/in/mauricio-tejada-495aa4a8/",
    },
    {
        name: "Github",
        icon: GitHubIcon,
        url: "https://github.com/MauricioMTejada",
    },
    {
        name: "Currículum",
        icon: PdfIcon,
        url: "https://drive.google.com/file/d/1_aFNBLHk8R6jgaRl9rmzIrgwp3xbT3S5/view?usp=sharing"
    }
]
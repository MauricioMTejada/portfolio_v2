import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import PdfIcon from "./PdfIcon";

export interface Brand {
    name: nameBrand;
    icon: React.ComponentType<any>;
}

export type nameBrand = "LinkedIn" | "Github" | "Pdf";

export const dataBrand: Brand[] = [
    {
        name: "LinkedIn",
        icon: LinkedInIcon
    },
    {
        name: "Github",
        icon: GitHubIcon
    },
    {
        name: "Pdf",
        icon: PdfIcon,
    }
]
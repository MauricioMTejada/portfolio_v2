import GitHubIcon from "./GitHubIcon";
import DeployIcon from "./DeployIcon";
import PdfIcon from "./PdfIcon";

export interface BrandForCard {
    name: nameBrandForCard;
    icon: React.ComponentType<any>;
    // url: string;
}

export type nameBrandForCard = "Deploy" | "Github" ;

export const dataBrandForCard: BrandForCard[] = [
    {
        name: "Deploy",
        icon: DeployIcon,
        // url: "https://www.linkedin.com/in/mauricio-tejada-495aa4a8/",
    },
    {
        name: "Github",
        icon: GitHubIcon,
        // url: "https://github.com/MauricioMTejada",
    },
]
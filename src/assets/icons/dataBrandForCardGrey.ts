import GitHubIconGrey from "./GitHubIconGrey";
import DeployIconGrey from "./DeployIconGrey";

export interface BrandForCard {
    name: nameBrandForCard;
    icon: React.ComponentType<any>;
    // url: string;
}

export type nameBrandForCard = "Deployment" | "Repository" ;

export const dataBrandForCardGrey: BrandForCard[] = [
    {
        name: "Deployment",
        icon: DeployIconGrey,
        // url: "https://www.linkedin.com/in/mauricio-tejada-495aa4a8/",
    },
    {
        name: "Repository",
        icon: GitHubIconGrey,
        // url: "https://github.com/MauricioMTejada",
    },
]
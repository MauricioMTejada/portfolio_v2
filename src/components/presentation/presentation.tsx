import React from "react";
import styles from "./presentation.module.css"; // Importa los estilos desde el archivo CSS modular
import { Button } from "@mui/material";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import ExpandIcon from "../../utils/expandIcon/expandIcon";

import { Brand } from "../../assets/icons/dataBrand";
import { nameBrand } from "../../assets/icons/dataBrand";

export const BUTTON_ICON_WITH_HEIGHT = "32px";

const Presentation: React.FC = () => {
	return (
		<div>
			<ExpandIcon name={"Pdf"} />
			<ExpandIcon name={"Github"} />
			<ExpandIcon name={"LinkedIn"} />
		</div>
	);
};

export default Presentation;

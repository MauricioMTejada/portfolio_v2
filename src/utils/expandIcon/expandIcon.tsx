import React from "react";
import styles from "./expandIcon.module.css"; // Importa los estilos desde el archivo CSS modular
import { dataBrand } from "../../assets/icons/dataBrand";
import { nameBrand } from "../../assets/icons/dataBrand";

export const BUTTON_WITH_HEIGHT = "36px";
export const BUTTON_ICON_WITH_HEIGHT = "32px";
export const BORDER_THICKNESS = "2px";

export const ICON_WIDTH_HEIGHT = `calc(${BUTTON_WITH_HEIGHT} - ${BORDER_THICKNESS} * 2)`;
export const BUTTON_BORDER_RADIUS = `calc(${BUTTON_WITH_HEIGHT} / 2)`;
export const TEXT_PADDING_RIGHT = `calc(${ICON_WIDTH_HEIGHT} / 3)`;

interface Props {
	name: nameBrand;
}

const ExpandIcon: React.FC<Props> = ({ name }) => {
	const [filterBrand] = dataBrand.filter((brand) => brand.name === name);

	return (
		<div style={{display: "flex", justifyContent: "flex-start", flexDirection: "row"}} >
			<div
				className={styles.expandButton}
				// style= {styleExpandButton}
				>
				<span className={styles.icon}>
					{filterBrand.icon && <filterBrand.icon />}{" "}
				</span>
				<span className={styles.text}>{filterBrand.name}</span>
			</div>
		</div>
	);
};

export default ExpandIcon;

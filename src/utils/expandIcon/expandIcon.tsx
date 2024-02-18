import React from "react";
import styles from "./expandIcon.module.css"; // Importa los estilos desde el archivo CSS modular
import { dataBrand } from "../../assets/icons/dataBrand";
import { nameBrand } from "../../assets/icons/dataBrand";

export const BUTTON_ICON_WITH_HEIGHT = "32px";

interface Props {
	name: nameBrand;
}

const ExpandIcon: React.FC<Props> = ({ name }) => {
	const [filterBrand] = dataBrand.filter((brand) => brand.name === name);

	return (
		<div style={{display: "flex", justifyContent: "flex-start", flexDirection: "row"}} >
			<div className={styles.expandButton}>
				<span className={styles.icon}>
					{filterBrand.icon && <filterBrand.icon />}{" "}
				</span>
				<span className={styles.text}>{filterBrand.name}</span>
			</div>
		</div>
	);
};

export default ExpandIcon;

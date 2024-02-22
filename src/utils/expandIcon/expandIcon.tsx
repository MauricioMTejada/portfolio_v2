import React from "react";
import styles from "./expandIcon.module.css";
import { dataBrand } from "../../assets/icons/dataBrand";
import { nameBrand } from "../../assets/icons/dataBrand";

interface Props {
	name: nameBrand;
}

const ExpandIcon: React.FC<Props> = ({ name }) => {
	const [filterBrand] = dataBrand.filter((brand) => brand.name === name);

	return (
		<a className={styles.divContainer} href={filterBrand.url} target="_blank">
			<div
				className={styles.expandButton}
				// style= {styleExpandButton}
				>
				<span className={styles.icon}>
					{filterBrand.icon && <filterBrand.icon />}{" "}
				</span>
				<span className={styles.text}>{filterBrand.name}</span>
			</div>
		</a>
	);
};

export default ExpandIcon;

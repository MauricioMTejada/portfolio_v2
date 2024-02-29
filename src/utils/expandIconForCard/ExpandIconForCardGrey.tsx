import React from "react";
import styles from "./ExpandIconForCardGrey.module.css";
import {
	dataBrandForCardGrey,
	nameBrandForCard,
} from "../../assets/icons/dataBrandForCardGrey";

interface Props {
	name: nameBrandForCard;
}

const ExpandIconForCardGrey: React.FC<Props> = ({ name }) => {
	const [filterBrand] = dataBrandForCardGrey.filter((brand) => brand.name === name);

	return (
		<div className={styles.expandButton}>
			<span className={styles.icon}>
				{filterBrand.icon && <filterBrand.icon />}{" "}
			</span>
			<span className={styles.text}>{filterBrand.name}</span>
		</div>
	);
};

export default ExpandIconForCardGrey;

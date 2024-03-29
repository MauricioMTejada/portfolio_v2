import React from "react";
import styles from "./ExpandIconForCard.module.css";
import {
	dataBrandForCard,
	nameBrandForCard,
} from "../../assets/icons/dataBrandForCard";

interface Props {
	name: nameBrandForCard;
}

const ExpandIconForCard: React.FC<Props> = ({ name }) => {
	const [filterBrand] = dataBrandForCard.filter((brand) => brand.name === name);

	return (
		<div className={styles.expandButton}>
			<span className={styles.icon}>
				{filterBrand.icon && <filterBrand.icon />}{" "}
			</span>
			<span className={styles.text}>{filterBrand.name}</span>
		</div>
	);
};

export default ExpandIconForCard;

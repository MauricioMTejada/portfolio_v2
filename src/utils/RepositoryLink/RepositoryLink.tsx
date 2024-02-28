import React from "react";
import style from "./RepositoryLink.module.css";
import ExpandIconForCard from "../expandIconForCard/ExpandIconForCard";
import { translateIcon } from "./trasnlateIcon";

export const RepositoryLink = () => {
	return (
		<div className={style.style01}>
			<div className={style.style02}>
				<div className={style.style03}>
					<ExpandIconForCard name="Deploy" />
				</div>
			</div>
			<div className={style.style02}>
				<div className={style.style03}>
					<ExpandIconForCard name="Github" />
				</div>{" "}
			</div>
		</div>
	);
};

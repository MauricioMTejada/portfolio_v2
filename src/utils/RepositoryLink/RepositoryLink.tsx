import React from "react";
import style from "./RepositoryLink.module.css";
import ExpandIconForCard from "../expandIconForCard/ExpandIconForCard";

interface Props {
	repository: string;
	url: string;
}

export const RepositoryLink: React.FC<Props> = ({ repository, url }) => {
	return (
		<div className={style.style01}>
			<a href={url} target="_blank">
				<div className={style.style02}>
					<div className={style.style03}>
						<ExpandIconForCard name="Deployment" />
					</div>
				</div>{" "}
			</a>
			<a href={repository} target="_blank">
			<div className={style.style02}>
				<div className={style.style03}>
					<ExpandIconForCard name="Repository" />
				</div>{" "}
			</div>
			</a>
		</div>
	);
};

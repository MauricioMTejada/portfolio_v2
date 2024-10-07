import React, { useState, useEffect } from "react";
import { request } from "./request";
import { CircularProgress } from "@mui/material";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';

import { Slides } from "./articlesReactResponsiveCarousel";
// import SimpleSlider from "./articlesReactSlick";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";
import OutlineLayout from "../layout/layout";
import { imageTitleArticle } from "../../assets/icons/imagesFromTitles/index"

export interface Article {
	id: number;
	url: string;
	cover_image: string;
	description: string;
	title: string;
}

export const Articles = () => {
	const [data, setData] = useState<Article[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await request();
				// console.log(result);
				setData(result);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<OutlineLayout>
			<TitlesSections title={"Publicaciones"} image={imageTitleArticle} />

			{data && data.length > 0 ? <Slides data={data} /> : <CircularProgress />}
		</OutlineLayout>
	);
};

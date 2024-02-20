import React, { useState, useEffect } from "react";
import { request } from "./request";
import { CircularProgress } from "@mui/material";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';

import { Slides } from "./articlesReactResponsiveCarousel";
import SimpleSlider from "./articlesReactSlick";
import { TitlesSections } from "../../utils/titlesSections/titlesSections";

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
				const filteredData = result.map((item: any) => ({
					id: item.id,
					url: item.url,
					cover_image: item.cover_image,
					description: item.description,
					title: item.title,
				}));
				// console.log(filteredData);
				setData(filteredData);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<TitlesSections title={"Publicaciones"} icon={ArtTrackOutlinedIcon} />

			{data.length > 0 ? <Slides data={data} /> : <CircularProgress />}
			{/* {data.length > 0 ? <SimpleSlider data={data} /> : <CircularProgress />} */}
		</div>
	);
};

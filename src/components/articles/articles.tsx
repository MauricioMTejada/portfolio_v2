import React, { useState, useEffect } from "react";
import { request } from "./request";
import { CircularProgress } from "@mui/material";

import { Carrousel } from "./articlesCarrousel";

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
				//   console.log(filteredData);
				  setData(filteredData);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h2>Publicaciones</h2>

			{data.length > 0 ? <Carrousel data={data} /> : <CircularProgress />}
		</div>
	);
};

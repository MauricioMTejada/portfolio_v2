import axios from "axios";

export interface IInfo {
    id: number;
    url: string;
    cover_image: string;
    description: string;
    title: string;
}

export const request = async () => {
  try {
    let response = await axios.get(`https://dev.to/api/articles?per_page=10&username=mauriciomtejada`);
    // console.log(response.data);

    let info = response.data.map((item: any) => ({
      id: item.id,
      url: item.url,
      cover_image: item.cover_image,
      description: item.description,
      title: item.title,
    }));


    return info;

  } catch (error) {
    console.log(error);
  }
};

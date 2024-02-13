import axios from "axios";

export const request = async () => {
  try {
    let response = await axios.get(`https://dev.to/api/articles?per_page=10&username=mauriciomtejada`);
    // console.log(response.data);
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

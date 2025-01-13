import axios from "axios";

export const postRequest = (url: string, body: any) => {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
  console.log("URL parameter received:", url); // Debug this
  console.log("Full API URL:", `${process.env.NEXT_PUBLIC_API_URL}${url}`);
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`, body);
};

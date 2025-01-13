import axios from "axios";

export const postRequest = (url: string, body: any) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("Environment variable NEXT_PUBLIC_API_URL is not defined!");
      }
      if (!url) {
        throw new Error("The URL parameter is undefined!");
      }
    
      console.log("Environment variable:", process.env.NEXT_PUBLIC_API_URL); // Debugging
      console.log("URL parameter received:", url); // Debugging
      console.log("Full API URL:", `${process.env.NEXT_PUBLIC_API_URL}${url}`); // Debugging
    
      return axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`, body);
    
};

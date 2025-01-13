import axios from "axios"


export const postRequest =(url: string, body: any, config?: any)=> {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, body, config)
}
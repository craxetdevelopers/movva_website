import axios from "axios"


export const postRequest =(url: string, body: any)=> {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}`)
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`, body)
}
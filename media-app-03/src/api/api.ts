import axios from "axios"

const ApiUrl:string = "https://1zybssqrcg.execute-api.ap-south-1.amazonaws.com/dev"


export const LoginApi =(data: { username: string; password: string })=> axios.post(`${ApiUrl}/login`,data).then(res=>res.data)

export const AxiosObj = axios.create({
    baseURL: ApiUrl, // Replace with your API's base URL
    timeout: 10000, // Optional timeout (in milliseconds)
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${localStorage.getItem("accesstoken")}`
    },
}
)


export const getMedia = () => AxiosObj.get('media').then((res)=>res.data);

export const getComment = () => AxiosObj.get('comment').then((res)=>res.data);

export const getLikes = () => AxiosObj.get('like').then((res)=>res.data);


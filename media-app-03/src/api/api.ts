import axios from "axios"

const ApiUrl:string = "https://yo50p0vmbl.execute-api.us-east-1.amazonaws.com/dev"


export const LoginApi =(data: { username: string; password: string })=> axios.post(`${ApiUrl}/login`,data).then(res=>res.data)

export const AxiosObj = axios.create({
    baseURL: ApiUrl, // Replace with your API's base URL
    timeout: 10000, // Optional timeout (in milliseconds)
    headers: {
      'Content-Type': 'application/json',
    },
}
)


export const getMedia = () => AxiosObj.get('media',{
  headers:{
     'Authorization':`Bearer ${localStorage.getItem("accesstoken")}`
  }
}).then((res)=>res.data);

export const getContent = (id:string|null) => AxiosObj.get('content',{params:{
  media_id:id
},headers:{
   'Authorization':`Bearer ${localStorage.getItem("accesstoken")}`
}}).then((res)=>res.data);

export const postLike = (id:string|null) => AxiosObj.post('/like',{
  'media_id':id
},{
  headers:{ 'Authorization':`Bearer ${localStorage.getItem("accesstoken")}`}
}).then((res)=>res.data)

export const postComment = (id:string|null , comment:string) => AxiosObj.post("/comment",{
  'media_id':id,
'comment':comment
},{
  headers:{ 'Authorization':`Bearer ${localStorage.getItem("accesstoken")}`}
}).then(res=>res.data)

// export const getLikes = () => AxiosObj.get('like').then((res)=>res.data);

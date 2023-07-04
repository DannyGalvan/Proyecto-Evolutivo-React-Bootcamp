import axios from "axios";

export const chucknorris = axios.create({
    baseURL: "https://api.chucknorris.io/",
    timeout: 1000
})

export const randomuser = axios.create({
    baseURL: "https://randomuser.me",
    timeout: 1000,
})

export const reqrest = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    auth: "",
})

reqrest.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        const {response} = error;
        return response.data;
    }
)

export const  placeholder = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com",
    timeout: 1000,
})


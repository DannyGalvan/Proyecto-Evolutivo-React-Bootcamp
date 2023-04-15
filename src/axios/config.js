import axios from "axios";

export const chucknorris = axios.create({
    baseURL: "https://api.chucknorris.io/",
    timeout: 1000
})
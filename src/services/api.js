import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-sgp-usf.onrender.com"
   // baseURL: "http://localhost:3333"
    //baseURL: "https://api-sgp-usf.onrender.com" 
});

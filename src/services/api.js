import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-sgp-1.onrender.com"
   // baseURL: "http://localhost:8000"     
});

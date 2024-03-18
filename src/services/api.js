import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-sgp.onrender.com/"
   // baseURL: "http://localhost:8000"     
});

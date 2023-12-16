import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-sgp-usf.onrender.com"
});

import axios from "axios";

const api = axios.create({
    baseURL: "https://myportfolio-ekhc.onrender.com",
    headers: { "Content-Type": "application/json" },
});

export default api;
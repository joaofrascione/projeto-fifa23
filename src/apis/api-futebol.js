import axios from "axios";

const api = axios.create({
    baseURL: "https://futdb.app/api",
});

export default api

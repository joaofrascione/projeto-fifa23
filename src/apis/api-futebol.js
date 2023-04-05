import axios from "axios";

const api = axios.create({
    baseURL: "https://futdb.app/api",
});

// api.interceptors.request.use(async config => {
//     // Declaramos um token manualmente para teste.
//     const token = "5721fe41-431e-47aa-b74f-45ce383e281d";

//     if (token) {
//         api.defaults.headers['x-auth-token'] = token;
//     }

//     return config;
// });

export default api

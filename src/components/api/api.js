import * as axios from "axios";

// const instance = axios.create({
//     baseURL: 'http://localhost:3001',
//     // withCredentials: true,
// });



export const sendAPI = {
    sendOrderForm(name, phone) {
        return axios.post(`/sendOrderForm`, {name, phone});
    }
    // logout() {
    //     return instance.delete(`/auth/login`);
    // }
};

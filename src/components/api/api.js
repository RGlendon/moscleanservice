import * as axios from "axios";

// const instance = axios.create({
//     baseURL: 'http://localhost:3001',
//     // withCredentials: true,
// });


export const sendAPI = {
    sendOrderFormFull({
                          name,
                          phone,
                          typeOfWork,
                          meters,
                          addServices,
                          commonPrice
                      }) {
        return axios.post(`/sendOrderFormFull`, {name, phone, typeOfWork, meters, addServices, commonPrice});
    },

    sendAskForm({
                    name,
                    phone,
                    email,
                    question
    }) {
        return axios.post('/sendAskForm', {name, phone, email, question});
    },

    sendFeedback({
                     name,
                     phone,
                     email,
                     comment
                 }) {
        return axios.post('/sendFeedbackForm', {name, phone, email, comment});
    }

};

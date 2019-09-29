import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.myjson.com/'
})

export const API = {
    getRequestTemplates: () => {
        return instance.get(`bins/azz4s`)
            .then(data => {
                // debugger;
                return data;
            })
            .catch(err => {
                console.error('Something goes wrong ', err)
            });
    }
}
import axios from "axios";

export class AccountService {
    BASE_URL = 'api'
    // BASE_URL = 'http://localhost:8080/api'

    // BASE_URL = 'api'

    async register(user) {
        console.log(user);
        return await axios.post(`${this.BASE_URL}/register`, user).catch((e) => {
            console.log(e)
        })
    }

    async login(user) {
        return await axios.post(`${this.BASE_URL}/authenticate`, user).catch((e) => {
            console.log(e)
        })
    }


    async getUser(token) {

        let config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        }
        return axios.get(`${this.BASE_URL}/account`,config).catch(e => console.log(e));
        // axios.defaults.headers.common = {
        //     'Authorization': 'Bearer ' + token
        // };
        // return await $api.get(`account`)


        // return fetch('http://localhost:8080/api/account', {
        //     method: 'GET',
        //     headers: {
        //         withCredentials: true,
        //         Accept: ' */*',
        //         Authorization: `Bearer ${token}`,
        //     },
        // })
        //     .then(response => {
        //         // Handle the response
        //     })
        //     .catch(error => {
        //         // Handle the error
        //     });

        // return  fetch(`${this.BASE_URL}/account`)
    }

    async activate(key) {
        return await axios.get(`${this.BASE_URL}/activate?key=${key}`)
    }

    async resetPasswordMessage(data) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/init?mail=${data.email}`)
            .catch(e => console.log(e)
            )
    }

    async resetPassword(obj) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/finish`, obj)
    }
}


const accountServiceInstance = new AccountService()
export default accountServiceInstance;


const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api'
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

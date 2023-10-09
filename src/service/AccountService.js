import axios from "axios";

export class AccountService {
    BASE_URL = '/api'

    async register(user) {
        return await axios.post(`${this.BASE_URL}/register`, user)
    }

    async login(user) {
        let response = await axios.post(`${this.BASE_URL}/authenticate`, user)
        return response.data.idToken
    }

    async getUser() {
        let response = await $api.get(`/account`);
        return response.data
    }

    async activate(key) {
        return await axios.get(`${this.BASE_URL}/activate?key=${key}`)
    }

    async resetPasswordMessage(data) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/init?mail=${data.email}`)
    }

    async resetPassword(obj) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/finish`, obj)
    }

    async addWalletAddress(user) {
        return await $api.post(`/account/change-wallet-address`, user)
    }
    async buyCoins(amount){
        const response = await $api.post(`/wallet/deposit?amount=${amount}`)
        return response.data
    }
}

const accountServiceInstance = new AccountService()
export default accountServiceInstance;


const $api = axios.create({
    withCredentials: true,
    baseURL: '/api'
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

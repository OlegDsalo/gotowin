import axios from "axios";

export class AccountService {
    BASE_URL = 'http://localhost:8080/api'

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

    async activate(key) {
        // return await axios.get(`${this.BASE_URL}/activate?key=${key}`)
        return await axios.get(`${this.BASE_URL}/activate/${key}`)
    }

    async resetPasswordMessage(data) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/init?mail=${data.email}`)
            .catch(e=> console.log(e)
        )
    }

    async resetPassword(obj) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/finish`, obj)
    }
}


const accountServiceInstance = new AccountService()
export default accountServiceInstance;

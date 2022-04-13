import axios, { AxiosInstance } from "axios"
import formCreate from "../types/formCreate"

class Api {

    httpClient: AxiosInstance

    constructor() {
        this.httpClient = axios.create({
            baseURL: "http://localhost:3000/api"
        })
    }

    get(endpoint: string) {
        return this.httpClient.get(endpoint)
    }

    post(endpoint: string, data: formCreate) {
        return this.httpClient.post(endpoint, data)
    }

    put(endpoint: string, data: formCreate) {
        return this.httpClient.put(endpoint, data)
    }

    delete(endpoint: string) {
        return this.httpClient.delete(endpoint)
    }

}

export default new Api
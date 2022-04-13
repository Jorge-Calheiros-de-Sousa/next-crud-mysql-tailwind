import formCreate from "../types/formCreate";
import Api from "./Api";


class UsuarioService {
    async index() {
        try {
            const response = await Api.get("/usuarios")
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async show(id: string) {
        try {
            const response = await Api.get(`/usuario/${id}`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async create(data: formCreate) {
        try {
            const response = await Api.post("/usuarios", data)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async update(id: number, data: formCreate) {
        try {
            const response = await Api.put(`/usuario/${id}`, data)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async delete(id: number) {
        try {
            const response = await Api.delete(`/usuario/${id}`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }
}

export default new UsuarioService
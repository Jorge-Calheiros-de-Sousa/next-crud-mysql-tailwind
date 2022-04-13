import { useEffect, useState } from "react";
import listUsuarios from "../types/listUsuarios";
import UsuarioService from "../services/UsuarioService";
import formCreate from "../types/formCreate";

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<listUsuarios[]>([])
    const [usuario, setUsuario] = useState<listUsuarios>()

    async function pegarTodos() {
        const [data, error] = await UsuarioService.index();
        if (!error) {
            setUsuarios(data);
        }
    }

    async function deletar(id: number) {
        const [data, error] = await UsuarioService.delete(id)

        if (!error) {
            return true
        }
    }

    async function salvar(form: formCreate) {
        if (form.id) {
            const [data, error] = await UsuarioService.update(form.id, form)
            if (!error) {
                return data
            }
        } else {
            const [data, error] = await UsuarioService.create(form)
            if (!error) {
                return true
            }
        }
    }

    async function pegarUm(id: string) {
        const [data, error] = await UsuarioService.show(id)
        if (!error) {
            setUsuario(data[0])
        }
    }

    useEffect(() => {
        pegarTodos()
    }, [])

    return {
        usuarios,
        usuario,
        deletar,
        pegarUm,
        pegarTodos,
        salvar
    }
}
import { BaseSyntheticEvent, useState } from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Input from "../../components/Input"
import Main from "../../components/Main"
import NavLink from "../../components/NavLink"
import Titulo from "../../components/Titulo"
import useUsuarios from "../../hooks/useUsuarios"
import formCreate from "../../types/formCreate"

export default function formulario() {

    const {
        salvar
    } = useUsuarios()

    const [formValues, setFormValues] = useState<formCreate>({
        nome: "",
        email: "",
        idade: 0
    })


    function handleInputChange(e: BaseSyntheticEvent) {
        const { value, name } = e.target
        setFormValues((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    function submit() {
        const campos = [
            formValues.nome,
            formValues.email
        ]

        const vazios = campos.filter(v => v === "")
        if (vazios.length) {
            alert("Ainda há campos não preenchidos")
        } else if (formValues.idade === 0) {
            alert("Insira a idade corretamente")
        } else {
            salvar(formValues).then(function () {
                window.location.href = "/"
            })
        }
    }

    return (
        <Main>
            <Container>
                <Titulo titulo="Cadastrar usuario" />
                <div className="mt-5 w-1/2">
                    <Input
                        name="nome"
                        type="text"
                        placeholder="Nome do usuário"
                        value={formValues.nome}
                        change={handleInputChange}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email do usuário"
                        value={formValues.email}
                        change={handleInputChange}
                    />
                    <Input
                        name="idade"
                        type="number"
                        placeholder="Idade do usuário"
                        value={formValues.idade}
                        change={handleInputChange}
                    />
                    <div className="flex">
                        <Button titulo="Cadastrar" color="blue" subClass="mr-2" click={submit} />
                        <NavLink titulo="Cancelar" link="/" color="green" />
                    </div>
                </div>
            </Container>
        </Main>
    )
}
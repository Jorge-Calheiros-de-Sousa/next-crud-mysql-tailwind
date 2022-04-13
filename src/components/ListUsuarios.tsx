import useUsuarios from "../hooks/useUsuarios";
import listUsuarios from "../types/listUsuarios";
import Button from "./Button";
import NavLink from "./NavLink";

interface IProps {
    usuario: listUsuarios,
    deletar: () => void
}

export default function ListUsuarios(props: IProps) {
    return (
        <div className=" border-2 w-1/4 rounded-md box-border p-5 hover:bg-slate-300">
            <h1 className="mb-2">Nome: {props.usuario.nome}</h1>
            <p className="text-slate-400 mb-2">Email: {props.usuario.email}</p>
            <p className="text-slate-400">Idade: {props.usuario.idade}</p>
            <div className="flex mt-5">
                <NavLink titulo="Editar" link={`/update/usuario/${props.usuario.id}`} color="blue" />
                <Button titulo="Deletar" color="red" click={props.deletar} subClass={"ml-2"} />
            </div>
        </div>
    )
}
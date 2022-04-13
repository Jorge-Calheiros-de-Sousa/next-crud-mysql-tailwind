interface IProps {
    titulo: string
}

export default function Titulo(props: IProps) {
    return (
        <div className="border-b-2">
            <h1 className="mb-2">{props.titulo}</h1>
        </div>
    )
}
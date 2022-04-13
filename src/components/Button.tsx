interface IProps {
    titulo: string
    color: 'gray' | 'blue' | 'red'
    subClass?: string
    click: () => void
}

export default function Button(props: IProps) {
    return (
        <button className={`bg-${props.color}-500 p-2 rounded-sm text-white ${props.subClass}`} onClick={props.click}>
            {props.titulo}
        </button>
    )
}
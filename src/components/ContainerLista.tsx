interface IProps {
    children: any
}

export default function ContainerLista(props: IProps) {
    return (
        <div className="flex flex-wrap box-border">
            {props.children}
        </div>
    )
}
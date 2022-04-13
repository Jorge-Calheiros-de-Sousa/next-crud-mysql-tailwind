interface IProps {
    children: any
}

export default function Container(props: IProps) {
    return (
        <div className={
            "bg-slate-100 w-full h-fit mt-20 box-border p-10 rounded-sm"
        }>
            {props.children}
        </div>
    )
}
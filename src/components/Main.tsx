interface IProps {
    children: any
}

export default function Main(props: IProps) {
    return (
        <main className={
            "h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex"
        }>
            {props.children}
        </main>
    )
}
import Link from "next/link"

interface IProps {
    titulo: string
    link: string
    subClass?: string
    color?: 'blue' | 'green'
}

export default function NavLink(props: IProps) {
    return (
        <Link href={props.link}>
            <div className={`bg-blue-500 p-2 rounded-sm text-white ${props.subClass} cursor-pointer`}>
                {props.titulo}
            </div>
        </Link>
    )
}
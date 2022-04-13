import { ChangeEventHandler } from "react"

interface IProps {
    placeholder: string
    name: string
    value: string | number
    type: 'text' | 'number' | 'email'
    change: ChangeEventHandler
}


export default function Input(props: IProps) {
    return (
        <div>
            <input
                className="outline-none w-full p-1 rounded-md cursor-pointer border-2 my-2"
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.change}
                autoComplete={"none"}
                autoCapitalize={"none"}
            />
        </div>
    )
}
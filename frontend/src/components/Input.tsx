interface InputProps{
    // onChange?():void,
    type:string
    placeholder:string,
    reference?:any
}

export function Input(props:InputProps){
    return <input ref={props.reference}placeholder={props.placeholder}type={props.type} className="px-4 py-2 mt-2 border-1 outline-hidden rounded-md" ></input>
}
import type { ReactElement } from "react";
import "../App.css"
interface ButtonProps{
    variant:"primary"|"secondary",
    text:string,
    startIcon? : ReactElement,
    endIcon?:ReactElement,
    onClick?():void,
    loading?:boolean,
    fullWidth?:boolean
}
const variantStyles = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-500"
}
const defaultStyles ="mt-4 flex items-center px-4 text-center  py-2  outline-hidden rounded-xl  "
export function Button(props:ButtonProps){
    return <button onClick={props.onClick}className={`${defaultStyles} ${variantStyles[props.variant]}  ${props.loading?"opacity-45":""} `}>
        <div className="pr-2">
       {props.startIcon}</div> {props.text}
        </button>

} 
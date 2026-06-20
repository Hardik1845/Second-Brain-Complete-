
import axios from "axios"
import { useState,useRef } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Input } from "./Input"
import { Button } from "./Button"
import { BACKEND_URL } from "../config"

interface ModalProps {
    open: boolean,
    onClose():void
}
enum ContentType {
    Youtube = "youtube",
    Twitter ="twitter"
}
export function Modal(props:ModalProps) {
    const titleRef = useRef<any>("");
    const linkRef = useRef<any>("");
    const[type,setType]=useState(ContentType.Youtube);
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value
        const data ={
           link:link,
           title:title,
           type:type,
          
        }
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/content`,data,{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
       
        }catch(err){
            alert("Error in submitting details ")
        }
        props.onClose()

    }
    return (
        <div>
            {props.open &&
                <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500/60 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 w-96 shadow-xl">
                        <div className="flex justify-end mb-4 hover:cursor-pointer " onClick={props.onClose}>
                            <CrossIcon />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Input reference ={titleRef}placeholder="Title" type="text" />
                            <Input reference ={linkRef}placeholder="Link" type="text" />
                        </div >
                        <div className="flex  gap-2">
                           <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{setType(ContentType.Youtube)}}></Button>
                            <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                        </div>
                    <div className="flex ">
                        <Button variant="primary" text="Submit" onClick={addContent}/>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}
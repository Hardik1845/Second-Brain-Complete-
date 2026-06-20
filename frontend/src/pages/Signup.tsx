import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup(){
  
    const userRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const emailRef = useRef<any>("");
    const navigate = useNavigate()
   async  function SignUpUser(){
        const userName = userRef.current?.value;
        const userPassword = passwordRef.current?.value;
        const userEmail = emailRef.current?.value;
        console.log(userName);
        
        const data = {
            name:userName,
            password:userPassword,
            email: userEmail
        }
      console.log(data)
       try{
         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`,data);
        console.log(response);
        alert(response.data.message)
        navigate("/signin")
       }catch(err){
        alert("Error occured while saving your credentials ");
       }
    }
    return <div className=" h-screen w-screen bg-gray-200  flex  justify-center items-center">
       <div className=" bg-white rounded border min-w-48  flex flex-col p-8 gap-4">
       <div className="text-center">
         <p className="text-lg font-semibold">Sign Up</p>
       </div>
       <Input reference={userRef}placeholder="Username" type="text"/>
       <Input reference={passwordRef}placeholder="Password" type ="password"/>
       <Input reference={emailRef} placeholder = "Email" type="email"/>
       {/* <Input placeholder="Confirm Password" type="password"/> */}
       <div className="flex justify-center mr-8">
        <Button loading={false}variant="primary" text="Signup " onClick={SignUpUser}/>
       </div>
       </div>
      
    </div>
}
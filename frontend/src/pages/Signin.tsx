import { useRef,useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export function SignIn(){
    //  const userRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const emailRef = useRef<any>("");
  const navigate = useNavigate();
   async  function LogInUser(){
        // const userName = userRef.current?.value;
        const userPassword = passwordRef.current?.value;
        const userEmail = emailRef.current?.value;
        
        const data = {
            // name:userName,
            password:userPassword,
            email: userEmail
        }
      console.log(data)
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,data);
                console.log(response);
            const token = response.data.token;
            localStorage.setItem("token",token)
              alert("Signed in successfully")
              navigate("/dashboard")
            
        }catch(err){
            alert("Wrong user credentials entered . Please try again ")
        }
    }
    return <div className=" h-screen w-screen bg-gray-200  flex  justify-center items-center">
       <div className=" bg-white rounded border min-w-48  flex flex-col p-8 gap-4">
         <div className="text-center">
         <p className="text-lg font-semibold">Sign In</p>
       </div>
       <Input reference={emailRef} placeholder="Email" type="email"/>
       <Input reference={passwordRef}placeholder="Password" type ="password"/>
       {/* <Input placeholder="Confirm Password" type="password"/> */}
       <div className="flex justify-center mr-8">
        <Button variant="primary" text="Sign In " onClick={LogInUser} />
       </div>
       </div>
      
    </div>
}
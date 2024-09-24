import Signup from "../components/Signup"
import Signin from "../components/Signin"
import { useState } from "react"

const Login = () => {
    const [changesign,setsign]=useState(false)
  return (
    <div className="flex flex-row w-screen h-screen ">
      
      <div className="w-1/2 h-screen bg-slate-200 ">
      <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-4xl font-bold">
             Human stories and ideas
      </h2>
      <div>
      <p className="mt-2">
        A Place to read,write and deepen your understanding
        </p>
      </div>
      </div>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
      <div>
        {changesign ?<h2 className="text-3xl font-semibold mt-2 p-2 ml-10"> Login </h2> 
          :<h2 className="text-3xl font-bold mt-2 p-2"> Create an Account </h2>
         }
      <div className="flex justify-start">
      <h2 className="text-md font-thin text-gray-500 px-2 ml-2">{changesign ? "New user?":"Already have an account?"}</h2>
      <p onClick={()=>{setsign(!changesign)}}
      className="text-md font-thin text-gray-500 underline mb-2 cursor-pointer">{changesign?"SignUp here": "Login here"}</p>
      </div>
      </div>
      <div>
       {changesign ?<Signin/>:<Signup/>}
       </div>
      </div>
    </div>
  )
}

export default Login

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
    const [email,setmail]=useState("")
    const [password,setpass]=useState("")
    const[error,seterror]=useState("")
    const navigate=useNavigate()


    return (
      <div>
       <form onSubmit={(e)=>{e.preventDefault()}}>
         <p className="text-xs mt-1 font-semibold">Email</p>
         <input onChange={(e)=>{setmail(e.target.value)}}
         className="w-72 border border-gray-400 mt-1 px-2 py-1 rounded-md"type="text" placeholder="john@gmail.com"/>
         
         <p className="text-xs mt-3 font-semibold">Password</p>
         <input onChange={(e)=>{setpass(e.target.value)}}
         className="w-72 border border-gray-400 mt-1 px-2 py-1 rounded-md" type="password" placeholder="1234@1234"/>
        <div>
         <button onClick={async()=>{
             try{
                const resp=await axios.post("https://backend.121sriramreddy.workers.dev/api/v1/user/signin",{email,password})
                const token=resp.data.jwt
                console.log(resp)
                if(resp.data.jwt){
                    localStorage.setItem("token",token)
                    navigate("/blogs")
            
                 }else seterror(resp.data.message)}
                 catch (error) {
                    if (typeof error === "object" && error !== null && "response" in error) {
                      const err = error as { response: { data: { message: string } } };
                      seterror(err.response.data.message);
                    } else {
                      seterror("An unexpected error occurred. Please try again.");
                    }
                    
                  }

         }}
          className="w-72 border bg-black border-gray-300 mt-4 hover:bg-opacity-55 px-2 py-1 rounded-md text-white">Sign In </button>
         </div>
         {error && <p className=" text-gray-400 ml-5">{error}</p>}

  
       </form>
      </div>
    )
  }
  
  export default Signin
  
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
    const [email,setmail]=useState("")
    const [password,setpass]=useState("")
    const[error,seterror]=useState("")
    const[button,setbutton]=useState(false)
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
         {button ? 
<button disabled type="button" className="w-72 border bg-black border-gray-300 mt-4 hover:bg-opacity-55 px-2 py-1 rounded-md text-white">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>
Signing In
</button>:<button onClick={async()=>{
          setbutton(true)
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
        }</div>
         {error && <p className=" text-gray-400 ml-5">{error}</p>}

  
       </form>
      </div>
    )
  }
  
  export default Signin
  
import { useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Publish = () => {
    const [title,settitile]=useState("")
    const [description,setdis]=useState("")
    const navigate=useNavigate()
  return (
    <>
    <Appbar/>
    <h1 className="ml-44 mb-2 mt-1   text-2xl font-semibold font-serif ">Publish your Blog</h1>
    <div className="flex flex-col ml-44 mt-4 ">
        <div>
            <input onChange={(e)=>{settitile(e.target.value)}}
            className="block p-3 w-[400px] mb-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text" placeholder="Tile.." />
            
        </div>
      
         <textarea
               onChange={(e)=>{setdis(e.target.value)}} 
               rows={10} 
               className="block p-2.5 w-3/5  text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Write your thoughts here..."></textarea>

               </div>
    <div>
        <button onClick={async()=>{
            const resp=await axios.post("https://backend.121sriramreddy.workers.dev/api/v1/blog",
                {title,description},{headers:{Authorization:"Bearer " + localStorage.getItem("token")}})
               
        navigate(`/blog/${resp.data.id}`)
            }}
        className="ml-44 mt-2 bg-gray-400 p-2 hover:bg-opacity-50 text-gray-900 rounded-lg"
        >Publish</button>
    </div>
    </>
  )
}

export default Publish

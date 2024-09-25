import axios from "axios"
import { useEffect, useState } from "react"

const useBlog = () => {
    interface vlog{
        'id':number,
        'title':string,
        'description':string
        'authorid':number,
        'author':{'name':string}
      }
const [vlogs,setblogs]=useState<vlog[]>()

    useEffect(()=>{
        fetchdata()
    },[])
    const fetchdata=async()=>{
        const resp=await axios.get("https://backend.121sriramreddy.workers.dev/api/v1/blog/bulk",
            {headers:
                {Authorization:"Bearer "+localStorage.getItem("token")}})
        setblogs(resp.data.blogs.reverse())
    }
    return vlogs
 
}

export default useBlog

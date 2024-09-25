import axios from "axios"
import { useEffect, useState } from "react"

const useVlog = ({id}:{id:number | null}) => {
    interface vlog{
        'id':number,
        'title':string,
        'description':string
        'authorid':number,
        'author':{'name':string}
      }
     const [vlog,setvlog]=useState<vlog>()
    useEffect(()=>{
        if(id==null)
            return
        fetchdata()
    },[])
    const fetchdata=async()=>{
       const resp=await axios.get(`https://backend.121sriramreddy.workers.dev/api/v1/blog/${id}`,
        {headers:{Authorization:"Bearer "+ localStorage.getItem("token")}}
       )
      console.log(resp)
       setvlog(resp.data.blog)

    
    }
    //console.log(vlog)
    return vlog
 
}

export default useVlog


import { Link } from "react-router-dom"
interface blogcard{name:string,date:string,title:string,content:string,id:number}
const Blogcard = ({name,date,title,content,id}:blogcard) => {
  return (<Link to={`/blog/${id}`}><div className="flex flex-col items-center mt-5 ">
        <div className="ml-44 p-2 w-[60%] ">
      <div className="flex flex-row items-center ml-4">
        <div className="m-1 text-sm bg-gray-500 font-semibold text-white rounded-full  px-2 py-1 ">{name[0].toUpperCase()}</div>
        <div className="text-sm font-thin ml-2 text-gray-900">{name}</div>
        <div className="text-sm font-extralight text-slate-400 ml-4">{date}</div>
      </div>
      <div className="ml-4 font-bold text-2xl w-3/4">{title}</div>
      <div className=" ml-4 text-sm font-thin text-gray-500 w-3/4">{content.slice(0,90)}....</div>
      <div className="ml-4 mt-4 mb-8 text-gray-500 font-light">{1+Math.floor((Math.random()*10)) } Minutes</div>
      <hr></hr>
    </div>
    </div></Link>
  )
}

export default Blogcard

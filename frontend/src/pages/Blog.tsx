import { useParams } from "react-router-dom"
import Appbar from "../components/Appbar"
import Blogopen from "../components/Blogopen"
import useVlog from "../components/usevlog"

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : null; // Set to null if id is not present

  const vlog = useVlog({ id: blogId  });
  //console.log(vlog)

  return (<>
    <Appbar/>
    <div className="w-fit">
      <Blogopen blog={vlog}/>
      
    </div></>
  )
}

export default Blog

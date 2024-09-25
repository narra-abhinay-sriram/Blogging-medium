import Blogcard from "../components/Blogcard"
import useBlog from "../components/useBlog"

const Blogs = () => {
  const getRandomDateString = (start: Date, end: Date): string => {
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0]; // Returns only the date part in 'YYYY-MM-DD' format
  };
  
  

  const vlogs=useBlog()
  
  return (
    <div className="w-screen h-screen">
      {vlogs?.map((vlog)=><Blogcard name={vlog.author.name} date={   getRandomDateString(new Date(2020, 0, 1), new Date())
} title={vlog.title} content={vlog.description} />)}
     
     
    </div>
  )
}

export default Blogs


const Blogopen = ({blog}) => {
  
  if(!blog)
    return 
  return (
    <div className="flex flex-row w-screen  h-screen mt-5 ">
      <div className="w-10/12 mr-3">
<h2 className="ml-10 font-extrabold text-4xl ">{blog.title}</h2>
<p className="text-gray-600 text-xl ml-10 mt-4 w-4/5">{blog.description}</p>
      </div>
    <div>
        <div>
        <p className="text-gray-400 text-md ml-2">Author</p>
         </div>
              <div className="flex justify-center mt-2">
                <p className="bg-slate-800 rounded-full w-2 px-4 text-white text-center">{blog.author.name[0]}</p>
           <h2 className="text-slate-800 font-bold text-lg ml-2">{blog.author.name}</h2>
           </div>
      </div>
    </div>
  )
}

export default Blogopen


const Signin = () => {
    return (
      <div>
       <form onSubmit={(e)=>{e.preventDefault()}}>
         <p className="text-xs mt-1 font-semibold">Email</p>
         <input className="w-72 border border-gray-400 mt-1 px-2 py-1 rounded-md"type="text" placeholder="john@gmail.com"/>
         
         <p className="text-xs mt-3 font-semibold">Password</p>
         <input className="w-72 border border-gray-400 mt-1 px-2 py-1 rounded-md" type="password" placeholder="1234@1234"/>
        <div>
         <button className="w-72 border bg-black border-gray-300 mt-4 hover:bg-opacity-55 px-2 py-1 rounded-md text-white">Sign In </button>
         </div>
  
  
       </form>
      </div>
    )
  }
  
  export default Signin
  
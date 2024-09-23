import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { postblog, putblog } from "abhinay_narra-medium-blogging";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export  const blogrouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    },
    Variables:{
        userid:number
    }
}>()

blogrouter.use("/*",async(c,next)=>{

    const header=c.req.header("authorization")|| ""
    const token=header.split(" ")[1]
  
    try{
        const decoded :any=await verify(token,c.env.JWT_SECRET)
        console.log(decoded)
        if(decoded)
       {
        c.set("userid",decoded.userid)
        await next()
       }
    } catch(e){
        c.status(411)
       return c.json({message:"un authorized"})
    }
})

blogrouter.post("/",async (c)=>{
const body= await c.req.json()
const {success}=postblog.safeParse(body)
if(!success)
    {
        c.status(403)
        return c.json({message:"invalid input"})
    }
const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
}).$extends(withAccelerate())

try{
    const resp=await prisma.post.create({
        data:{
            title:body.title,
            description:body.description,
            authorid:c.get("userid")
        }
    })
   if(resp){
    c.status(200)
    return c.json({id:resp.id})
   }
}catch(e){
    console.log(e)
    c.status(411)
    return c.json({message:'try again'})
}


})
blogrouter.put("/",async(c)=>{
    const body= await c.req.json()
    const {success}=putblog.safeParse(body)
    if(!success)
        {
            c.status(403)
            return c.json({message:"invalid input"})
        }
const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
}).$extends(withAccelerate())

    try{
       const update=await prisma.post.update({
        where:{id:body.id},
        data:{title:body.title,description:body.description}
       })
       c.status(200)
       return c.json({message:"updated successfully",id:update.id})
    }catch(e){
        c.status(411)
        return c.json({message:"error while updating"})
    }
})
blogrouter.get("/bulk",async(c)=>{
    const prism =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blogs=await prism.post.findMany({
            select:{id:true,
                title:true,
                description:true,
                author:{select:{name:true}}
            }
        })
        if(blogs){
            c.status(200)
            return c.json({blogs})
        }
    }catch(e){
        c.status(411)
       return c.json({message:"try again"})
    }
})
blogrouter.get("/:id",async(c)=>{
    const parm=c.req.param("id")
   // console.log(parm)
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog=await prisma.post.findFirst(
            {
                where:{id:Number(parm)},
                select:{id:true,title:true,description:true,author:{select:{name:true}}}

    })
    if(blog){
        c.status(200)
    return c.json({blog})
    }
    }catch(e){
       // console.log(e)
        c.status(411)
        return c.json({message:"try again"})
    }
})

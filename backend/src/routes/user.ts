import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signup ,signin} from "abhinay_narra-medium-blogging";

export const userouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    }
}>()

userouter.post("/signup",async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body=await c.req.json()
    const {success}=signup.safeParse(body)
    if(!success)
    {
        c.status(403)
        return c.json({message:"invalid input"})
    }
   
    try{
        const resp=await prisma.user.create({
            data:{email:body.email,password:body.password,name:body.username}
        })
        const token= await sign({userid:resp.id},c.env.JWT_SECRET)
        c.status(200)
        return c.json({message:"signedup successfully",jwt:token})

    }catch(e){
        console.log(e)
        c.status(403)
        return c.json({message:"ivalid"})
    }

})

userouter.post("/signin",async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body=await c.req.json()
    const {success}=signin.safeParse(body)
    if(!success)
        {
            c.status(403)
            return c.json({message:"invalid input"})
        }
    try{
        const resp=await prisma.user.findFirst({
            where:{
                email:body.email,
                password:body.password
            }
        })
        if(resp)
        {
            const token=await sign({userid:resp.id},c.env.JWT_SECRET)
            c.status(200)
            return c.json({jwt:token})
        }
        else return c.json({message:"user not found"})
    } catch (e)
    {
        c.status(403)
        return c.json({mesage:"invalid"})
    }
})
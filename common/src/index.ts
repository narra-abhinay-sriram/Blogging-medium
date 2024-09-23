import z from "zod"
export const signup=z.object({
    email:z.string().email(),
    password:z.string().min(8),
    name:z.string().optional()
})
export const signin=z.object({
    email:z.string().email(),
    password:z.string().min(9)
})
 export const postblog=z.object({
    title:z.string(),
    description:z.string()
})
export const putblog=z.object({
    id:z.number(),
    title:z.string(),
    description:z.string()
})

export type Signupvalid=z.infer<typeof signup>

export type Signinvalid=z.infer<typeof signin>

export type Blogvalid=z.infer<typeof postblog>

export type Blogputvalid=z.infer<typeof putblog>
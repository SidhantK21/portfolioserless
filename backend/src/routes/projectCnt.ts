import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { projectContent } from "portfoliosid";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const projectRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
        header:string
    }

}>();

projectRouter.post("/projectDet",async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body=await c.req.json();

      const {success}=projectContent.safeParse(body);
      if(success)
      {
        try{
            const user=await prisma.user.create({
                data:{
                    firstName:body.firstName,
                    lastName:body.lastName,
                    email:body.email,
                    details:body.details
                }
            });
            const jwt=await sign({id:user.id},c.env.JWT_SECRET);
            return c.json({jwt});
            
           
        }catch(e)
        {
            c.status(403);
            console.log("Error occured"+e);
        }finally{
            await prisma.$disconnect();
        }
    }
    else
    {   
        c.status(403);
        console.log("Some error occured");
    }
})
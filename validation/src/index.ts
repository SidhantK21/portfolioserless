import { types } from "pg";
import {z} from "zod";

export const projectContent=z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string().email(),
    details:z.string()

})

export type content=z.infer<typeof projectContent>

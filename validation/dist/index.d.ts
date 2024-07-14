import { z } from "zod";
export declare const projectContent: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    details: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    details: string;
}, {
    firstName: string;
    lastName: string;
    email: string;
    details: string;
}>;
export type content = z.infer<typeof projectContent>;

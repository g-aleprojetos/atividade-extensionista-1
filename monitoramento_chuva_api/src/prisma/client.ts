import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// const client = new PrismaClient({
//     log:['query']
// });

export{client}
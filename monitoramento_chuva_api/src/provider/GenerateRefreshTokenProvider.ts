import dayjs from "dayjs";
import { client } from "../prisma/client"



class GenerateRefreshTokenProvider{

    async execute(usuarioId: string){
         const expiresIn = dayjs().add(1, "minute").unix();

        const generateRefreshToken = await client.refreshToken.create({
            data:{
                usuarioId,
                expiresIn
            }
        });
        return generateRefreshToken;
    }
}

export{GenerateRefreshTokenProvider}
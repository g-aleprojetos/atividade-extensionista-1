import dayjs from "dayjs";
import { client } from "../../prisma/client"
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";


class RefreshTokenUserUseCase {
 async execute(refresh_token: string){

    const refreshToken = await client.refreshToken.findFirst({
        where:{
            id: refresh_token
        }
    });
    if(!refreshToken){
        throw new Error("Refresh token invalid");
    }

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    const generateTokenProvider = new GenerateTokenProvider();
    const tokenProvider = await generateTokenProvider.execute(refreshToken.usuarioId);
    let auth = tokenProvider.auth;
    let accessToken = tokenProvider.accessToken;

    if(refreshTokenExpired){
        await client.refreshToken.deleteMany({
            where:{
                usuarioId: refreshToken.usuarioId
            }
        })
        // const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
        // const newrefreshToken = await generateRefreshTokenProvider.execute(refreshToken.userId)

        // return{token, refreshToken: newrefreshToken}
        let auth = false;
        let token = "";
    }  

    return{auth, accessToken}
 };
}

export{RefreshTokenUserUseCase}
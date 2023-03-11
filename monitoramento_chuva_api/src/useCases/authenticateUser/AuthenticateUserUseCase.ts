import { compare } from "bcryptjs";
import { client } from "../../prisma/client";
import { IRequestLogin } from "../../types/interface";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";


class AutheticateUserUsecase{
    async execute({email, senha}: IRequestLogin){
        // Verificar usuário existe
          const existeUsuario = await client.usuario.findFirst({
           where: {
             email
            }
          });
          
          if(!existeUsuario){
            return{status:400, messsage:'EMAIL ou SENHA incorreta!'}
          }
          const passwordMatch = await compare(senha, existeUsuario.senha);
          
          //Verificar se a senha está correta
          if(!passwordMatch){
            return{status:400, messsage:'EMAIL ou SENHA incorreta!'}
          }
   
    //gerar token do usuário
    const generateTokenProvider = new GenerateTokenProvider();
    const tokenProvider = await generateTokenProvider.execute(existeUsuario.id,existeUsuario )

    await client.refreshToken.deleteMany({
      where:{
        usuarioId: existeUsuario.id
      }
    })

    const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
    const refreshToken = await generateRefreshTokenProvider.execute(existeUsuario.id);

    // const dados = {
    //   email: userAlreadyExists.email,
    //   role: userAlreadyExists.role
    // }
      const auth = tokenProvider.auth;
      const accessToken = tokenProvider.accessToken;

      return{status:200, auth, accessToken, refreshToken};  
  }
}

export{AutheticateUserUsecase}
import { Request, Response } from "express";
import { AutheticateUserUsecase } from "../useCases/authenticateUser/AuthenticateUserUseCase";

class AuthenticateUserController{
  async handle(request: Request, response: Response){
    const{email, senha} = request.body;
    const autheticateUserUsecase = new AutheticateUserUsecase();

    const token = await autheticateUserUsecase.execute({
        email,
        senha,
    });
    if(token.status === 200){
      const auth = token.auth
      const accessToken = token.accessToken
      const refreshToken = token.refreshToken
      return response.status(200).json({auth, accessToken, refreshToken})
    }
    const messsage = token.messsage
    return response.status(400).json({messsage});
  }
}

export{AuthenticateUserController}
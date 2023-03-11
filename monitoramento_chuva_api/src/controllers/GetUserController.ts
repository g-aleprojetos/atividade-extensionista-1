import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/users/createUser/CreateUsersUseCase";
import { GetUserUseCase } from "../useCases/users/getUser/getUserUseCase";

class GetUserController{

    async handle(request: Request, response: Response){
        
        const createUserUseCase = new GetUserUseCase();

        const usuarios = await createUserUseCase.execute()

        if(usuarios.status === 200){ 
            return response.status(200).json(usuarios)
        }

        const messsage = usuarios.messsage
         return response.status(204).json(messsage);
    }
}

export{GetUserController }
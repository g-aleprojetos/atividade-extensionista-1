import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/users/createUser/CreateUsersUseCase";

class CreateUserController{

    async handle(request: Request, response: Response){
        const{nome, email, cargo, senha, role, criadoPor} = request.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({
            nome,
            email,
            cargo,
            senha,
            role,
            criadoPor,
        })
        if(user.status === 200){ 
            return response.status(200).json(user)
        }

        const messsage = user.messsage
         return response.status(400).json(messsage);
          
    }
}

export{CreateUserController}


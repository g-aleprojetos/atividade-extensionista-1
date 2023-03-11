import { Request, Response } from "express";
import { UpdateUserUseCase } from "../useCases/users/updateUser/UpdateUsersUseCase";

class UpdateUserController{

    async handle(request: Request, response: Response){
        const{id, nome, email, cargo, senha, role, atualizadoPor} = request.body;

        const createUserUseCase = new UpdateUserUseCase();

        const user = await createUserUseCase.execute({
            id,
            nome,
            email,
            cargo,
            senha,
            role,
            atualizadoPor,
        })
        if(user.status === 200){ 
            return response.status(200).json(user)
        }

        const messsage = user.messsage
         return response.status(400).json(messsage);
          
    }
}

export{UpdateUserController}


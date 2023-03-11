import { Request, Response } from "express";
import { DeleteUserUseCase } from "../useCases/users/deleteUser/DeleteUsersUseCase";

class DeleteUserController{

    async handle(request: Request, response: Response){
        const{id, deletadoPor} = request.body;

        const deleteUserUseCase = new DeleteUserUseCase();

        const user = await deleteUserUseCase.execute({
            id,
            deletadoPor
        })

        if(user.status === 200){ 
            return response.status(200).json(user)
        }

        const messsage = user.messsage
         return response.status(400).json(messsage);
          
    }
}

export{DeleteUserController}


import { Request, Response } from "express";
import { UpdateDeviceUseCase } from "../useCases/device/updateDevice/UpdateDeviceUseCase";

class UpdateDeviceController{

    async handle(request: Request, response: Response){
        const{ id, 
               nome,   
               leitura_sensores, 
               nivel_agua, 
               endereco_Id,
               endereco,     
               atualizadoPor} = request.body;

        const createUserUseCase = new UpdateDeviceUseCase();

        const user = await createUserUseCase.execute({
            id, 
            nome, 
            leitura_sensores, 
            nivel_agua, 
            endereco_Id,
            endereco,     
            atualizadoPor     
    
        })
        if(user.status === 200){ 
            return response.status(200).json(user)
        }

        const messsage = user.messsage
         return response.status(400).json(messsage);
          
    }
}

export{UpdateDeviceController}


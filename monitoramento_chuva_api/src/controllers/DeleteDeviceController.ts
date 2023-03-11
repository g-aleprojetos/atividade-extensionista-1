import { Request, Response } from "express";
import { DeleteDeviceUseCase } from "../useCases/device/deleteDevice/DeleteDeviceUseCase";

class DeleteDeviceController{

    async handle(request: Request, response: Response){   
        const{id, deletadoPor} = request.body;

        const deleteDeviceUseCase = new DeleteDeviceUseCase();

        const device = await deleteDeviceUseCase.execute({
            id,
            deletadoPor
        })

        if(device.status === 200){ 
            return response.status(200).json(device)
        }

        return response.status(400).json(device);
          
    }
}

export{DeleteDeviceController}


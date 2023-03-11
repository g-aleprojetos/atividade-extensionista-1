import { Request, Response } from "express";
import { GetDeviceUseCase } from "../useCases/device/getDevice/getDeviceUseCase";

class GetDeviceController{

    async handle(request: Request, response: Response){
        
        const createdeviceUseCase = new GetDeviceUseCase();

        const devices = await createdeviceUseCase.execute()

        if(devices.status === 200){ 
            return response.status(200).json(devices)
        }

        const messsage = devices.messsage
         return response.status(204).json(messsage);
    }
}

export{GetDeviceController }
import { Request, Response } from "express";
import { GetReadUseCase } from "../useCases/read/getRead/getReadUseCase";

class GetReadController{

    async handle(request: Request, response: Response){
        
        const getReadCase = new GetReadUseCase();

        const leituras = await getReadCase.execute()

        if(leituras.status === 200){ 
            return response.status(200).json(leituras)
        }

        const messsage = leituras.messsage
         return response.status(204).json(messsage);
    }
}

export{GetReadController }
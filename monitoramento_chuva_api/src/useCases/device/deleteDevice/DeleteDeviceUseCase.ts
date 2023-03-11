import { client } from "../../../prisma/client";
import { IRequestDelete } from "../../../types/interface";

class DeleteDeviceUseCase{

    async execute({id, deletadoPor}: IRequestDelete){
         //Verifica se o usuário existe
         const existeDevice = await client.device.findFirst({
             where:{
                 id
                }
            })

       if(!existeDevice){   
        return{status:400, messsage:'Não existe o Device'}
       }
       
       const device = await client.device.update({
        where: {
            id,
          },
        data:{           
            deletadoEm:  new Date(),
            deletadoPor: deletadoPor,
            deletado: true
        }
       })

       const endereco = await client.endereco.update({
        where: {
            id: device.endereco_Id!,
          },
        data:{           
            deletadoEm:  new Date(),
            deletadoPor: deletadoPor,
            deletado: true
        }
       })

       return{status:200, messsage:'Device foi deletado com sucesso!'};
    }
}

export {DeleteDeviceUseCase}

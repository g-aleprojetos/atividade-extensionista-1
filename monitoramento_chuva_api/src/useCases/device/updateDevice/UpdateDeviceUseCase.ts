import { Device, Endereco } from "@prisma/client";
import { client } from "../../../prisma/client";
import { IDeviceResponse } from "../../../types/interface/IDeviceResponse";

class UpdateDeviceUseCase{ 

    async execute({   id, 
                      nome, 
                      leitura_sensores, 
                      nivel_agua, 
                      endereco,
                      endereco_Id,     
                      atualizadoPor }: IDeviceResponse){
        
       
       //Verifica se o Device existe
       const device = await client.device.findFirst({
            where:{
              AND: [{ id: { contains: id } }, { deletado: false }],
              }
            })
            
       if(!device){   
        return{status:400, messsage:'Não existe o Device'}
       }
  
       const enderecoResponse = await client.endereco.upsert({
        where: { id: `${endereco_Id}` },
        update: {
                     device: {
                         connect:{
                             id: device.id
                         }
                     },
                     localizacao: endereco?.localizacao,
                     endereco: endereco?.endereco,
                     bairro: endereco?.bairro,
                     cidade: endereco?.bairro,
                     uf: endereco?.uf,
                     atualizadoPor: atualizadoPor,
                     deletado: false,  
                     atualizadoEm: new Date(),
                     deletadoEm: null 
                    
                },
        create: {
                    device: {
                        connect:{
                            id: device.id
                        }
                    },
                    localizacao: endereco?.localizacao,
                    endereco: endereco?.endereco,
                    bairro: endereco?.bairro,
                    cidade: endereco?.cidade,
                    uf: endereco?.uf,
                    criadoEm: new Date(),
                    criadoPor: atualizadoPor,
                    deletado: false,   
                    atualizadoEm: null,
                    deletadoEm: null 
        },
      });

      const deviceResposta: Device = await client.device.update({
        where: {
            id,            
          },
        data: {
            nome: nome ?? device.nome, 
            leitura_sensores: leitura_sensores ?? device.leitura_sensores, 
            nivel_agua: nivel_agua ?? device.nivel_agua,     
            atualizadoPor: atualizadoPor,   
            atulizadoEm: new Date(),
            endereco:{
               connect:{
                   id: enderecoResponse.id
                }
            }           
        },
        include:{ endereco: true},
       })
       
       return{status:200, deviceResposta};
    }
}

export {UpdateDeviceUseCase}


 
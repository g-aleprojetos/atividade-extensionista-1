import { Device } from "@prisma/client";
import { client } from "../../../prisma/client";
import { IDeviceResponse } from "../../../types/interface/IDeviceResponse";

class GetDeviceUseCase{
    async execute(){
       
       const deviceClient = await client.device.findMany({
        where:{
            deletado: false
        },
            select:{
                id: true,
                nome: true,
                uniqueID:true,
                latitude: true,
                longitude: true,
                leitura_sensores: true,
                nivel_agua: true,
                criadoEm: true,
                atulizadoEm: true,
                endereco: {
                    select:{
                        id:true,
                        localizacao:true,
                        endereco:true,
                        bairro:true,
                        cidade: true,
                        uf: true,
                    }
                }
            }        
       })
       
       if(!deviceClient){
        return{status:204, messsage:'Não contem devices cadastrados!'}
       }

       return{status:200, devices: deviceClient};
    }
}

export {GetDeviceUseCase}
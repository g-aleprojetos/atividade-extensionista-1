import { client } from "../../../prisma/client";

class GetReadUseCase{
    async execute(){

       const leituras = await client.leitura.findMany({
         distinct: ['device_id'],
         orderBy: {
            data_leitura: 'desc',
          },
         select:{
            id: true,
            anemometro: true,      
            direcao_vento: true,
            pluviometro:true,     
            temperatura: true,     
            umidade: true,         
            nivel_agua: true,       
            pressao: true,          
            data_leitura: true,     
            device:{
               select:{
                  id: true,
                  uniqueID: true,
                  nome: true,
                  nivel_agua: true,
                  leitura_sensores: true
               }
            }
          }       
       })

       if(!leituras){
        return{status:204, messsage:'Não contem leituras!'}
       }

    
       return{status:200, leituras: leituras};
    }
}

export {GetReadUseCase}
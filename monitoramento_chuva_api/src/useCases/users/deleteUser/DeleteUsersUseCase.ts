import { client } from "../../../prisma/client";
import { IRequestDelete } from "../../../types/interface";

class DeleteUserUseCase{

    async execute({id, deletadoPor}: IRequestDelete){
         //Verifica se o usuário existe
         const usuarioExiste = await client.usuario.findFirst({
             where:{
                 id
                }
            })
                 
       if(!usuarioExiste){   
        return{status:400, messsage:'Não existe o Usuário'}
       }

       const usuario = await client.usuario.update({
        where: {
            id,
          },
        data:{
            deletadoEm:  new Date(),
            deletadoPor: deletadoPor,
            deletado: true
        }
       })
       return{status:200, messsage:'Deletado com sucesso!'};
    }
}

export {DeleteUserUseCase}

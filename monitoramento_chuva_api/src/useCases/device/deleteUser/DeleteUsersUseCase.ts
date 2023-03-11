import { hash } from "bcryptjs";
import { client } from "../../../prisma/client";
import { IRequestDelete } from "../../../types/interface";

class DeleteUserUseCase{

    async execute({id, deletadoPor}: IRequestDelete){
         //Verifica se o usuário existe
         const userAlreadyExixts = await client.usuario.findFirst({
             where:{
                 id
                }
            })
          
       
       if(!userAlreadyExixts){   
        return{status:400, messsage:'Não existe o Usuário'}
       }
       const usuario = await client.usuario.update({
        where: {
            id,
          },
        data:{
            nome: userAlreadyExixts.nome,
            email: userAlreadyExixts.email,
            cargo: userAlreadyExixts.cargo,
            senha: userAlreadyExixts.senha,
            role: userAlreadyExixts.role,
            deletado: true,
            criadoPor: userAlreadyExixts.criadoPor,
            criadoEm: userAlreadyExixts.criadoEm,
            atulizadoEm: userAlreadyExixts.atulizadoEm,
            atualizadoPor: userAlreadyExixts.atualizadoPor,
            deletadoEm:  new Date(),
            deletadoPor: deletadoPor,
        }
       })
       return{status:200, messsage:'Deletado com sucesso!'};
    }
}

export {DeleteUserUseCase}

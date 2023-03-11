import { Usuario } from "@prisma/client";
import { hash } from "bcryptjs";
import { client } from "../../../prisma/client";
import { IUserRequest } from "../../../types/interface";

class UpdateUserUseCase{

    async execute({id, nome, email, cargo, senha, role, atualizadoPor}: IUserRequest){
         //Verifica se o usuário existe
         const userAlreadyExixts = await client.usuario.findFirst({
             where:{
                 id,
                 deletado: false
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
            nome: nome ?? userAlreadyExixts.nome,
            email: email ?? userAlreadyExixts.email,
            cargo: cargo ?? userAlreadyExixts.cargo,
            senha: senha? await hash(senha, 8) : userAlreadyExixts.senha,
            role: role ?? userAlreadyExixts.role,
            deletado: false,
            criadoPor: userAlreadyExixts.criadoPor,
            criadoEm: userAlreadyExixts.criadoEm,
            atulizadoEm: new Date(),
            atualizadoPor: atualizadoPor,
            deletadoEm: null
        }
       })

       return{status:200, usuario};
    }
}

export {UpdateUserUseCase}

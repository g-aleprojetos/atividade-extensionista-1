import { Usuario } from "@prisma/client";
import { hash } from "bcryptjs";
import { client } from "../../../prisma/client";
import { IUserRequest } from "../../../types/interface";
import { IUserResponse } from "../../../types/interface/IUserResponse";

class GetUserUseCase{
    async execute(){

        function mapearResposta(users: Usuario):IUserResponse {
            return{
                id: users.id,
                nome: users.nome,
                email: users.email,
                cargo: users.cargo,
                role: users.role,
            }
        }
       
       const usersClient = await client.usuario.findMany({
        where:{
            deletado: false
        }
       })

       if(!usersClient){
        return{status:204, messsage:'Não contem usuários cadastrados!'}
       }
    
       const usuarios = usersClient.map(mapearResposta)
    
       return{status:200, users: usuarios};
    }
}

export {GetUserUseCase}
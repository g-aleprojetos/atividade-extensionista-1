import { hash } from "bcryptjs";
import { client } from "../../../prisma/client";
import { IUserRequest } from "../../../types/interface";

class CreateUserUseCase{

    async execute({nome, email, cargo, senha, role, criadoPor}: IUserRequest){
         //Verifica se o usuário existe
       const userAlreadyExixts = await client.usuario.findFirst({
        where:{
            email,
            deletado: false
        }
       })

       if(userAlreadyExixts && userAlreadyExixts.deletado === false){
        return{status:400, messsage:'Usuário já cadastrado'}
       }
       //Cadastra o usuário

       const passwordHash = await hash(senha, 8);

       const usuario = await client.usuario.create({
        data:{
            nome,
            email,
            cargo,
            senha: passwordHash,
            role,
            criadoPor,
            criadoEm: new Date(),
            deletado: false,   
            atulizadoEm: null,
            deletadoEm: null       
        }
       })
       return{status:200, user: usuario};
    }
}

export {CreateUserUseCase}

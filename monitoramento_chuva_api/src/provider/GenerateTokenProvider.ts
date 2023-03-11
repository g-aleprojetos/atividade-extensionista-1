import { Usuario } from "@prisma/client";
import { sign } from "jsonwebtoken";

class GenerateTokenProvider {

    async execute(usuarioId: string, usuario?: Usuario){
        const accessToken = sign({nome: usuario?.nome, role: usuario?.role},`${ process.env.SECRET}`, {
            subject:usuarioId,
            expiresIn: 300,
        });

        return {auth: true, accessToken};
    }
}
export {GenerateTokenProvider}
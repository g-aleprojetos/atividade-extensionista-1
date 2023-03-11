import { Role } from "@prisma/client";

export interface IUserResponse {
    id: string
    nome: string;
    email: string;
    cargo: string;
    role: Role;
}
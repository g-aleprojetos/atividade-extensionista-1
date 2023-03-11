import { Roles } from "../enums";

export interface IUserRequest {
    id?: string;
    nome: string;
    email: string;
    cargo: string;
    senha: string;
    role: Roles;
    criadoPor?: string;
    atualizadoPor?: string;
    deletado?: boolean;
}

  
import {Roles} from './enuns/roles';

export interface IUsuario {
  id: string;
  nome: string;
  role?: Roles;
  email?: string;
  cargo?: string;
  senha?: string;
  confirmaSenha?: string;
  criadoPor?: string;
  criadoEm?: string;
}

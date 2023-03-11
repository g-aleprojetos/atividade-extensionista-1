import {Roles} from '../enuns/roles';

export interface IUsuarioRequest {
  id?: string;
  nome?: string;
  role?: Roles;
  email?: string;
  cargo?: string;
  senha?: string;
  criadoPor?: string;
  atualizadoPor?: string;
  deletadoPor?: string;
}

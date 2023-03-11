import {IUsuario} from '../usuario';

export interface IUsuarioResponse {
  users?: IUsuario[];
  error?: boolean;
  message?: string;
}

export interface IUsuarioResponseGet {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  role: string;
}

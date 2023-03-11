import {IEndereco} from './endereco';

export interface IDevice {
  id: string;
  nome?: string;
  uniqueID: string;
  latitude?: string;
  longitude?: string;
  leitura_sensores?: boolean;
  nivel_agua?: boolean;
  criadoEm: string;
  atualizadoEm?: string;
  atualizadoPor?: string;
  endereco_Id?: string;
  endereco?: IEndereco;
  deletatoPor?: string;
  deletado?: boolean;
}

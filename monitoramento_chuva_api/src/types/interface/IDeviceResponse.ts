import { IEnderecoResponse } from "./IEnderecoResponse";

export interface IDeviceResponse {
    id?: string;
    nome?: string;
    uniqueID?: string;
    latitude?: string;       
    longitude?: string;
    leitura_sensores?: boolean;
    nivel_agua?: boolean;
    endereco_Id?: string;
    endereco?: IEnderecoResponse;    
    atualizadoPor?: string;     
    deletado?: boolean;
    deletadoPor?: string;
}
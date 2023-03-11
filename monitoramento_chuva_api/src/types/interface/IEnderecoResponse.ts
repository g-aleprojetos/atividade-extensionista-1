import { Device } from "@prisma/client";

export interface IEnderecoResponse {
    id?: string;
    device?: Device;
    deviceId?: string;
    localizacao?: string;        
    endereco?: string;        
    bairro?: string; 
    cidade?: string; 
    uf?: string; 
    criadoPor?: string;     
    atualizadoPor?: string;      
    deletado?: boolean;
    deletadoPor?: string; 
}
import {ILeitura} from '../leitura';

export interface ILeituraResponse {
  leituras?: ILeitura[];
  error?: boolean;
  message?: string;
}

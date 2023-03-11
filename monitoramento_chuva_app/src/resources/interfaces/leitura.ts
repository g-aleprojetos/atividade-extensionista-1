import {IDevice} from './device';

export interface ILeitura {
  id: string;
  device: IDevice;
  device_id?: string;
  anemometro?: number;
  direcao_vento?: number;
  pluviometro?: number;
  temperatura?: number;
  umidade?: number;
  nivel_agua?: number;
  pressao?: number;
  data_leitura: string;
}

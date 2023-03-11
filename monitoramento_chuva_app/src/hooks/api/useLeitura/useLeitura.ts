import {services} from 'infraestrutura/services';
import {ILeituraResponse} from 'resources/interfaces/response/leituraResponse';
import rotasAPI from 'resources/rotasAPI';

export const useLeitura = () => {
  const obtemLeitura = async () => {
    const api = await services.getAllFrom(rotasAPI.leitura);
    if (api.status === 200) {
      if (api.data) {
        return {
          leituras: api.data.leituras,
          error: false,
        } as ILeituraResponse;
      }
    } else if (api.status === 204) {
      return {
        message: `${api.data}`,
        error: true,
      } as ILeituraResponse;
    } else if (api.status === 400) {
      return {
        message: `${api.data}`,
        error: true,
      } as ILeituraResponse;
    } else if (api.status === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as ILeituraResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as ILeituraResponse;
    }
  };

  return {
    obtemLeitura,
  };
};

import {services} from 'infraestrutura/services';
import {IDevice} from 'resources/interfaces';
import {IDeviceResponse as IDeviceResponse} from 'resources/interfaces/response/deviceResponse';
import rotasAPI from 'resources/rotasAPI';

export const useDevice = () => {
  const obtemDevice = async () => {
    const api = await services.getAllFrom(rotasAPI.device);
    if (api.status === 200) {
      if (api.data) {
        return {
          devices: api.data.devices,
          error: false,
        } as IDeviceResponse;
      }
    } else if (api.status === 204) {
      return {
        message: `${api.data}`,
        error: true,
      } as IDeviceResponse;
    } else if (api.status === 400) {
      return {
        message: `${api.data}`,
        error: true,
      } as IDeviceResponse;
    } else if (api.status === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IDeviceResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IDeviceResponse;
    }
  };

  const atualizaDevice = async (device: IDevice) => {
    const api = await services.putInto<IDeviceResponse>(rotasAPI.device, device);
    if (api.status === 200) {
      if (api.data) {
        return {
          device: api.data.devices,
          message: 'Cadastro feito com sucesso!',
          error: false,
        } as IDeviceResponse;
      }
    } else if (api.status === 400) {
      return {
        message: `${api.data}`,
        error: true,
      } as IDeviceResponse;
    } else if (api.status === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IDeviceResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IDeviceResponse;
    }
  };

  const deletaDevice = async (idDevice: string, deletadoPor: string) => {
    const api = await services.deleteThis(
      `${rotasAPI.device}/${idDevice}`,
      `${idDevice}`,
      `${deletadoPor}`,
    );
    if (api === 200) {
      return {
        message: 'O device foi deletado com sucesso',
        error: false,
      } as IDeviceResponse;
    } else if (api === 400) {
      return {
        message: 'Não existe o Device.',
        error: true,
      } as IDeviceResponse;
    } else if (api === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IDeviceResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IDeviceResponse;
    }
  };
  return {
    obtemDevice,
    atualizaDevice,
    deletaDevice,
  };
};

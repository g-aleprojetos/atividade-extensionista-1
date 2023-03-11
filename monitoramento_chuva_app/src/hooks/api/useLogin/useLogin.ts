import {useAutenticadoContext} from 'context/autenticador';
import {services} from 'infraestrutura/services';
import {IErroAPI, ILoginRequest, ILoginResponse} from 'resources/interfaces';
import rotasAPI from 'resources/rotasAPI';

export const useLogin = () => {
  const {handleAutenticado} = useAutenticadoContext();

  const loginValidacao = async (login: ILoginRequest) => {
    const api = await services.postInto<ILoginResponse>(rotasAPI.login, login);
    if (api.status === 200) {
      if (api.data) {
        handleAutenticado(api.data);
        return {
          erro: false,
        } as IErroAPI;
      }
    } else if (api.status === 400) {
      return {
        mensagem: `${api.data.mensagem}`,
        erro: true,
      } as IErroAPI;
    } else if (api.status === 500) {
      return {
        mensagem: 'Servidor não responde',
        erro: true,
      } as IErroAPI;
    } else {
      return {
        mensagem: 'Erro desconhecido',
        erro: true,
      } as IErroAPI;
    }
  };
  return {
    loginValidacao,
  };
};

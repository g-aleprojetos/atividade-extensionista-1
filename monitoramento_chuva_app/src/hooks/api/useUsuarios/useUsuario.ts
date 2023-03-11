import {services} from 'infraestrutura/services';
import {IUsuarioRequest} from 'resources/interfaces/request/usuarioRequest';
import {IUsuarioResponse} from 'resources/interfaces/response/usuarioResponse';
import rotasAPI from 'resources/rotasAPI';

export const useUsuario = () => {
  const salvarUsuario = async (usuario: IUsuarioRequest, atualizaCadastro?: boolean) => {
    const api = atualizaCadastro
      ? await services.putInto<IUsuarioResponse>(rotasAPI.usuario, usuario)
      : await services.postInto<IUsuarioResponse>(rotasAPI.usuario, usuario);
    if (api.status === 200) {
      if (api.data) {
        return {
          usuarios: api.data.users,
          message: 'Cadastro feito com sucesso!',
          error: false,
        } as IUsuarioResponse;
      }
    } else if (api.status === 400) {
      return {
        message: `${api.data}`,
        error: true,
      } as IUsuarioResponse;
    } else if (api.status === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IUsuarioResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IUsuarioResponse;
    }
  };

  const obterUsuarios = async () => {
    const api = await services.getAllFrom(rotasAPI.usuario);
    if (api.status === 200) {
      if (api.data) {
        return {
          users: api.data.users,
          error: false,
        } as IUsuarioResponse;
      }
    } else if (api.status === 204) {
      return {
        message: `${api.data}`,
        error: true,
      } as IUsuarioResponse;
    } else if (api.status === 400) {
      return {
        message: `${api.data}`,
        error: true,
      } as IUsuarioResponse;
    } else if (api.status === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IUsuarioResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IUsuarioResponse;
    }
  };

  const deletaUsuario = async (idUsuario: string, deletadoPor: string) => {
    const api = await services.deleteThis(
      `${rotasAPI.usuario}/${idUsuario}`,
      `${idUsuario}`,
      `${deletadoPor}`,
    );
    if (api === 200) {
      return {
        message: 'Usuário deletado com sucesso!',
        error: false,
      } as IUsuarioResponse;
    } else if (api === 400) {
      return {
        message: 'Usuário não encontrado',
        error: true,
      } as IUsuarioResponse;
    } else if (api === 500) {
      return {
        message: 'Servidor não responde',
        error: true,
      } as IUsuarioResponse;
    } else {
      return {
        message: 'Erro desconhecido',
        error: true,
      } as IUsuarioResponse;
    }
  };
  return {
    salvarUsuario,
    obterUsuarios,
    deletaUsuario,
  };
};

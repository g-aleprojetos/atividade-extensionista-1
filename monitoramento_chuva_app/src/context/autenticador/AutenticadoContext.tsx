import React, {createContext, ReactNode, useContext, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {ILoginResponse, IUsuario, Roles} from 'resources/interfaces';

interface IAccessToken {
  sub: string;
  nome: string;
  role: Roles;
  exp: number;
  iat: number;
}

type AutenticadorContext = {
  autenticado: boolean;
  usuario: IUsuario | undefined;
  handleAutenticado: (_item: ILoginResponse) => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

export const AutenticadoContext = createContext({} as AutenticadorContext);

export const AutenticadoProvide = ({children}: BackgroundProvider) => {
  const [auth, setAuth] = useState<ILoginResponse>();
  const [usuario, setUsuario] = useState<IUsuario>();
  const handleAutenticado = (token: ILoginResponse) => {
    setAuth(token);
    const accessToken: IAccessToken = jwt_decode(token.accessToken);
    setUsuario({
      id: accessToken.sub,
      nome: accessToken.nome,
      role: accessToken.role,
    });
    localStorage.setItem('tokens', JSON.stringify(accessToken));
    localStorage.setItem('user', JSON.stringify({nome: accessToken.nome, role: accessToken.role}));
  };

  return (
    <AutenticadoContext.Provider
      value={{
        autenticado: auth?.auth ? auth?.auth : false,
        usuario,
        handleAutenticado,
      }}>
      {children}
    </AutenticadoContext.Provider>
  );
};
export function useAutenticadoContext() {
  return useContext(AutenticadoContext);
}

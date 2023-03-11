import {AutenticadoContext} from 'context/autenticador';
import {useContext, useDebugValue} from 'react';

export const useAutenticacao = () => {
  const {usuario} = useContext(AutenticadoContext);
  useDebugValue(usuario, usuario => (usuario?.nome ? 'Logged In' : 'Logged Out'));
  return useContext(AutenticadoContext);
};

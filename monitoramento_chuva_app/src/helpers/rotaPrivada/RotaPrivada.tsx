import React from 'react';
import {useAutenticadoContext} from 'context/autenticador';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import rotas from 'resources/rotas';
import {Roles} from 'resources/interfaces';

export const RotaPrivada = ({roles}: {roles: Array<Roles>}) => {
  const {usuario} = useAutenticadoContext();
  const location = useLocation();
  const autorizacao = roles.find(role => role === usuario?.role);

  return autorizacao ? (
    <Outlet />
  ) : usuario ? (
    <Navigate to={rotas.NaoAutorizado} state={{from: location}} replace />
  ) : (
    <Navigate to={rotas.Login} state={{from: location}} replace />
  );
};

// import {useAutenticado} from 'helpers';
import React from 'react';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import rotas from 'resources/rotas';

export const RotaPublica = () => {
  const location = useLocation();
  const usuario = localStorage.getItem('user');
  // const autenticado = useAutenticado();
  // return usuario ? <Navigate to={rotas.Dashboard} state={{from: location}} replace /> : <Outlet />;
  return <Outlet />;
};

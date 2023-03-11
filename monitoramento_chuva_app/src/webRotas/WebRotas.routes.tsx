import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Login} from 'Pages/login';
import {NotFound} from 'Pages/NotFound';
import {Dashboard} from 'Pages/dashboard';
import {CadastroUsuario} from 'Pages/cadastroUsuario';
import {CadastroDevice} from 'Pages/cadastroDevice';
import {Device} from 'Pages/device';
import rotas from 'resources/rotas';

import * as S from './webRotas.styles';
import {Header} from 'components/header';
import {RotaPrivada} from 'helpers';
import {Roles} from 'resources/interfaces';
import {NaoAutorizado} from 'Pages/NaoAutorizado/naoAutorizado';
import {useAutenticadoContext} from 'context/autenticador';
import {RotaPublica} from 'helpers';

export const WebRotas = () => {
  const {autenticado} = useAutenticadoContext();
  return (
    <S.Container data-testid={'test_rotas_privadas'}>
      {autenticado && <Header />}
      <Routes>
        <Route path="/login" element={<RotaPublica />}>
          <Route path={rotas.Login} element={<Login />} />
        </Route>
        <Route path="/" element={<RotaPrivada roles={[Roles.ADMIN, Roles.USER]} />}>
          <Route path={rotas.Dashboard} element={<Dashboard />} />
          <Route path={rotas.Device} element={<Device />} />
          <Route path={rotas.NaoAutorizado} element={<NaoAutorizado />} />
          <Route path={rotas.NotFound} element={<NotFound />} />
          <Route path="/" element={<RotaPrivada roles={[Roles.ADMIN]} />}>
            <Route path={rotas.CadastroUsuario} element={<CadastroUsuario />} />
            <Route path={rotas.CadastroDevice} element={<CadastroDevice />} />
          </Route>
        </Route>
      </Routes>
    </S.Container>
  );
};

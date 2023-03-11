import React, {useState} from 'react';
import {Nav} from 'components/nav';
import * as S from './Header.styles';
import {Popup} from 'components/popup/popupConfirma';
import {ILoginResponse} from 'resources/interfaces';
import {useAutenticadoContext} from 'context/autenticador';
import {useNavigate} from 'react-router-dom';
import rotas from 'resources/rotas';

export const Header = () => {
  const navigate = useNavigate();
  const {handleAutenticado} = useAutenticadoContext();
  const [openLogout, setOpenLogout] = useState<boolean>(false);
  const handleLogout = () => {
    setOpenLogout(prev => !prev);
  };

  const handleOnConfirmarLogout = () => {
    handleLogout;
    navigate(rotas.Login);
    localStorage.clear();
    const logOut: ILoginResponse = {
      auth: false,
      accessToken: '',
      refreshToken: {id: '', expiresIn: 0, usuarioId: ''},
    };
    handleAutenticado(logOut);
  };

  return (
    <>
      <S.ContainerHeader data-testid={'test_header'}>
        <S.ContainerContent>
          <Nav handleLogout={handleLogout} />
        </S.ContainerContent>
      </S.ContainerHeader>
      {openLogout && (
        <Popup
          textTitle="Deseja fazer Logout?"
          onConfirma={handleOnConfirmarLogout}
          onClickClose={handleLogout}
        />
      )}
    </>
  );
};

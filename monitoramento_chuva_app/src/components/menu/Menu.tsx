import React, {useState} from 'react';
import {TextoSmall, TextoXSmall} from 'components/texto';
import {useNavigate} from 'react-router-dom';
import rotas from 'resources/rotas';
import colors from 'resources/colors';
import * as S from './Menu.styles';
import {useAutenticadoContext} from 'context/autenticador';
import {Roles} from 'resources/interfaces';

export type Props = S.PropsMenu & {
  handleLogout: () => void;
};

export const Menu = (props: Props) => {
  const {handleLogout} = props;
  const navigate = useNavigate();
  const {usuario} = useAutenticadoContext();
  const [telaAtiva, setTelaAtiva] = useState<string>(rotas.Dashboard);

  const handleNavegate = (item: string) => {
    setTelaAtiva(item);
    navigate(item);
  };

  return (
    <S.ContainerNav data-testid={'test_menu'}>
      <S.ContainerContent data-testid={'test_containerContent'}>
        {usuario?.role === Roles.ADMIN && (
          <>
            <S.ItemNav
              isActive={telaAtiva === rotas.Dashboard}
              onClick={() => {
                handleNavegate(rotas.Dashboard);
              }}>
              {telaAtiva === rotas.Dashboard ? (
                <TextoSmall peso="bold" cursor="default">
                  Dashboard
                </TextoSmall>
              ) : (
                <TextoXSmall cursor="pointer" cor={colors.lightgray}>
                  Dashboard
                </TextoXSmall>
              )}
            </S.ItemNav>
            <S.ItemNav
              isActive={telaAtiva === rotas.CadastroUsuario}
              onClick={() => {
                handleNavegate(rotas.CadastroUsuario);
              }}>
              {telaAtiva === rotas.CadastroUsuario ? (
                <TextoSmall peso="bold" cursor="default">
                  Cadastrar Usuario
                </TextoSmall>
              ) : (
                <TextoXSmall cursor="pointer" cor={colors.lightgray}>
                  Cadastrar Usuario
                </TextoXSmall>
              )}
            </S.ItemNav>
            <S.ItemNav
              isActive={telaAtiva === rotas.CadastroDevice}
              onClick={() => {
                handleNavegate(rotas.CadastroDevice);
              }}>
              {telaAtiva === rotas.CadastroDevice ? (
                <TextoSmall peso="bold" cursor="default">
                  Cadastrar Device
                </TextoSmall>
              ) : (
                <TextoXSmall cursor="pointer" cor={colors.lightgray}>
                  Cadastrar Device
                </TextoXSmall>
              )}
            </S.ItemNav>
          </>
        )}
        <S.ItemNav
          onClick={() => {
            handleLogout();
          }}>
          <TextoXSmall cursor="pointer" cor={colors.lightgray}>
            Logout
          </TextoXSmall>
        </S.ItemNav>
      </S.ContainerContent>
    </S.ContainerNav>
  );
};

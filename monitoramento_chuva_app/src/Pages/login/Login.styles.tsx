import colors from 'resources/colors';
import sizes from 'resources/sizes';
import styled from 'styled-components';
import logo from 'assets/icon/logo.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Secao = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.px55} ${sizes.px34};
  box-shadow: ${sizes.px21} ${sizes.px21} ${sizes.px21};
  background-color: ${colors.white};
`;

export const MsgErro = styled.p`
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

export const ContainerCadastrarUsuario = styled.p`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const containerLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

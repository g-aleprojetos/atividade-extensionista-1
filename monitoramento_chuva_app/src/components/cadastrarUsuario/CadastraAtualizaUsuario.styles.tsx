import styled from 'styled-components';
import sizes from 'resources/sizes';

export interface PropsCadastrarUsuario {
  marginDropdown?: string;
}

export const Container = styled.div`
  display: flex;
  margin-bottom: ${sizes.px13};
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
`;

export const ContainerLinha = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const ContainerDropdown = styled.div<PropsCadastrarUsuario>`
  display: flex;
  justify-content: center;
  margin: ${props => props.marginDropdown ?? sizes.px13};
  width: 100%;
`;

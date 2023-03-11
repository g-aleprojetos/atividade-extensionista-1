import colors from 'resources/colors';
import sizes from 'resources/sizes';
import styled from 'styled-components';

export interface Props {
  tamanhoDiv?: number;
  alinhaDiv?: 'center' | 'flex-start';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerCadastarUsuario = styled.div`
  display: flex;
  padding: ${sizes.px8} ${sizes.px55};
`;

export const ContainerListaDevices = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${sizes.px8} ${sizes.px55};
`;

export const ContainerCabecalhoLista = styled.ul`
  display: flex;
`;

export const ContainerItem = styled.li`
  display: flex;
  width: 100%;
  list-style-type: none;
  padding: 0.5em 0;
  border-bottom: 1px solid ${colors.black};
`;

export const Item = styled.div<Props>`
  display: flex;
  justify-content: ${props => props.alinhaDiv ?? 'flex-start'};
  margin-top: ${sizes.px13};
  min-width: ${props => props.tamanhoDiv ?? 0}px;
`;

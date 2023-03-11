import colors from 'resources/colors';
import sizes from 'resources/sizes';
import styled from 'styled-components';

export interface PropsBarraPorcentagem {
  porcentagem: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px;
`;

export const Label = styled.label`
  display: flex;
`;

export const Barra = styled.div`
  display: flex;
  align-items: flex-end;
  width: 20px;
  height: 200px;
  margin: ${sizes.px8};
  padding: ${sizes.px2};
  border: ${sizes.px1} solid ${colors.black};
  background-color: ${colors.cinza};
`;

export const Porcentagem = styled.div<PropsBarraPorcentagem>`
  display: flex;
  width: 100%;
  height: ${props => props.porcentagem + '%' ?? '0%'};
  background-color: ${props =>
    props.porcentagem >= 80 ? colors.red : props.porcentagem >= 60 ? colors.amarelo : colors.verde};
`;

import styled from 'styled-components';
import colors from 'resources/colors';
import sizes from 'resources/sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${sizes.px8};
  padding: ${sizes.px8};
  border: 1px solid black;
  border-radius: 8px;
  width: 400px;
  height: 400px;
  background-color: ${colors.white};
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${sizes.px13};
`;

export const CabecalhoConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: ${sizes.px13};
  margin-right: ${sizes.px13};
  padding-bottom: ${sizes.px8};
  border-bottom: 1px solid ${colors.black};
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Rodape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${sizes.px13};
`;

export const RodapeConteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: ${sizes.px13};
  margin-right: ${sizes.px13};
  padding: ${sizes.px8};
  border-top: 1px solid ${colors.black};
`;

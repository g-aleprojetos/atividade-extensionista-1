import sizes from 'resources/sizes';
import styled from 'styled-components';

export interface PropsInformacaoDevice {
  marginDropdown?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes.px21};
`;

export const ContainerLinha = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${sizes.px13};
`;

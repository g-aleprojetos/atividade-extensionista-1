import sizes from 'resources/sizes';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerTexto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${sizes.px8};
  margin-bottom: ${sizes.px5};
`;

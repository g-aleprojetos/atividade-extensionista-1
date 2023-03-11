import styled from 'styled-components';
import sizes from 'resources/sizes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${sizes.px13};
  width: 100%;
  height: 100%;
`;

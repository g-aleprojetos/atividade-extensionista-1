import styled from 'styled-components';
import sizes from 'resources/sizes';
import colors from 'resources/colors';

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: ${sizes.px144};
  background-color: ${colors.cinzento};
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${sizes.px34};
  top: ${sizes.px55};
`;

export const ContainerLogout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.black50per};
`;

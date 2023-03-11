import sizes from 'resources/sizes';
import styled from 'styled-components';
import colors from 'resources/colors';
import logo from 'assets/icon/logo.svg';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.px89};
  color: ${colors.white};
  padding: ${`0 ${sizes.px8} 0 ${sizes.px89}`};
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

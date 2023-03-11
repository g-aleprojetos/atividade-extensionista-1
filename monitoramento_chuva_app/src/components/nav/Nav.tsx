import React from 'react';
import * as S from './Nav.styles';
import {TextoSmall} from 'components/texto';
import colors from 'resources/colors';
import {Menu} from 'components/menu';

export type Props = {
  handleLogout: () => void;
};

export const Nav = (props: Props) => {
  const {handleLogout} = props;
  return (
    <S.Container data-testid={'test_nav'}>
      <S.ContainerLogo>
        <S.Logo />
      </S.ContainerLogo>
      <Menu handleLogout={handleLogout} />
    </S.Container>
  );
};

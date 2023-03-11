import React from 'react';
import {TextoSmall} from 'components/texto';

import * as S from './Device.styles';
import colors from 'resources/colors';

export const Device = () => {
  return (
    <S.Container data-testid={'teste_device'}>
      <TextoSmall cor={colors.black}>Device</TextoSmall>
    </S.Container>
  );
};

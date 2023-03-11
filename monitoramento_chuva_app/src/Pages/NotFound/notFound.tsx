import {TextoSmall} from 'components/texto';
import * as React from 'react';
import colors from 'resources/colors';

import * as S from './notFound.styles';

export const NotFound = () => {
  return (
    <S.Container data-testid={'test_notFound'}>
      <TextoSmall cor={colors.black}>pagina não encontrada</TextoSmall>
    </S.Container>
  );
};

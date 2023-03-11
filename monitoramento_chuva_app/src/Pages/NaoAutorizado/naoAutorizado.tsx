import {TextoSmall} from 'components/texto';
import * as React from 'react';
import colors from 'resources/colors';

import * as S from './naoAutorizado.style';

export const NaoAutorizado = () => {
  return (
    <S.Container data-testid={'test_naoAutorizado'}>
      <TextoSmall cor={colors.black}>
        Não está autorizado a entrar nessa pagina!
      </TextoSmall>
    </S.Container>
  );
};

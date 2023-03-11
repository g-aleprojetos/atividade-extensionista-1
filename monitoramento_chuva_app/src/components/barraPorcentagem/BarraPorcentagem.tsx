import {TextoSmall} from 'components/texto';
import React from 'react';
import colors from 'resources/colors';
import * as S from './BarraPorcentagem.styles';

export const BarraPorcentagem = ({porcentagem}: S.PropsBarraPorcentagem) => {
  return (
    <S.Container>
      <S.Label>
        <TextoSmall cor={`${colors.black}`}>{`${porcentagem}%`}</TextoSmall>
      </S.Label>
      <S.Barra>
        <S.Porcentagem porcentagem={porcentagem} />
      </S.Barra>
      <TextoSmall cor={colors.black}>Nivel do Rio</TextoSmall>
    </S.Container>
  );
};

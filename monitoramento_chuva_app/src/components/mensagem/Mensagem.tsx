import React from 'react';
import {TextoMedium, TextoSmall} from 'components/texto';
import colors from 'resources/colors';
import * as S from './Mensagem.styles';

export type Props = {
  textTitle?: string;
  textMessage?: string;
  corTexto?: string;
};

export const Mensagem = (props: Props) => {
  const {textTitle = '', textMessage = '', corTexto} = props;
  return (
    <S.Container>
      <S.ContainerTexto>
        <TextoMedium peso="bold" cor={corTexto ?? colors.black}>
          {textTitle}
        </TextoMedium>
      </S.ContainerTexto>
      <S.ContainerTexto>
        <TextoSmall cor={corTexto ?? colors.black}>{textMessage}</TextoSmall>
      </S.ContainerTexto>
    </S.Container>
  );
};

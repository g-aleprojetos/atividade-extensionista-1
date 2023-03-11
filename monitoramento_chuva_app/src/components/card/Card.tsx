import React from 'react';
import {TextoMedium, TextoSmall} from 'components/texto';
import colors from 'resources/colors';
import {ILeitura} from 'resources/interfaces/leitura';
import * as S from './Card.styles';
import {BarraPorcentagem} from 'components/barraPorcentagem/BarraPorcentagem';

export type Props = {
  item: ILeitura;
  key: number;
};
// data.toLocaleString('pt-br,{day:"2-digit", month:"2-digit", year: "2-digit"}')
export const Card = (props: Props) => {
  const {item, key} = props;
  const data = new Date(item.data_leitura);
  const tst = data?.toLocaleString('pt-br');
  return (
    <S.Container key={key}>
      <S.Cabecalho>
        <S.CabecalhoConteudo>
          <TextoMedium peso="bold" cor={colors.black}>
            {item.device.nome}
          </TextoMedium>
          <TextoSmall cor={colors.black}>uniqueID: {item.device.uniqueID}</TextoSmall>
        </S.CabecalhoConteudo>
      </S.Cabecalho>
      <S.Main>{item.nivel_agua ? <BarraPorcentagem porcentagem={item.nivel_agua} /> : null}</S.Main>
      <S.Rodape>
        <S.RodapeConteudo>
          <TextoSmall cor={colors.black}>{tst}</TextoSmall>
        </S.RodapeConteudo>
      </S.Rodape>
    </S.Container>
  );
};

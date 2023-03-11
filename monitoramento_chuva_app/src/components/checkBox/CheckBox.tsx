import {TextoXSmall} from 'components/texto';
import React from 'react';
import colors from 'resources/colors';
import * as S from './CheckBox.styles';

export type Props = S.PropCheckBox & {
  label: string;
  atualizar: boolean;
};

export const Checkbox = (props: Props) => {
  const {id, label, atualizar} = props;
  return (
    <S.Container>
      <S.ContainerInput id={id} data-testid={'test_checkBox'} type="checkbox" {...props} />
      <S.Label htmlFor={id}>
        <TextoXSmall cursor="pointer" cor={atualizar ? colors.black : colors.lightgray}>
          {label}
        </TextoXSmall>
      </S.Label>
    </S.Container>
  );
};

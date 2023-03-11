import React, {HTMLInputTypeAttribute, MutableRefObject} from 'react';
import * as S from './Input.styles';
import {TextoXSmall} from 'components/texto';
import colors from 'resources/colors';

export type Props = S.PropsInput & {
  id: string;
  label?: string;
  corTexto?: string;
  tipo: HTMLInputTypeAttribute;
  handleValue?: string | ReadonlyArray<string> | number | undefined;
  handleRef?: MutableRefObject<HTMLInputElement | null>;
  handleOnChange?: (_item: string) => void;
};

export const Input = (props: Props) => {
  const {
    id,
    label,
    corTexto = colors.black,
    tipo,
    handleValue,
    handleRef,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleOnChange = () => {},
  } = props;

  const handleInput = (e: string) => {
    handleOnChange(e);
  };

  return (
    <S.Container data-testid={'test_input_container'} margin={props.margin}>
      {Boolean(label) && (
        <S.Label htmlFor={id}>
          <TextoXSmall cor={corTexto}>{label}</TextoXSmall>
        </S.Label>
      )}
      <S.ContainerInput
        data-testid={'test_input_containerInput'}
        type={tipo}
        ref={handleRef}
        onChange={e => handleInput(e.target.value)}
        value={handleValue}
        {...props}
      />
    </S.Container>
  );
};

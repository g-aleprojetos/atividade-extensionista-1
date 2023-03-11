import React from 'react';
import * as S from './Botao.styles';

export type Props = S.PropsBotao & {
  children?: React.ReactNode;
  handleOnClick?: () => void;
};

export const Botao = (props: Props) => {
  const {tipo, children, handleOnClick} = props;

  return (
    <S.Container data-testid={'test_botao_container'}>
      <S.ContainerBotao
        tipo={tipo}
        type={tipo === 'submit' ? 'submit' : 'button'}
        onClick={handleOnClick}>
        {children}
      </S.ContainerBotao>
    </S.Container>
  );
};

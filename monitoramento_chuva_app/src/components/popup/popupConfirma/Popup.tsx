import React from 'react';
import {TextoSmall} from 'components/texto';
import colors from 'resources/colors';
import * as S from './poupup.styles';
import {Botao} from 'components/botao';
import {Mensagem} from 'components/mensagem';

export type Props = {
  textTitle?: string;
  textMessage?: string;
  corTexto?: string;
  botaoOK?: boolean;
  textButtonConfirmar?: string;
  textButtonCancelar?: string;
  textButtonOk?: string;
  children?: React.ReactNode;
  onOk?: () => void;
  onConfirma?: () => void;
  onClickClose?: () => void;
};

export const Popup = (props: Props) => {
  const {
    textTitle,
    textMessage,
    corTexto,
    botaoOK = false,
    textButtonConfirmar = 'Confirmar',
    textButtonCancelar = 'Cancelar',
    textButtonOk = 'OK',
    children,
    onOk,
    onConfirma,
    onClickClose,
  } = props;

  return (
    <S.Container>
      <S.PopupBox>
        <Mensagem textTitle={textTitle} textMessage={textMessage} corTexto={corTexto} />
        {children}
        {botaoOK ? (
          <S.PopupBotao>
            <Botao tipo="ok" handleOnClick={onOk}>
              <TextoSmall cursor="pointer" cor={colors.white}>
                {textButtonOk}
              </TextoSmall>
            </Botao>
          </S.PopupBotao>
        ) : (
          <S.PopupBotao>
            <Botao tipo="cancelar" handleOnClick={onClickClose}>
              <TextoSmall cursor="pointer" cor={colors.white}>
                {textButtonCancelar}
              </TextoSmall>
            </Botao>
            <Botao tipo="confirmar" handleOnClick={onConfirma}>
              <TextoSmall cursor="pointer" cor={colors.white}>
                {textButtonConfirmar}
              </TextoSmall>
            </Botao>
          </S.PopupBotao>
        )}
      </S.PopupBox>
    </S.Container>
  );
};

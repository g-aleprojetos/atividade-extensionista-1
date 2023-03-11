import React from 'react';
import textos from 'resources/textos';

import {TextoStyled, Props} from './Texto.styles';

export function Texto(props: Props) {
  return <TextoStyled {...props} />;
}

export function Texto3XSmall(props: Props) {
  return (
    <Texto tamanho={textos.tamanho.xxxsmall} alturaDeLinha={textos.altura.xxxsmall} {...props} />
  );
}

export function Texto2XSmall(props: Props) {
  return (
    <Texto tamanho={textos.tamanho.xxsmall} alturaDeLinha={textos.altura.xxsmall} {...props} />
  );
}

export function TextoXSmall(props: Props) {
  return <Texto tamanho={textos.tamanho.xsmall} alturaDeLinha={textos.altura.xsmall} {...props} />;
}

export function TextoSmall(props: Props) {
  return <Texto tamanho={textos.tamanho.small} alturaDeLinha={textos.altura.small} {...props} />;
}

export function TextoMedium(props: Props) {
  return <Texto tamanho={textos.tamanho.medium} alturaDeLinha={textos.altura.medium} {...props} />;
}

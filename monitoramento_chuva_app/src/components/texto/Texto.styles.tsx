import React from 'react';
import colors from 'resources/colors';
import fontes from 'resources/fontes';
import textos from 'resources/textos';
import styled from 'styled-components';

export type Props = {
  id?: string;
  cor?: string;
  tamanho?: number;
  alturaDeLinha?: number;
  marginTop?: number;
  marginRight?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'medium';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text' | 'none';
};

export const TextoStyled = styled.p<Props>`
  font-size: ${props => props.tamanho ?? textos.tamanho.xxxsmall}px;
  font-family: ${props => (props.peso === 'bold' ? fontes.avertaBold : fontes.avertaRegular)};
  color: ${props => props.cor ?? colors.white};
  margin-top: ${props => props.marginTop ?? 0}px;
  margin-right: ${props => props.marginRight ?? 0}px;
  text-transform: ${props => (props.toUpper ? 'uppercase' : 'none')};
  cursor: ${props => props.cursor ?? 'text'};
`;

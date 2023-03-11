import React from 'react';
import colors from 'resources/colors';
import styled from 'styled-components';

export interface PropsBotao extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tipo?: 'fechar' | 'cancelar' | 'confirmar' | 'ok' | 'submit';
}

export const Container = styled.div`
  margin: 15px;
`;

export const ContainerBotao = styled.button<PropsBotao>`
  background-color: ${props =>
    props.tipo === 'fechar'
      ? 'transparent'
      : props.tipo === 'cancelar'
      ? colors.red
      : colors.verde};
  border-radius: ${props => (props.tipo === 'fechar' ? 'none' : '8px')};
  border-style: none;
  min-width: 10px;
  padding: 12px 24px;
  cursor: pointer;
`;

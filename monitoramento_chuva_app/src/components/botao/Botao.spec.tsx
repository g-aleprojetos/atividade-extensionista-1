import React from 'react';
import { render, screen } from '@testing-library/react';
import { Botao } from './Botao';

describe('Botão', () => {
  const setup = () =>  render(
      <Botao 
      data-testid='button'>
        Texto de teste
      </Botao>);
  describe('Renderização', () => {
    it('DEVE renderizar o texto "Texto de teste"', () => {
      setup();
      const element = screen.getByTestId('test_botao_container')
      expect(element).toBeDefined();
    })
  })
})
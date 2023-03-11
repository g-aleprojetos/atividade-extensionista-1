import React from 'react';
import {render, screen} from '@testing-library/react';
import { CadastroDevice } from './CadastroDevice';

describe('CadastroDevice', () => {
  const setup = () => render(<CadastroDevice />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Skills"`, () => {
      setup();
      const cadastroDevice = screen.getByTestId('teste_cadastro_device');
      expect(cadastroDevice).toBeDefined();
    });
  });
});

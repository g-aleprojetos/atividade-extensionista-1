import React from 'react';
import {render, screen} from '@testing-library/react';
import { CadastroUsuario } from './CadastroUsuario';

describe('CadastroUsuario', () => {
  const setup = () => render(<CadastroUsuario />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "CadastroUsuario"`, () => {
      setup();
      const cadastroUsuario = screen.getByTestId('teste_cadastro_usuario');
      expect(cadastroUsuario).toBeDefined();
    });
  });
});

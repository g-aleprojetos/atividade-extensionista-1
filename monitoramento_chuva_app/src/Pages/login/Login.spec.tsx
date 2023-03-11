import React from 'react';
import {render, screen} from '@testing-library/react';
import {Login} from './Login';

describe('Login', () => {
  const setup = () => render(<Login />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Login"`, () => {
      setup();
      const login = screen.getByTestId('teste_login');
      expect(login).toBeDefined();
    });
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {Header} from './Header';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Hender', () => {
  const setup = () => render(<Header />);

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hender`, () => {
      setup();
      const header = screen.getByTestId('test_header');
      expect(header).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Dashboard"`, () => {
      setup();
      const dashboard = screen.getByText(/Dashboard/i);
      expect(dashboard).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Cadastrar Usuario"`, () => {
      setup();
      const cadastrarUsuario = screen.getByText(/Cadastrar Usuario/i);
      expect(cadastrarUsuario).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Cadastrar Device"`, () => {
      setup();
      const cadastrarDevice = screen.getByText(/Cadastrar Device/i);
      expect(cadastrarDevice).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Device"`, () => {
      setup();
      const device = screen.getByText('Device');
      expect(device).toBeDefined();
    });
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {Nav} from './Nav';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Nav', () => {
  const aoClicarMock = jest.fn();
  const setup = () => render(<Nav handleLogout={aoClicarMock} />);

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente "Nav"`, async () => {
      setup();
      const nav = screen.getByTestId('test_nav');
      expect(nav).toBeDefined();
    });
    test(`DEVE renderizar o componente "menu"`, async () => {
      setup();
      const menu = screen.getByTestId('test_menu');
      expect(menu).toBeDefined();
    });
    test(`DEVE renderizar o componente "Logo"`, async () => {
      setup();
      const logo = screen.getByText('Logo');
      expect(logo).toBeDefined();
    });
  });
});

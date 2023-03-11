import React from 'react';
import {render, screen} from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
  const setup = () => render(<Dashboard />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Dashboard"`, () => {
      setup();
      const dashboard = screen.getByTestId('teste_dashboard');
      expect(dashboard).toBeDefined();
    });
  });
});

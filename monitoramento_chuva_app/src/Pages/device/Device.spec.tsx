import React from 'react';
import {render, screen} from '@testing-library/react';
import { Device } from './Device';

describe('Device', () => {
  const setup = () => render(<Device />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Device"`, () => {
      setup();
      const device = screen.getByTestId('teste_device');
      expect(device).toBeDefined();
    });
  });
});

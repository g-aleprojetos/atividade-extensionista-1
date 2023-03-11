import React from 'react';
import {render, screen} from '@testing-library/react';
import {NotFound} from './notFound';

describe('NotFound', () => {
  const setup = () => render(<NotFound />);

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotFound"`, () => {
      setup();
      const notFound = screen.getByTestId('test_notFound');
      expect(notFound).toBeDefined();
    });
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as S from './Texto';

describe('Texto', () => {
  describe('Renderização', () => {
    const setup = () => render(<S.Texto>Texto de teste</S.Texto>);
    test('DEVE renderizar o texto "Texto de teste"', () => {

      setup();      
      const result = screen.getByText('Texto de teste' );
      expect(result).toBeDefined();
    });

    test('Texto3XSmall DEVE ser igual ao snapshot', () => {
      const texto = renderer
        .create(<S.Texto3XSmall>Teste</S.Texto3XSmall>)
        .toJSON();
      expect(texto).toMatchSnapshot();
    });

    test('Texto2XSmall DEVE ser igual ao snapshot', () => {
      const texto = renderer
        .create(<S.Texto2XSmall>Teste</S.Texto2XSmall>)
        .toJSON();
      expect(texto).toMatchSnapshot();
    });

    test('TextoXSmall DEVE ser igual ao snapshot', () => {
      const texto = renderer
        .create(<S.TextoXSmall>Teste</S.TextoXSmall>)
        .toJSON();
      expect(texto).toMatchSnapshot();
    });

    test('TextoSmall DEVE ser igual ao snapshot', () => {
      const texto = renderer
        .create(<S.TextoSmall>Teste</S.TextoSmall>)
        .toJSON();
      expect(texto).toMatchSnapshot();
    });

    test('TextoMedium DEVE ser igual ao snapshot', () => {
      const texto = renderer
        .create(<S.TextoMedium>Teste</S.TextoMedium>)
        .toJSON();
      expect(texto).toMatchSnapshot();
    });
  });
});

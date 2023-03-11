import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {TextoStyled} from './Texto.styles';
import colors from 'resources/colors';

describe('Texto.styles', () => {
  test('DEVE ser igual ao snapshot', () => {
    const texto = renderer.create(<TextoStyled>Teste</TextoStyled>).toJSON();

    expect(texto).toMatchSnapshot();
  });

  test(`DEVE ter a cor igual a "##000000" QUANDO a propriedade cor informada for "${colors.black}"`, () => {
    const texto = renderer.create(<TextoStyled cor={colors.black}>Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('color', '#000000');
  });

  test('DEVE ter o tamanho da fonte igual a "14" QUANDO a propriedade tamanho for igual a "14"', () => {
    const texto = renderer.create(<TextoStyled tamanho={14}>Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('font-size', '14px');
  });

  test('DEVE ter a marginTop igual a "10" QUANDO a propriedade marginTop for igual a "10"', () => {
    const texto = renderer.create(<TextoStyled marginTop={10}>Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('margin-top', '10px');
  });

  test('DEVE ter o fontFamily igual a "avertaSemibold" QUANDO a propriedade peso for igual a "bold"', () => {
    const texto = renderer.create(<TextoStyled peso="bold">Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('font-family', 'AvertaStd-Bold');
  });

  test('DEVE ter o text-transform igual a "uppercase" QUANDO a propriedade toUpper for igual a "true"', () => {
    const texto = renderer.create(<TextoStyled toUpper={true}>Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('DEVE ter o cursor igual a "pointer" QUANDO a propriedade cursor for igual a "pointer"', () => {
    const texto = renderer.create(<TextoStyled cursor="pointer">Teste</TextoStyled>).toJSON();

    expect(texto).toHaveStyleRule('cursor', 'pointer');
  });
});

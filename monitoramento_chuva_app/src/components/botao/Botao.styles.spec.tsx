import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as S from './Botao.styles';

describe('Botao.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const tree = renderer.create(<S.Container/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ContainerBotao DEVE ser igual ao snapshot', () => {
    const tree = renderer.create(<S.ContainerBotao/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './CadastroUsuario.styles';

describe('CadastroUsuario.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test('ContainerCadastarUsuario DEVE ser igual ao snapshot', () => {
    const containerCadastarUsuario = renderer.create(<S.ContainerCadastarUsuario />).toJSON();
    expect(containerCadastarUsuario).toMatchSnapshot();
  });

  test('ContainerListaUsuarios DEVE ser igual ao snapshot', () => {
    const containerListaUsuarios = renderer.create(<S.ContainerListaUsuarios />).toJSON();
    expect(containerListaUsuarios).toMatchSnapshot();
  });

  test('ContainerCabecalhoLista DEVE ser igual ao snapshot', () => {
    const containerCabecalhoLista = renderer.create(<S.ContainerCabecalhoLista />).toJSON();
    expect(containerCabecalhoLista).toMatchSnapshot();
  });

  test('ContainerItem DEVE ser igual ao snapshot', () => {
    const containerItem = renderer.create(<S.ContainerItem />).toJSON();
    expect(containerItem).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot', () => {
    const item = renderer.create(<S.Item />).toJSON();
    expect(item).toMatchSnapshot();
  });
});

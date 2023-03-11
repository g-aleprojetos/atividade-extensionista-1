import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Nav.styles';

describe('Nav.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test('ContainerLogo DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerLogo />).toJSON();
    expect(container).toMatchSnapshot();
  });
});

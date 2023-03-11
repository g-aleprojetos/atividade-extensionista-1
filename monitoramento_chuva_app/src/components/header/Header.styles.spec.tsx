import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Header.styles';

describe('Header.styles', () => {
  test('ContainerHeader DEVE ser igual ao snapshot', () => {
    const containerHeader = renderer.create(<S.ContainerHeader />).toJSON();
    expect(containerHeader).toMatchSnapshot();
  });

  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const containerContent = renderer.create(<S.ContainerContent />).toJSON();
    expect(containerContent).toMatchSnapshot();
  });

  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const containerLogout = renderer.create(<S.ContainerLogout />).toJSON();
    expect(containerLogout).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Menu.styles';

describe('menu.styles', () => {
  test('ContainerNav DEVE ser igual ao snapshot', () => {
    const containerNav = renderer.create(<S.ContainerNav />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot.', () => {
    const item = renderer.create(<S.Item />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('ItemNav DEVE ser igual ao snapshot QUANDO "isActive" for false.', () => {
    const item = renderer.create(<S.Item isActive={false} />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('ItemNav DEVE ser igual ao snapshot QUANDO "isActive" for true.', () => {
    const item = renderer.create(<S.Item isActive={true} />).toJSON();
    expect(item).toMatchSnapshot();
  });
});

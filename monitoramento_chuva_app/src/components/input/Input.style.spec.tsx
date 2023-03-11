import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Input.styles';

describe('Input.styles', () => {
     test('Container DEVE ser igual ao snapshot', () => {
        const componente = renderer.create(<S.Container />).toJSON();
        expect(componente).toMatchSnapshot()
    });

    test('Label DEVE ser igual ao snapshot', () => {
        const componente = renderer.create(<S.Label />).toJSON();
        expect(componente).toMatchSnapshot()
    });

    test('ContainerInput DEVE ser igual ao snapshot', () => {
        const componente = renderer.create(<S.ContainerInput />).toJSON();
        expect(componente).toMatchSnapshot()
    });
});

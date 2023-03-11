import React, {ReactNode} from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
import {AutenticadoProvide, useAutenticadoContext} from './AutenticadoContext';

type AutenticadorProvider = {
  children: ReactNode;
};

const AutenticadorContextProvider = ({children}: AutenticadorProvider) => (
  <AutenticadoProvide>{children}</AutenticadoProvide>
);

const wrapper = ({children}: AutenticadorProvider) => (
  <AutenticadorContextProvider>{children}</AutenticadorContextProvider>
);

describe('AutenticadorContext', () => {
  test('DEVE ter o estado autenticador igual a false', () => {
    const {result} = renderHook(() => useAutenticadoContext(), {wrapper});

    expect(result.current.autenticado).toBeFalsy();
  });

  // test('DEVE ter o estado autenticador igual a true', async () => {
  //   const {result} = renderHook(() => useAutenticadoContext(), {wrapper});

  //   await act(async () => {
  //     result.current.handleAutenticado(true);
  //   });

  //   expect(result.current.autenticado).toBe(true);
  // });
});

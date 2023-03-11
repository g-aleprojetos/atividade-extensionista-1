import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Menu} from './Menu';
import rotas from 'resources/rotas';
import {useNavigate} from 'react-router-dom';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('menu', () => {
  const aoClicarMock = jest.fn();
  const setup = () => render(<Menu handleLogout={aoClicarMock} />);

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente com o texto "Dashboard"`, () => {
      setup();
      const dashboard = screen.getByText('Dashboard');
      expect(dashboard).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Dashboard" com font-family igual "AvertaStd-Regular"`, () => {
      setup();
      const dashboard = screen.getByText('Dashboard');
      const style = window.getComputedStyle(dashboard);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Usuario"`, () => {
      setup();
      const cadastrarUsuario = screen.getByText('Cadastrar Usuario');
      expect(cadastrarUsuario).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Usuario" com font-family igual "AvertaStd-Regular"`, () => {
      setup();
      const cadastrarUsuario = screen.getByText('Cadastrar Usuario');
      const style = window.getComputedStyle(cadastrarUsuario);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Device"`, () => {
      setup();
      const cadastrarDevice = screen.getByText('Cadastrar Device');
      expect(cadastrarDevice).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Device" com font-family igual "AvertaStd-Regular"`, () => {
      setup();
      const cadastrarDevice = screen.getByText('Cadastrar Device');
      const style = window.getComputedStyle(cadastrarDevice);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Device"`, () => {
      setup();
      const device = screen.getByText('Device');
      expect(device).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Device" com font-family igual "AvertaStd-Regular"`, () => {
      setup();
      const device = screen.getByText('Device');
      const style = window.getComputedStyle(device);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
  });

  describe('Comportamento', () => {
    describe('Navegação', () => {
      test(`DEVE chamar a função QUANDO clicar no "Dashboard" no menu da navegação`, () => {
        setup();
        const dashboard = screen.getByText('Dashboard');
        fireEvent.click(dashboard);
        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.Dashboard);
      });

      test(`DEVE chamar a função QUANDO clicar no "Cadastrar Usuario" no menu da navegação`, () => {
        setup();
        const cadastrarUsuario = screen.getByText('Cadastrar Usuario');
        fireEvent.click(cadastrarUsuario);

        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.CadastroUsuario);
      });

      test(`DEVE chamar a função QUANDO clicar no "Cadastrar Device" no menu da navegação`, () => {
        setup();
        const cadastrarDevice = screen.getByText('Cadastrar Device');
        fireEvent.click(cadastrarDevice);

        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.CadastroDevice);
      });

      test(`DEVE chamar a função QUANDO clicar no "Device" no menu da navegação`, () => {
        setup();
        const device = screen.getByText('Device');
        fireEvent.click(device);

        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.Device);
      });
    });

    test(`DEVE renderizar o componente com o texto "Dashboard" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navDashboard = screen.getByText('Dashboard');
      fireEvent.click(navDashboard);
      const dashboard = screen.getByText('Dashboard');
      const style = window.getComputedStyle(dashboard);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Usuario" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navCadastrarUsuario = screen.getByText('Cadastrar Usuario');
      fireEvent.click(navCadastrarUsuario);
      const cadastrarUsuario = screen.getByText('Cadastrar Usuario');
      const style = window.getComputedStyle(cadastrarUsuario);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Cadastrar Device" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navCadastrarDevice = screen.getByText('Cadastrar Device');
      fireEvent.click(navCadastrarDevice);
      const cadastrarDevice = screen.getByText('Cadastrar Device');
      const style = window.getComputedStyle(cadastrarDevice);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Device" com font-family igual "AvertaStd-Regular`, () => {
      setup();
      const navDevice = screen.getByText('Device');
      fireEvent.click(navDevice);
      const device = screen.getByText('Device');
      const style = window.getComputedStyle(device);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });
  });
});

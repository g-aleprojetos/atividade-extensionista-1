import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import rotas from 'resources/rotas';
import {WebRotas} from 'webRotas';

describe('WebRotasPublicas', () => {
  const setup = () =>
    render(
      <MemoryRouter initialEntries={[`/${rotas.Login}`]}>
        <WebRotas />
      </MemoryRouter>,
    );

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "WebRotasPublicas"`, () => {
      setup();
      const WebRotasPublicas = screen.getByTestId('test_web');
      expect(WebRotasPublicas).toBeDefined();
    });
  });

  describe('Rotas', () => {
    test('Login', () => {
      setup();
      const login = screen.getByTestId('teste_login');
      expect(login).toBeDefined();
    });

    // test('Skills', () => {
    //   setup();
    //   const navSkills = screen.getByText('Skills');
    //   fireEvent.click(navSkills);
    //   const skills = screen.getByTestId('teste_skills');
    //   expect(skills).toBeDefined();
    // });

    // test('Projects', () => {
    //   setup();
    //   const navProjetos = screen.getByText('Projects');
    //   fireEvent.click(navProjetos);
    //   const projetos = screen.getByTestId('teste_projetos');
    //   expect(projetos).toBeDefined();
    // });

    // test('About Us', () => {
    //   setup();
    //   const navSobre = screen.getByText('About Us');
    //   fireEvent.click(navSobre);
    //   const sobre = screen.getByTestId('teste_sobre');
    //   expect(sobre).toBeDefined();
    // });
  });
});

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AutenticadoProvide} from 'context/autenticador';
import {WebRotas} from 'webRotas';

export const App = () => {
  return (
    <AutenticadoProvide>
      <BrowserRouter>
        <WebRotas />
      </BrowserRouter>
    </AutenticadoProvide>
  );
};

import { render, screen } from '@testing-library/react';
import {Input} from './index';


describe('Input', () => {
const onChangeMock = jest.fn()
const setup = () => render(<Input data-testid={'test_input'} id={'teste'} tipo={'text'} handleOnChange={onChangeMock}  />)

  describe('Renderização', () => {

    test(`DEVE renderizar o componente Input`, async () => {
      setup();
      const input = screen.getByTestId('test_input_container');
      expect(input).toBeDefined();
    })

    test(`DEVE renderizar o componente Input com o texto "teste" no label`, async () => {
      render(<Input data-testid={'test_input'} id={'teste'} label='teste' tipo={'text'} handleOnChange={onChangeMock} />)
    
      const label = screen.getByText('teste');
      expect(label).toBeDefined();
    }); 
  });
});






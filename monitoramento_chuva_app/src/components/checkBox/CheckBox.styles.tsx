import sizes from 'resources/sizes';
import styled from 'styled-components';

export interface PropCheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
  minWidth?: string;
  minHeight?: string;
}

export const Container = styled.label`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: ${sizes.px1};
`;

export const ContainerInput = styled.input<PropCheckBox>`
  display: flex;
  margin-right: ${sizes.px5};
  min-width: ${sizes.px21};
  min-height: ${sizes.px21};
`;

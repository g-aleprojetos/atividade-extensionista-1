import styled from 'styled-components';
import sizes from 'resources/sizes';
import colors from 'resources/colors';

export interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  height?: string;
  width?: string;
  margin?: string;
  paddingLeft?: string;
  toUpper?: boolean;
  backgroundColor?: string;
}

export const Container = styled.div<PropsInput>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin ?? sizes.px13};
`;

export const Label = styled.label`
  margin: ${sizes.px8};
`;

export const ContainerInput = styled.input<PropsInput>`
  width: ${props => props.width ?? sizes.px377};
  height: ${props => props.height ?? sizes.px34};
  padding: ${sizes.px8};
  padding-left: ${props => props.paddingLeft ?? sizes.px8};
  border: 1px solid ${colors.black};
  border-radius: ${sizes.px5};
  font-size: 16px;
  background-color: ${props => props.backgroundColor ?? colors.white};
`;

export const InputIcon = styled.div<PropsInput>`
  margin-right: 10px;
`;

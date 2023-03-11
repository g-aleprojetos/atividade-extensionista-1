import sizes from 'resources/sizes';
import styled from 'styled-components';

export interface PropsDropdown {
  width?: string;
  height?: string;
}

export const Container = styled.div<PropsDropdown>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${sizes.px8};
  align-items: center;
  justify-content: space-between;
`;

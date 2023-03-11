import styled from 'styled-components';
import colors from 'resources/colors';
import sizes from 'resources/sizes';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.black50per};
`;

export const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${sizes.px55};
  padding-bottom: ${sizes.px13};
  padding-left: ${sizes.px21};
  padding-right: ${sizes.px21};
  border-radius: ${sizes.px13};
  background-color: ${colors.white};
`;

export const PopupBotao = styled.div`
  display: flex;
`;

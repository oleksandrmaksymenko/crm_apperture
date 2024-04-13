import styled from '@emotion/styled';
import {PopupProps} from './index';
import {ThemeProps} from '../../themes';
import Paper from '../Paper';

type PopupStyledProps = PopupProps & ThemeProps;

export const StyledPopup = styled.div<PopupStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPopupOverlay = styled.div<PopupStyledProps>`
  background-color: ${({theme}) => theme.colors.popupBackground};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const StyledPopupContent = styled(Paper)<PopupStyledProps>`
  color: ${({theme}) => theme.text.primary};
  position: relative;
  width: 100%;
  max-width: ${({theme, size}) => theme.sizing[size]};
  height: ${({size}) => (size === 'xl' ? '100%' : 'auto')};
  z-index: 2;
`;

export const StyledPopupHeader = styled.div<PopupStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacing.md};

  h2 {
    margin: 0;
  }
`;

export const StyledPopupBody = styled.div<PopupStyledProps>`
  height: calc(${({theme, size}) => theme.sizing[size]} - 42px - 32px - 50px);
  margin-bottom: ${({theme}) => theme.spacing.md};
  overflow-y: scroll;
`;

export const StyledPopupFooter = styled.div<PopupStyledProps>`
  display: flex;
  justify-content: flex-end;
`;

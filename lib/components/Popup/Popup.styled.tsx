import styled from '@emotion/styled';
import {PopupProps} from './index';
import {ThemeProps} from '../../themes';
import Paper from '../Paper';

type PopupStyledProps = PopupProps & ThemeProps & {isFooter: boolean};

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
  background-color: ${({theme}) => theme.colors.popupOverlayBackgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const StyledPopupContent = styled(Paper)<PopupStyledProps>`
  z-index: 2;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  max-width: ${({theme, size}) => theme.sizing[size]};
  padding: ${({gutter, theme}) => theme.spacing[gutter || 'sm']};
  height: ${({size}) => (size === 'xl' ? '100%' : 'auto')};
`;

export const StyledPopupHeader = styled.div<
  PopupStyledProps & {isHeader: boolean}
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme, isHeader}) => (isHeader ? theme.spacing.md : 0)};

  h2 {
    margin: 0;
  }
`;

export const StyledPopupBody = styled.div<PopupStyledProps>`
  height: calc(${({theme, size}) => theme.sizing[size]} - 42px - 32px - 50px);
  margin-bottom: ${({theme, isFooter}) => isFooter && theme.spacing.md};
  overflow-y: auto;
`;

export const StyledPopupFooter = styled.div<PopupStyledProps>`
  display: flex;
  justify-content: flex-end;
`;

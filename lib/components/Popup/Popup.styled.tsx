import styled from '@emotion/styled';
import {PopupProps} from './index';
import Paper from '../Paper';

type PopupStyledProps = Partial<PopupProps>;

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
  max-width: ${({theme, size}) => theme.sizing[size || 'md']};
  padding: ${({gutter, theme}) => theme.gaps[gutter || 'sm']};
  height: ${({size}) => (size === 'xl' ? '100%' : 'auto')};
  outline: none;
`;

export const StyledPopupHeader = styled.div<
  PopupStyledProps & {isTitle: boolean}
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme, isTitle}) => (isTitle ? theme.gaps.md : 0)};
`;

export const StyledPopupTitle = styled.h2`
  margin: 0;
  font-size: ${({theme}) => theme.typography.fontSizes.xl};
  font-weight: ${({theme}) => theme.typography.fontWeights.bold};
  color: ${({theme}) => theme.text.primary};
`;

export const StyledPopupBody = styled.div<
  PopupStyledProps & {isFooter: boolean}
>`
  height: calc(${({theme, size}) => theme.sizing[size || 'md']} - 42px - 32px - 50px);
  margin-bottom: ${({theme, isFooter}) => isFooter && theme.gaps.md};
  overflow-y: auto;
`;

export const StyledPopupFooter = styled.div<PopupStyledProps & {isFooter?: boolean}>`
  display: flex;
  justify-content: flex-end;
  ${({isFooter, theme}) =>
    isFooter &&
    `padding-top: ${theme.gaps.md}; border-top: 1px solid ${theme.colors.border};`}
`;

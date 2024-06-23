import styled from '@emotion/styled';
import {InputGroupProps} from './index.tsx';
import {ThemeProps} from '../../themes';

type StyledInputGroupProps = InputGroupProps & ThemeProps;

export const StyledInputGroup = styled.div<StyledInputGroupProps>``;

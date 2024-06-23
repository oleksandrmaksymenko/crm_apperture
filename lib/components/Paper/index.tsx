import {StyledPaper} from './Paper.styled.tsx';
import {SpacingType, ThemeColorType} from '../../global.types.ts';

export type PaperProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    elevation: 1 | 2 | 3 | 4 | 5;
    rounded: SpacingType;
    padding: SpacingType;
    bg: ThemeColorType;
  }>;

const Paper = (props: PaperProps) => <StyledPaper {...props} />;

export default Paper;

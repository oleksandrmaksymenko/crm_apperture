import {StyledPaper} from './Paper.styled.tsx';

export type PaperProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    elevation: 1 | 2 | 3 | 4 | 5;
    rounded: 'sm' | 'md' | 'lg' | 'xl';
    padding: 'sm' | 'md' | 'lg' | 'xl';
  }>;

const Paper = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};

export default Paper;

import {StyledPaper} from './Paper.styled.tsx';

type PaperProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Paper = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};

export default Paper;

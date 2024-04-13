import {StyledButton} from './Button.styled';

export type ButtonProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'outline'
    | 'disabled'
    | 'text';
  size: 'small' | 'medium' | 'large' | 'xlarge';
  onClick: () => void | null;
} & Partial<{
  children: React.ReactNode;
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton {...props}>
      {props.iconPosition === 'left' && props.icon}
      {props.children && <span key='text'>{props.children}</span>}
      {props.iconPosition === 'right' && props.icon}
    </StyledButton>
  );
};

export default Button;

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
} & Partial<{
  children: React.ReactNode;
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
  isFullSize: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => (
  <StyledButton {...props}>
    {props.iconPosition === 'left' && props.icon}
    {props.children && <span key='text'>{props.children}</span>}
    {props.iconPosition === 'right' && props.icon}
  </StyledButton>
);

export default Button;

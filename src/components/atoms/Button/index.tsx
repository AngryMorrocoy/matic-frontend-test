import { FunctionComponent } from 'react';
import StyledButton from './Button.styled';

type ButtonProps = {
  children?: JSX.Element | string;
};

const Button: FunctionComponent<ButtonProps> = ({ children }): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

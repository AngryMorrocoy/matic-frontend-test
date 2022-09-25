import { FunctionComponent } from 'react';
import StyledButton from './Button.styled';

type ButtonProps = {
  text: string;
};

const Button: FunctionComponent<ButtonProps> = ({ text }): JSX.Element => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;

import { FunctionComponent } from 'react';
import StyledOrdinaryText from './OrdinaryText.styled';

type OrdinaryTextProps = {
  children?: JSX.Element | string;
  component?: 'p' | 'span';
  size?: 'normal' | 'small' | 'tiny' | 'diminute';
};

const OrdinaryText: FunctionComponent<OrdinaryTextProps> = ({
  children,
  component = 'p',
  size = 'normal',
}): JSX.Element => {
  return (
    <StyledOrdinaryText as={component} size={size}>
      {children}
    </StyledOrdinaryText>
  );
};

export default OrdinaryText;

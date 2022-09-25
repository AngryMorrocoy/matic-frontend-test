import { FunctionComponent } from 'react';
import StyledHeading  from './Heading.styled';

type HeadingProps = {
  children?: JSX.Element | string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  type,
}): JSX.Element => {
  return <StyledHeading as={type}>{children}</StyledHeading>;
};

export default Heading;

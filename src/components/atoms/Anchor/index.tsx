import { FunctionComponent } from 'react';
import StyledAnchor from './Anchor.styled';

type AnchorProps = {
  children?: JSX.Element | string;
  href: string;
  color: 'white' | 'gray'
};

const Anchor: FunctionComponent<AnchorProps> = ({ children, href, color }): JSX.Element => {

  return <StyledAnchor href={href} color={color}>{children}</StyledAnchor>;
};

export default Anchor;

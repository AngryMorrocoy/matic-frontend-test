import styled from 'styled-components';
import { Link } from 'react-router-dom';

type anchorStates = {
  default: string;
  active: string;
};

const anchorColors: { [key: string]: anchorStates } = {
  gray: { default: 'var(--light-gray)', active: 'var(--dark-blue)' },
  white: { default: '#ffffff', active: 'var(--pale-green)' },
};

type AnchorProps = {
  color?: 'white' | 'gray';
};

const Anchor = styled(Link)<AnchorProps>`
  ${({ color }) =>
  color
    ? `
  color: ${anchorColors[color].default};

  &:hover,
  &:focus {
    color: ${anchorColors[color].active};
  }
  `
  : ''}
  font-size: 1rem;
  font-weight: 500;
`;

export default Anchor;

import styled from 'styled-components';

type anchorStates = {
  default: string;
  active: string;
};

const anchorColors: { [key: string]: anchorStates } = {
  gray: { default: 'var(--light-gray)', active: 'var(--dark-blue)' },
  white: { default: '#ffffff', active: 'var(--pale-green)' },
};

type AnchorProps = {
  color: 'white' | 'gray';
};

const Anchor = styled.a<AnchorProps>`
  color: ${(props) => anchorColors[props.color].default};
  font-size: 1rem;
  font-weight: 500;

  &:hover,
  &:focus {
    color: ${(props) => anchorColors[props.color].active};
  }
`;

export default Anchor;

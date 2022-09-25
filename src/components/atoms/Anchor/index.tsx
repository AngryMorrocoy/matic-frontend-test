import styled from 'styled-components';

const anchorColors: { [key: string]: string } = {
  gray: 'var(--light-gray)',
  white: '#ffffff',
};

type AnchorProps = {
  color: 'white' | 'gray';
};

const Anchor = styled.a<AnchorProps>`
  color: ${(props) => anchorColors[props.color]};
  font-size: 1rem;
`;

export default Anchor;

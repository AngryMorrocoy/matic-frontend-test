import styled from 'styled-components';

const anchorColors: { [key: string]: string } = {
  gray: 'var(--light-gray)',
  white: '#ffffff',
};

const StyledAnchor = styled.a`
  color: ${(props: { color: 'white' | 'gray' }) => anchorColors[props.color]};
  font-size: 1rem;
`;

export default StyledAnchor;

import styled from 'styled-components';

const headingSizes: { [key: string]: string } = {
  h1: '3.3rem',
  h2: '2.5rem',
  h3: '1.4rem',
  h4: '1rem',
  h5: '0.9rem',
  h6: '0.8rem',
} as const;

type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = styled.h1<HeadingProps>`
  font-style: normal;
  font-weight: 400;
  line-height: 3.875rem;
  color: var(--headers-fg);

  font-size: ${(props) => headingSizes[props.type]};
`;

export default Heading;

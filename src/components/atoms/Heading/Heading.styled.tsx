import styled from 'styled-components';

export const headingSizes: { [key: string]: string } = {
  h1: '3.3rem',
  h2: '2.5rem',
  h3: '1.4rem',
  h4: '1rem',
  h5: '0.9rem',
  h6: '0.8rem',
} as const;

const StyledHeading = styled.h1`
  font-style: normal;
  font-weight: 400;
  line-height: 3.875rem;
  color: var(--headers-fg);

  font-size: ${(props: { as: string }) => headingSizes[props.as]};
`;

export default StyledHeading;

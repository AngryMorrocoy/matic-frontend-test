import styled from 'styled-components';

export const textSizes: { [key: string]: string } = {
  normal: '1.125rem',
  small: '1rem',
  tiny: '0.8rem',
  diminute: '0.625rem',
} as const;

const StyledOrdinaryText = styled.p`
  color: var(--normal-fg);
  font-weight: 400;
  font-size: ${(props: { size: string }) =>
    props.size ? textSizes[props.size] : textSizes.normal};
`;

export default StyledOrdinaryText;

import styled from 'styled-components';

const textSizes: { [key: string]: string } = {
  normal: '1.125rem',
  small: '1rem',
  tiny: '0.8rem',
  diminute: '0.625rem',
} as const;

type OrdinaryTextProps = {
  size?: 'normal' | 'small' | 'tiny' | 'diminute'
}

const OrdinaryText = styled.p<OrdinaryTextProps>`
  color: var(--normal-fg);
  font-weight: 400;
  font-size: ${(props) =>
    props.size ? textSizes[props.size] : textSizes.normal};
`;

export default OrdinaryText;

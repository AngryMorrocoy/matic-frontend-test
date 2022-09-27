import styled from 'styled-components';

const buttonDefaultBg =
  'linear-gradient(90deg, var(--green) 4.85%, var(--turquoise) 100%)';

const buttonDefaultHoveredBg =
  'linear-gradient( 90deg, var(--desaturated-green) 4.85%, var(--desaturated-turquoise) 100%)';

export const BaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

const Button = styled(BaseButton)`
  background: ${buttonDefaultBg};
  color: white;
  padding: 1.2rem 1.7rem;

  border-radius: 5.5rem;

  font-style: normal;
  font-weight: 700;

  font-size: 1rem;
  line-height: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover, &:focus {
    background: ${buttonDefaultHoveredBg};
  }
`;

export default Button;

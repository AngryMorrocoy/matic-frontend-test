import styled from 'styled-components';

const buttonDefaultBg =
  'linear-gradient(90deg, var(--green) 4.85%, var(--turquoise) 100%)';

const buttonDefaultHoveredBg =
  'linear-gradient( 90deg, var(--desaturated-green) 4.85%, var(--desaturated-turquoise) 100%)';

const Button = styled.button`
  background: ${buttonDefaultBg};
  color: white;
  padding: 1.2rem 1.7rem;

  border: none;
  border-radius: 5.5rem;

  cursor: pointer;

  font-style: normal;
  font-weight: 700;

  font-size: 1rem;
  line-height: 7px;

  &:hover {
    background: ${buttonDefaultHoveredBg};
  }
`;

export default Button;

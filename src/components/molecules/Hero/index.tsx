import { GridWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type HeroProps = {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
};

const StyledHero = styled(GridWrapper)`
  position: relative;

  & > * {
    width: 100%;
  }
`;

const Hero: FunctionComponent<HeroProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <StyledHero
      isMain
      templateColumns="40% 60%"
      align="center"
      className={className}
      bg="var(--hero-bg)"
    >
      {children}
    </StyledHero>
  );
};

export default Hero;

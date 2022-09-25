import { GridWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';

type HeroProps = {
  children?: [JSX.Element, JSX.Element];
  className?: string;
};

const Hero: FunctionComponent<HeroProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <GridWrapper
      isMain
      templateColumns="40% 60%"
      align="center"
      className={className}
      bg="var(--hero-bg)"
    >
      {children}
    </GridWrapper>
  );
};

export default Hero;

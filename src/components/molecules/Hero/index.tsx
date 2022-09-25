import GridWrapper from '@atoms/GridWrapper';
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
    <GridWrapper isMain templateColumns="40% 60%"
    align="center"
    className={className}>
      {children}
    </GridWrapper>
  );
};

export default Hero;

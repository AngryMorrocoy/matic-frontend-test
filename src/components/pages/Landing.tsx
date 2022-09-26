import MainHero from '@organisms/MainHero';
import WhySection from '@organisms/WhySection';
import { FunctionComponent } from 'react';

const Landing:FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <MainHero />
      <WhySection />
    </>
  )
}

export default Landing;

import { FunctionComponent } from 'react';
// Containers
import { FlexWrapper } from '@atoms/Wrappers';
import Hero from '@molecules/Hero';
// Atoms
import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import Button from '@atoms/Button';
import styled from 'styled-components';
// Assets
import heroVectors from '@assets/hero-vectors.svg';
import mockups from '@assets/image-mockups.png';

const HeroImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const HeroImgWrapper = styled.div`
  overflow: hidden;
`;

const MainHero: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <Hero>
      <FlexWrapper direction="column" align="center" gap="4.2rem">
        <Heading type="h1">Next generation digital banking</Heading>
        <OrdinaryText>
          Take your financial life online. Your Easybank account  will be a
          one-stop-shop for spending, saving. budgeting, nvesting, and much
          more.
        </OrdinaryText>
        <Button>Request invite</Button>
      </FlexWrapper>

      <HeroImgWrapper>
        <img src={heroVectors} alt="" style={{ opacity: 0 }} />
        <HeroImage src={heroVectors} alt="" />
        <HeroImage src={mockups} alt="" />
      </HeroImgWrapper>
    </Hero>
  );
};

export default MainHero;

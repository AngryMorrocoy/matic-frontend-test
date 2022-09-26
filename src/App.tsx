import Anchor from '@atoms/Anchor';
import Button from '@atoms/Button';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import OrdinaryText from '@atoms/OrdinaryText';

import footerLogo from '@assets/easybank-white-logo.svg';

import iconFB from '@assets/icon-facebook.svg';
import iconIG from '@assets/icon-instagram.svg';
import iconPinterest from '@assets/icon-pinterest.svg';
import iconTwitter from '@assets/icon-twitter.svg';
import iconYt from '@assets/icon-youtube.svg';

import { useEffect, useState } from 'react';
import MainHeader from '@organisms/MainHeader';
import MainHero from '@organisms/MainHero';
import WhySection from '@organisms/WhySection';
import { ArticleSchema } from '@api/types';
import LatestArticlesSection from '@organisms/LatestArticlesSection';
import { getArticles } from './api';

function App() {
  const [articles, setArticles] = useState<ArticleSchema[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <>
      <MainHeader />
      <MainHero />

      <WhySection />

      <LatestArticlesSection articles={articles.slice(0, 4)} />

      <FlexWrapper
        as="footer"
        justify="space-between"
        padding="3.3rem"
        bg="var(--dark-blue)"
        isMain
      >
        <FlexWrapper gap="8rem">
          <FlexWrapper direction="column" justify="space-between">
            <img src={footerLogo} alt="" />
            <FlexWrapper justify="space-around">
              <img src={iconFB} alt="" style={{ color: 'green' }} />
              <img src={iconYt} alt="" />
              <img src={iconTwitter} alt="" />
              <img src={iconPinterest} alt="" />
              <img src={iconIG} alt="" />
            </FlexWrapper>
          </FlexWrapper>
          <GridWrapper templateColumns="repeat(2, auto)" gap="1rem 8rem">
            <Anchor color="white" href="#">
              About Us
            </Anchor>
            <Anchor color="white" href="#">
              Careers
            </Anchor>
            <Anchor color="white" href="#">
              Contact
            </Anchor>
            <Anchor color="white" href="#">
              Support
            </Anchor>
            <Anchor color="white" href="#">
              Blog
            </Anchor>
            <Anchor color="white" href="#">
              Privacy Policy
            </Anchor>
          </GridWrapper>
        </FlexWrapper>

        <GridWrapper align="center">
          <Button>Request Invite</Button>
          <OrdinaryText>© Easybank. All Rights Reserved</OrdinaryText>
        </GridWrapper>
      </FlexWrapper>
    </>
  );
}

export default App;

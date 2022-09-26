import Anchor from '@atoms/Anchor';
import Header from '@molecules/Header';
import Navbar from '@molecules/Navbar';
import Button from '@atoms/Button';
import Hero from '@molecules/Hero';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import FeatureCard from '@molecules/FeatureCard';
import ArticleCard from '@molecules/ArticleCard';

import footerLogo from '@assets/easybank-white-logo.svg';
import iconApi from '@assets/icon-api.svg';
import iconBudgeting from '@assets/icon-budgeting.svg';
import iconOnBoarding from '@assets/icon-onboarding.svg';
import iconOnline from '@assets/icon-online.svg';

import iconFB from '@assets/icon-facebook.svg';
import iconIG from '@assets/icon-instagram.svg';
import iconPinterest from '@assets/icon-pinterest.svg';
import iconTwitter from '@assets/icon-twitter.svg';
import iconYt from '@assets/icon-youtube.svg';

import { useState } from 'react';
import MainHeader from '@organisms/MainHeader';
import MainHero from '@organisms/MainHero';


type ArticleSchema = {
  id: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

const sampleArticles: ArticleSchema[] = [
  {
    author: 'asdasd',
    title: 'aaaa',
    content:
      'hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola ',
    createdAt: '2022-09-25T23:02:34.228Z',
    updatedAt: '2022-09-25T23:02:34.228Z',
    imageUrl: 'https://picsum.photos/533/400?random=87',
    id: '291b7b99-55b2-4c14-b286-133518f300e3',
  },
  {
    author: 'asda',
    title: 'aaa',
    content: 'dddd',
    createdAt: '2022-09-25T23:03:11.892Z',
    updatedAt: '2022-09-25T23:03:11.892Z',
    imageUrl: 'https://picsum.photos/533/400?random=38',
    id: 'd64667c5-d11c-4ffb-a718-78e7cf85a9e1',
  },
  {
    author: 'asdasd',
    title: 'asdasd',
    content: 'asdasdasd',
    createdAt: '2022-09-25T23:04:03.487Z',
    updatedAt: '2022-09-25T23:04:03.487Z',
    imageUrl: 'https://picsum.photos/533/400?random=25',
    id: '73415e8b-fa70-4967-970f-74b6c5c3291b',
  },
  {
    author: 'Miguel Durán',
    title: 'New Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus nunc vel urna consequat porta. Vivamus erat mauris, consectetur at magna vel, congue scelerisque sem.',
    createdAt: '2022-09-25T23:14:27.790Z',
    updatedAt: '2022-09-25T23:14:27.790Z',
    imageUrl: 'https://picsum.photos/533/400?random=70',
    id: '5f91830c-ad16-4259-b6f2-4afcc8cbe6a5',
  },
];

function App() {
  const [articles, _] = useState<ArticleSchema[]>(sampleArticles);

  return (
    <>

      <MainHeader />
      <MainHero />

      <FlexWrapper
        isMain
        padding="6rem"
        bg="var(--why-section-bg)"
        gap="5.2rem"
        direction="column"
      >
        <FlexWrapper
          direction="column"
          style={{ maxWidth: '50%' }}
          gap="1.25rem"
        >
          <Heading type="h2">Why choose Easybank?</Heading>
          <OrdinaryText>
            We leverage Open Banking to turn your bank acount into your
            financial hub. Control your finances like never before.
          </OrdinaryText>
        </FlexWrapper>

        <GridWrapper templateColumns="repeat(4, auto)">
          <FeatureCard icon={iconOnline} title="Online Banking">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </FeatureCard>
          <FeatureCard icon={iconBudgeting} title="Simple Budgeting">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </FeatureCard>
          <FeatureCard icon={iconOnBoarding} title="Fast Onboarding">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </FeatureCard>
          <FeatureCard icon={iconApi} title="Open Api">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </FeatureCard>
        </GridWrapper>
      </FlexWrapper>

      <FlexWrapper isMain padding="5rem" direction="column" gap="2.4rem">
        <Header>
          <Heading type="h2">Latest Articles</Heading>
          <Button>+ Add New Article</Button>
        </Header>
        <GridWrapper
          justify="space-between"
          templateColumns="repeat(auto-fit, minmax(12.5rem, max-content))"
          gap="1.5rem"
        >
          {articles.map(({ author, title, imageUrl, content }, idx) => (
            <ArticleCard
              author={author}
              title={title}
              imageUrl={imageUrl}
              content={content}
              key={idx}
            />
          ))}
        </GridWrapper>
      </FlexWrapper>

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

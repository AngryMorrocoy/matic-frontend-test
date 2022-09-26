import Anchor from '@atoms/Anchor';
import Button from '@atoms/Button/';
import Heading from '@atoms/Heading/';
import OrdinaryText from '@atoms/OrdinaryText';
import logo from './assets/easybank-logo.svg';

function App() {
  console.log(logo);
  return (
    <>

      <MainHeader />

      <Hero>
        <FlexWrapper direction="column" align="flex-start" gap="4.2rem">
          <Heading type="h1">Next generation digital banking</Heading>
          <OrdinaryText>
            Take your financial life online. Your Easybank account  will be a
            one-stop-shop for spending, saving. budgeting, nvesting, and much
            more.
          </OrdinaryText>

          <Button>Request invite</Button>
        </FlexWrapper>
        {
          // TODO: Made this pretty haha
        }
        <div style={{ overflow: 'hidden' }}>
          <img style={{ opacity: 0 }} src={heroVectors} alt="" />
          <HeroImage src={heroVectors} alt="" />
          <HeroImage src={mockups} alt="" />
        </div>
      </Hero>

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

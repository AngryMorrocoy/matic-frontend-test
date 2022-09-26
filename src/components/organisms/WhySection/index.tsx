import { FunctionComponent } from 'react';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import FeatureCard from '@molecules/FeatureCard';
// Assets import
import iconApi from '@assets/icon-api.svg';
import iconBudgeting from '@assets/icon-budgeting.svg';
import iconOnBoarding from '@assets/icon-onboarding.svg';
import iconOnline from '@assets/icon-online.svg';

const WhySection: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <FlexWrapper
      isMain
      padding="6rem"
      bg="var(--why-section-bg)"
      gap="5.2rem"
      direction="column"
    >
      <FlexWrapper direction="column" style={{ maxWidth: '50%' }} gap="1.25rem">
        <Heading type="h2">Why choose Easybank?</Heading>
        <OrdinaryText>
          We leverage Open Banking to turn your bank acount into your financial
          hub. Control your finances like never before.
        </OrdinaryText>
      </FlexWrapper>

      <GridWrapper templateColumns="repeat(4, auto)">
        <FeatureCard icon={iconOnline} title="Online Banking">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
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
  );
};

export default WhySection;

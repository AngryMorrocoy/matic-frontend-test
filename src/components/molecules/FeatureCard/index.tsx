import CircularSvgIcon from '@atoms/CircularSvgIcon';
import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type FeatureCardProps = {
  className?: string;
  icon: string;
  title: string;
  children: string;
};

const FeatureCard: FunctionComponent<FeatureCardProps> = ({
  className,
  icon,
  title,
  children,
}): JSX.Element => {
  return (
    <FlexWrapper
      className={className}
      direction="column"
      gap="0.5rem"
      padding="0.5rem"
    >
      <CircularSvgIcon
        src={icon}
        bg="linear-gradient(135deg, var(--green) 0%, var(--turquoise) 100%)"
        size="4.5rem"
        padding="1rem"
      />
      <Heading type="h3">{title}</Heading>
      <OrdinaryText size="small" lineHeight="1.625rem">{children}</OrdinaryText>
    </FlexWrapper>
  );
};

export default styled(FeatureCard)`
  max-width: 18rem;
  & ${CircularSvgIcon} {
    margin-bottom: 1rem;
  }
`;

import FlexWrapper from '@atoms/FlexWrapper';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <FlexWrapper as="header" justify="space-around" className={className}>
      {children}
    </FlexWrapper>
  );
};

export default styled(Header)`
  padding: 1.1rem 3rem;
`;

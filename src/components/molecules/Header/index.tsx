import FlexWrapper from '@atoms/FlexWrapper';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  isMain?: boolean;
};

const Header: FunctionComponent<HeaderProps> = ({
  className,
  children,
  isMain,
}): JSX.Element => {
  return (
    <FlexWrapper
      isMain={isMain}
      as="header"
      justify="space-between"
      className={className}
    >
      {children}
    </FlexWrapper>
  );
};

export default styled(Header)`
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
`;

import Anchor from '@atoms/Anchor';
import FlexWrapper from '@atoms/FlexWrapper';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type NavbarProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <FlexWrapper
      className={className}
      as="nav"
      justify="space-evenly"
      align="center"
      gap="1.875rem"
    >
      {children}
    </FlexWrapper>
  );
};

export default styled(Navbar)`
  & > ${Anchor}::after {
    content
  }
`;

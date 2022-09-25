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
      justify="center"
      align="center"
      gap="1.875rem"
    >
      {children}
    </FlexWrapper>
  );
};

export default styled(Navbar)`
  flex: 1 1 0px;
  width: 0;

  ${Anchor} {
    position: relative;
  }

  ${Anchor}::after {
    display: none;

    content: '';
    position: absolute;

    left: 0;
    right: 0;
    bottom: -1.1rem;

    top: 170%;

    background: linear-gradient(90deg, var(--green) 0%, var(--turquoise) 100%);
  }

  ${Anchor}:hover::after,
  ${Anchor}:focus::after {
    display: block;
  }
`;

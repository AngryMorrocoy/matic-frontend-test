import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  isMain?: boolean;
  bg?: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  className,
  children,
  isMain,
  bg,
}): JSX.Element => {
  return (
    <FlexWrapper
      isMain={isMain}
      as="header"
      justify="space-between"
      className={className}
      bg={bg}
    >
      {children}
    </FlexWrapper>
  );
};

export default styled(Header)`
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
`;

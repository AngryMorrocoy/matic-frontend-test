import { FunctionComponent } from 'react';
import Header from '@molecules/Header';
import Navbar from '@molecules/Navbar';
import Anchor from '@atoms/Anchor';
import Button from '@atoms/Button';
import headerLogo from '@assets/easybank-dark-logo.svg';

const MainHeader: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Header isMain bg="white">
        <img src={headerLogo} alt="" />
        <Navbar>
          <Anchor to="/" color="gray">
            Home
          </Anchor>
          <Anchor to="#" color="gray">
            About
          </Anchor>
          <Anchor to="#" color="gray">
            Contact
          </Anchor>
          <Anchor to="#" color="gray">
            Blog
          </Anchor>
          <Anchor to="#" color="gray">
            Careers
          </Anchor>
        </Navbar>
        <Button>Request invite</Button>
      </Header>
    </>
  );
};

export default MainHeader;

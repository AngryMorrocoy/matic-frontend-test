import { FunctionComponent } from 'react';
import Header from '@molecules/Header';
import Navbar from '@molecules/Navbar';
import Anchor from '@atoms/Anchor';
import Button from '@atoms/Button';
import headerLogo from '@assets/easybank-dark-logo.svg';

const MainHeader: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <Header isMain>
        <img src={headerLogo} alt="" />
        <Navbar>
          <Anchor href="#" color="gray">
            Home
          </Anchor>
          <Anchor href="#" color="gray">
            About
          </Anchor>
          <Anchor href="#" color="gray">
            Contact
          </Anchor>
          <Anchor href="#" color="gray">
            Blog
          </Anchor>
          <Anchor href="#" color="gray">
            Careers
          </Anchor>
        </Navbar>
        <Button>Request invite</Button>
      </Header>
    </>
  );
};

export default MainHeader;

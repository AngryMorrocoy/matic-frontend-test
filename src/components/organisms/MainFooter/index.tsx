import { FunctionComponent } from 'react';
// Atoms
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import Anchor from '@atoms/Anchor';
import OrdinaryText from '@atoms/OrdinaryText';
import Button from '@atoms/Button';
// Assets
import footerLogo from '@assets/easybank-white-logo.svg';
import { ReactComponent as FacebookIcon } from '@assets/icon-facebook.svg';
import { ReactComponent as YoutubeIcon } from '@assets/icon-youtube.svg';
import { ReactComponent as TwitterIcon } from '@assets/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '@assets/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '@assets/icon-instagram.svg';

const MainFooter: FunctionComponent<{}> = ({}): JSX.Element => {
  const footerLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];

  return (
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
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </FlexWrapper>
        </FlexWrapper>
        <GridWrapper templateColumns="repeat(2, auto)" gap="1rem 8rem">
          {footerLinks.map(({ text, href }, idx) => (
            <Anchor color="white" href={href} key={idx}>
              {text}
            </Anchor>
          ))}
        </GridWrapper>
      </FlexWrapper>

      <GridWrapper align="center">
        <Button>Request Invite</Button>
        <OrdinaryText>© Easybank. All Rights Reserved</OrdinaryText>
      </GridWrapper>
    </FlexWrapper>
  );
};

export default MainFooter;

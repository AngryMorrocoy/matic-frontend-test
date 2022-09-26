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
import styled from 'styled-components';

const SvgAnchor = styled(Anchor)`
  & .svg-link:hover path,
  & .svg-link:focus path {
    fill: var(--pale-green);
  }
`;

const FooterAnchor = styled(Anchor)`
  font-size: 0.8rem;
`;

const MainFooter: FunctionComponent<{ className?: string }> = ({
  className,
}): JSX.Element => {
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
      className={className}
      as="footer"
      justify="space-between"
      padding="3.3rem"
      bg="var(--dark-blue)"
      isMain
    >
      <FlexWrapper gap="8rem">
        <FlexWrapper direction="column" justify="space-between">
          <img src={footerLogo} alt="" />
          {/* TODO: Extract this into a cleaner component */}
          <FlexWrapper justify="space-around">
            <SvgAnchor color="white" href="#">
              <FacebookIcon className="svg-link" />
            </SvgAnchor>
            <SvgAnchor color="white" href="#">
              <YoutubeIcon className="svg-link" />
            </SvgAnchor>
            <SvgAnchor color="white" href="#">
              <TwitterIcon className="svg-link" />
            </SvgAnchor>
            <SvgAnchor color="white" href="#">
              <PinterestIcon className="svg-link" />
            </SvgAnchor>
            <SvgAnchor color="white" href="#">
              <InstagramIcon className="svg-link" />
            </SvgAnchor>
          </FlexWrapper>
        </FlexWrapper>
        <GridWrapper templateColumns="repeat(2, auto)" gap="1.1rem 8rem">
          {footerLinks.map(({ text, href }, idx) => (
            <FooterAnchor color="white" href={href} key={idx}>
              {text}
            </FooterAnchor>
          ))}
        </GridWrapper>
      </FlexWrapper>

      <FlexWrapper align="center" justify="space-between" direction="column" gap="1.8rem">
        <Button>Request Invite</Button>
        <OrdinaryText size="tiny" color="white">
          © Easybank. All Rights Reserved
        </OrdinaryText>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default MainFooter;

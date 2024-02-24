import {
  FooterContainer,
  FooterMainWrapper,
  FooterInfoWrapper,
  FooterInfoText,
  FooterContactBtnWrapper,
  FooterCallBtn,
  FooterEmailBtn,
  FooterCallIcon,
  FooterEmailIcon,
  FooterInfoLink,
  FooterLinkWrapper,
} from "./Footer.styled";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <FooterContainer>
      <FooterMainWrapper>
        <Logo />
        <FooterContactBtnWrapper>
          <FooterCallBtn
            href="tel:+380730000000"
            aria-label="Call our customer support"
            title="Call our customer support"
          >
            Call Us
            <FooterCallIcon />
          </FooterCallBtn>
          <FooterEmailBtn
            href="mailto:alexsmagin1@gmail.com"
            aria-label="Send us an email"
            title="Send us an email"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Us
            <FooterEmailIcon />
          </FooterEmailBtn>
        </FooterContactBtnWrapper>
      </FooterMainWrapper>
      <FooterInfoWrapper>
        <FooterInfoText>
          Alex Smagin &copy;Rental Car <span>{new Date().getFullYear()}</span>.
          All rights reserved.
        </FooterInfoText>
        <FooterLinkWrapper>
          <FooterInfoLink to="privacy">Privacy</FooterInfoLink>
          <span>/</span>
          <FooterInfoLink to="terms">Terms</FooterInfoLink>
        </FooterLinkWrapper>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}

export default Footer;

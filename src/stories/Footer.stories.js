import React from "react";
import { Box } from "@mui/material";
import Footer from "components/Footer.js";
import {
  MapContainer,
  InfoContainer,
  InfoItemContainer,
  StyledFlexRowCenter,
  StyledTypography,
  InfoText,
  FooterLink,
  Anchor,
} from "components/footer/Styles";
import { IconButton } from "@mui/material";
import Logo from "components/Logo";
import logo from "stories/assets/logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default {
  component: Footer,
};

export const Playground = () => (
  <Box
    sx={{
      minWidth: "360px",
    }}
  >
    <Footer>
      <InfoContainer>
        <StyledFlexRowCenter>
          <Logo
            homeURL='/?path=/story/stories-footer--playground'
            src={logo}
            alt='logo'
          />
        </StyledFlexRowCenter>
        <InfoItemContainer>
          <InfoText>Bv. Oroño, 1245</InfoText>
          <InfoText>Santa Fe, Rosario</InfoText>
          <InfoText>Te. 444-444-444</InfoText>
          <InfoText>
            Te. emergencias
            <br /> 555-555-555
          </InfoText>
        </InfoItemContainer>
        <InfoItemContainer>
          <FooterLink to='/?path=/story/stories-footer--playground'>
            <StyledTypography>Test test</StyledTypography>
          </FooterLink>
          <FooterLink to='/?path=/story/stories-footer--playground'>
            <StyledTypography>Test test</StyledTypography>
          </FooterLink>
        </InfoItemContainer>
        <StyledFlexRowCenter>
          <Anchor href='https://www.facebook.com/'>
            <IconButton aria-label='facebook'>
              <FacebookIcon />
            </IconButton>
          </Anchor>
          <Anchor href='https://www.instagram.com/'>
            <IconButton aria-label='instagram'>
              <InstagramIcon />
            </IconButton>
          </Anchor>
          <Anchor href='https://twitter.com/'>
            <IconButton aria-label='twitter'>
              <TwitterIcon />
            </IconButton>
          </Anchor>
          <Anchor href='https://www.youtube.com/'>
            <IconButton aria-label='you tube'>
              <YouTubeIcon />
            </IconButton>
          </Anchor>
        </StyledFlexRowCenter>
      </InfoContainer>
      <MapContainer></MapContainer>
    </Footer>
  </Box>
);

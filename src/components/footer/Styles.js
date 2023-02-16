import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { FlexRowCenter, StyledLink } from "components/CommonStyles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: theme.spacing(2),
  background: theme.palette.ternary.main,
}));

const MapContainer = styled(Box)(({ theme }) => ({
  //TEST
  background: "gray",
  height: "400px",
  //TEST
  width: "100%",
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "65%",
  },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  width: "100%",
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "35%",
  },
}));

const InfoItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: "100%",
  maxWidth: "calc(50% - 16px)",
  marginRight: theme.spacing(2),
}));

const StyledFlexRowCenter = styled(FlexRowCenter)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.light,
  fontWeight: 600,
}));

const InfoText = styled(StyledTypography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

const FooterLink = styled(StyledLink)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  "&::after": {
    position: "absolute",
    content: "''",
    bottom: 0,
    left: 0,
    background: theme.palette.text.light,
    height: "3px",
    width: "100%",
  },
  "&:hover": {
    background: theme.palette.background.transparent,
  },
}));

const Anchor = ({ children, ...props }) => (
  <a
    target='_blank'
    rel='noreferrer'
    style={{ paddingRight: "8px" }}
    {...props}
  >
    {children}
  </a>
);

export {
  Container,
  MapContainer,
  InfoContainer,
  InfoItemContainer,
  StyledFlexRowCenter,
  StyledTypography,
  InfoText,
  FooterLink,
  Anchor,
};

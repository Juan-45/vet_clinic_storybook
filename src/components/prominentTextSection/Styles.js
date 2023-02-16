import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
});

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  position: "relative",
  marginBottom: theme.spacing(8),
  "&::after": {
    content: "''",
    position: "absolute",
    display: "inline-block",
    width: "100%",
    height: "15px",
    top: "calc(100% + 8px)",
    left: 0,
    background: theme.palette.ternary.medium,
    transform: "skew(-25deg)",
    boxShadow: theme.shadows[2],
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  "&.innerContainerNoImg": {
    position: "relative",
    zIndex: 0,
    marginBottom: "25px",
    marginRight: "25px",
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      display: "inline-block",
      width: "80%",
      height: "calc(100% + 50px)",
      bottom: "-25px",
      left: "calc(20% + 25px)",
      background: theme.palette.secondary.medium,
    },
  },

  "&.innerContainerWithImg": {
    display: "flex",
    alignItems: "start",
    width: "100%",
    flexWrap: "wrap",
  },
}));

const ParagraphContainer = styled(Box)(({ theme }) => ({
  border: `3px solid ${theme.palette.ternary.medium}`,
  borderRightWidth: "0px",
  padding: theme.spacing(2),
  background: theme.palette.background.default,
  boxShadow: theme.shadows[2],
  "&.paragraphContainerBesideImg": {
    [theme.breakpoints.up("tablet_min_900")]: {
      maxWidth: "50%",
    },
  },
}));

const ImgPositioning = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  paddingTop: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "50%",
    paddingTop: "0px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  zIndex: 0,
  marginBottom: "25px",
  marginRight: "25px",
  "&::after": {
    content: "''",
    position: "absolute",
    zIndex: -1,
    display: "inline-block",
    width: "80%",
    height: "100%",
    bottom: "-25px",
    right: "-25px",
    background: theme.palette.secondary.medium,
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  boxShadow: theme.shadows[2],
  width: "100%",
  maxWidth: "500px",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Bold = styled("span")({
  fontWeight: 600,
});

export {
  Container,
  Title,
  InnerContainer,
  ParagraphContainer,
  Paragraph,
  ImgPositioning,
  ImageContainer,
  StyledImg,
  Bold,
};

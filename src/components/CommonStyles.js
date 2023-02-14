import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import mergician from "mergician";

const MediumContainer = styled(Box)({
  maxWidth: "900px",
});

const LargeContainer = styled(Box)({
  maxWidth: "1200px",
});

const HighlightSecondary = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 600,
  textDecoration: "underline",
  paddingLeft: "8px",
}));

const FeaturedTitleContainer = styled(Box)(({ theme }) => ({
  marginLeft: "24px",
  marginTop: "90px",
  marginBottom: "69px",

  [theme.breakpoints.down("screen_max_850")]: {
    marginLeft: "24px",
    marginTop: "67px",
    marginBottom: "49px",
  },
}));

const getCommonFeaturedTitleStyles = ({ theme }) => ({
  fontFamily: "Staatliches",
  textTransform: "uppercase",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
});

const TRANSITION_TIME = 0.15;

const StyledTitle = styled(Typography)(({ theme }) =>
  mergician(getCommonFeaturedTitleStyles({ theme }), {
    position: "relative",
    zIndex: 0,

    "&::after, &::before": {
      content: "''",
      position: "absolute",
      display: "inline-block",
    },

    "&::after": {
      zIndex: -2,
      width: "200px",
      height: "200px",
      left: "-24px",
      background: theme.palette.ternary.medium,
    },

    "&::before": {
      zIndex: -1,
      width: "100%",
      height: "50px",
      top: "85%",
      left: 0,
      background: theme.palette.secondary.medium,
      boxShadow: theme.shadows[4],
      transition: `top ${TRANSITION_TIME}s ease, height ${TRANSITION_TIME}s ease`,
    },

    [theme.breakpoints.up("screen_max_850")]: {
      "&::after": {
        bottom: "-64px",
      },
    },

    [theme.breakpoints.down("screen_max_850")]: {
      padding: theme.spacing(2),
      textShadow: "0px 10px 2px #00000028",
      "&::after": {
        bottom: "-24px",
      },

      "&::before": {
        top: 0,
        height: "100%",
      },
    },
  })
);

const ReflectedText = styled(Typography)(({ theme }) =>
  mergician(getCommonFeaturedTitleStyles({ theme }), {
    transform: "rotatex(180deg) translateY(14px) scale(1, 1.4)",
    maskImage: "linear-gradient(transparent 20%, white 100%)",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("screen_max_850")]: {
      display: "none",
    },
  })
);

const FeaturedTitle = ({ children }) => (
  <FeaturedTitleContainer>
    <StyledTitle variant='h1'>{children}</StyledTitle>
    <ReflectedText variant='h1'>{children}</ReflectedText>
  </FeaturedTitleContainer>
);

const DividerContainer = styled(Box)({
  margin: "auto",
  marginTop: "60px",
  marginBottom: "40px",
  width: "80%",
  position: "relative",
});

const Shadow = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  height: "20px",
  "&::after": {
    content: "''",
    display: "block",
    margin: "-25px auto 0",
    width: "100%",
    height: "25px",
    borderRadius: "125px/12px",
    boxShadow: theme.shadows[6],
  },
}));

const Pin = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "45px",
  padding: "10px",
  position: "absolute",
  bottom: "-3px",
  left: "50%",
  marginLeft: "-60px",
  borderRadius: "100%",
  boxShadow: theme.shadows[6],
  background: theme.palette.primary.main,
}));

const PinText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "4px",
  bottom: "4px",
  left: "4px",
  right: "4px",
  borderRadius: "100%",
  border: `1px dashed ${theme.palette.text.secondary}`,
  textAlign: "center",
  lineHeight: "35px",
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

const Divider = () => (
  <DividerContainer>
    <Shadow />
    <Pin>
      <PinText variant='caption'>PET PAW</PinText>
    </Pin>
  </DividerContainer>
);

export {
  MediumContainer,
  LargeContainer,
  HighlightSecondary,
  FeaturedTitle,
  Divider,
};

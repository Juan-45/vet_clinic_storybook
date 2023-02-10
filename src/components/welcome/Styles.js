import { Box, Typography } from "@mui/material";
import { MediumContainer } from "components/CommonStyles";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import mergician from "mergician";

const fade_left = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateX(-50px)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0px)",
  },
});

const fade_right = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateX(50px)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0px)",
  },
});

const fade = keyframes({
  "0%": {
    opacity: "0",
    visibility: "hidden",
  },
  "100%": {
    opacity: "1",
    visibility: "visible",
  },
});

const ANIMATION_TIME = 0.7;
const FADE_LEFT_DELAY = 1;
const FADE_RIGHT_DELAY = 1.4;
const FADE_DELAY = 2.1;

const sideFadeStyles = {
  left: {
    opacity: "0",
    transform: "translateX(-50px)",
    animation: `${ANIMATION_TIME}s ease ${FADE_LEFT_DELAY}s forwards ${fade_left}`,
  },
  right: {
    opacity: "0",
    transform: "translateX(50px)",
    animation: `${ANIMATION_TIME}s ease ${FADE_RIGHT_DELAY}s forwards ${fade_right}`,
  },
};

const StyledImg = styled("img", {
  shouldForwardProp: (prop) => prop !== "fullPage",
})(({ theme, fullPage }) => ({
  objectFit: "cover",
  width: "100%",
  background: "gray",
  [theme.breakpoints.up("screen_max_850")]: {
    height: fullPage ? "initial" : "80vh",
  },
}));

const Background = ({ fullPage, ...props }) => (
  <StyledImg alt='welcome' fullPage={fullPage} {...props} />
);

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

const InnerContainer = styled(MediumContainer, {
  shouldForwardProp: (prop) => prop !== "center",
})(({ theme, center }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  height: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("screen_max_400")]: {
    justifyContent: !center ? "flex-start" : "center",
  },
}));

const TextContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullPage",
})(({ theme, fullPage }) => ({
  [theme.breakpoints.up("screen_max_850")]: {
    marginBottom: theme.spacing(4),
    paddingTop: fullPage ? "0px" : "100px",
  },
  [theme.breakpoints.down("screen_max_850")]: {
    marginBottom: theme.spacing(1.5),
    paddingTop: "0px",
  },
}));

const Blurb = styled(Typography)(({ theme }) =>
  mergician(sideFadeStyles.left, {
    fontFamily: "Cinzel",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.up("tablet_min_900")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("tablet_min_1200")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("mobile_max_750")]: {
      lineHeight: 1.2,
    },
    [theme.breakpoints.down("screen_max_400")]: {
      fontSize: "1.5rem",
    },
  })
);

const SecondaryText = styled(Typography)(({ theme }) =>
  mergician(sideFadeStyles.right, {
    textAlign: "center",
    [theme.breakpoints.up("tablet_min_600")]: {
      fontSize: "1.5rem",
    },
  })
);

const LinkContainer = styled(Box)({
  opacity: "0",
  visibility: "hidden",
  animation: `${ANIMATION_TIME}s ease ${FADE_DELAY}s forwards ${fade}`,
});

const HighlightSecondary = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 600,
  textDecoration: "underline",
  paddingLeft: "8px",
}));

const HiglightTitle = styled("span")(({ theme }) => ({
  color: theme.palette.info.main,
  fontWeight: 600,
  textDecoration: "underline",
  textTransform: "uppercase",
}));

const BottomCurve = () => (
  <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
    <svg
      id='wave'
      style={{ transform: "rotate(0deg)", transition: "0.3s" }}
      viewBox='0 0 1440 100'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
          <stop stopColor='rgba(255, 255, 255, 1)' offset='0%'></stop>
        </linearGradient>
      </defs>
      <path
        style={{ transform: "translate(0, 47px)", opacity: 1 }}
        fill='url(#sw-gradient-0)'
        d='M0,30L60,28.3C120,27,240,23,360,30C480,37,600,53,720,53.3C840,53,960,37,1080,31.7C1200,27,1320,33,1440,36.7C1560,40,1680,40,1800,38.3C1920,37,2040,33,2160,41.7C2280,50,2400,70,2520,80C2640,90,2760,90,2880,86.7C3000,83,3120,77,3240,65C3360,53,3480,37,3600,33.3C3720,30,3840,40,3960,41.7C4080,43,4200,37,4320,28.3C4440,20,4560,10,4680,8.3C4800,7,4920,13,5040,23.3C5160,33,5280,47,5400,46.7C5520,47,5640,33,5760,30C5880,27,6000,33,6120,43.3C6240,53,6360,67,6480,61.7C6600,57,6720,33,6840,35C6960,37,7080,63,7200,66.7C7320,70,7440,50,7560,38.3C7680,27,7800,23,7920,18.3C8040,13,8160,7,8280,3.3C8400,0,8520,0,8580,0L8640,0L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z'
      ></path>
    </svg>
  </Box>
);

export {
  Background,
  Container,
  InnerContainer,
  TextContainer,
  Blurb,
  SecondaryText,
  LinkContainer,
  HighlightSecondary,
  HiglightTitle,
  BottomCurve,
};

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import mergician from "mergician";

const ProminentTitleContainer = styled(Box)(({ theme }) => ({
  marginLeft: "24px",
  marginTop: "90px",
  marginBottom: "30px",

  [theme.breakpoints.down("screen_max_850")]: {
    marginLeft: "24px",
    marginTop: "67px",
    marginBottom: "42px",
  },
}));

const getCommonProminentTitleStyles = ({ theme }) => ({
  fontFamily: "Staatliches",
  textTransform: "uppercase",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
});

const TRANSITION_TIME = 0.15;

const StyledTitle = styled(Typography)(({ theme }) =>
  mergician(getCommonProminentTitleStyles({ theme }), {
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
  mergician(getCommonProminentTitleStyles({ theme }), {
    transform: "rotatex(180deg) translateY(14px) scale(1, 1.4)",
    maskImage: "linear-gradient(transparent 20%, white 100%)",
    color: theme.palette.text.disabled,
    [theme.breakpoints.down("screen_max_850")]: {
      display: "none",
    },
  })
);

const ProminentTitle = ({ children }) => (
  <ProminentTitleContainer>
    <StyledTitle variant='h1'>{children}</StyledTitle>
    <ReflectedText variant='h1'>{children}</ReflectedText>
  </ProminentTitleContainer>
);

export default ProminentTitle;

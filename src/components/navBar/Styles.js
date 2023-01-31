import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const TRANSITION_TIME = 0.25;
const MOBILE_TRANSITION_TIME = 0.5;

const StyledLink = styled(Link)(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  height: "initial",
  marginBottom: "0px",
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  lineHeight: 1.4,
  cursor: "pointer",
  color: theme.palette.text.primary,
  textDecoration: "unset",
  "&::after": {
    position: "absolute",
    zIndex: "-1",
    content: "''",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: theme.palette.primary.main,
  },
  "&::before": {
    position: "absolute",
    content: "''",
  },
}));

const StyledLinkDesktop = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  "&::after": {
    transform: active ? "skew(-25deg)" : "unset",
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, box-shadow ${TRANSITION_TIME}s ease`,
    boxShadow: active ? theme.shadows[2] : "unset",
  },
  "&:hover:after": {
    transition: `transform ${TRANSITION_TIME}s ease, box-shadow ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s`,
    boxShadow: theme.shadows[2],
    transform: "skew(-25deg)",
  },
  "&::before": {
    zIndex: "-2",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    transform: active ? "skew(-25deg) translate(8px, -8px)" : "skew(-25deg)",
    transition: `transform ${TRANSITION_TIME}s ease, background 0s ${TRANSITION_TIME}s`,
    background: active ? theme.palette.secondary.main : "unset",
  },
  "&:hover:before": {
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, background 0s ${TRANSITION_TIME}s`,
    background: theme.palette.secondary.main,
    transform: "skew(-25deg) translate(8px, -8px)",
  },
}));

const StyledLinkMobile = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  "&::after": {
    transform: "skew(-25deg)",
    transition: `box-shadow ${MOBILE_TRANSITION_TIME}s ease`,
    boxShadow: active ? theme.shadows[6] : theme.shadows[2],
  },
  "&:hover:after": {
    boxShadow: theme.shadows[6],
  },
  "&::before": {
    bottom: 0,
    left: "-8px",
    height: "3px",
    width: active ? "100%" : "0%",
    transform: "skew(-25deg)",
    transition: `width ${MOBILE_TRANSITION_TIME}s ease`,
    background: theme.palette.ternary.main,
  },
  "&:hover:before": {
    width: "100%",
  },
}));

export { StyledLinkDesktop, StyledLinkMobile };

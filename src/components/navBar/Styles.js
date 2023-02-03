import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import mergician from "mergician";

const TRANSITION_TIME = 0.15;
const MOBILE_TRANSITION_TIME = 0.25;

const getNavItem = ({ theme }) => ({
  display: "inline-block",
  position: "relative",
  height: "initial",
  marginBottom: "0px",
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  marginTop: theme.spacing(1),
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
});

const getDesktopCommon = ({ theme, active }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(2.3),
  "&::after": {
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, box-shadow ${TRANSITION_TIME}s ease`,
    transform: active ? "skew(-25deg)" : "unset",
    boxShadow: active ? theme.shadows[2] : "unset",
  },

  "&::before": {
    zIndex: "-2",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    transition: `transform ${TRANSITION_TIME}s ease, background 0s ${TRANSITION_TIME}s`,
    transform: active ? "skew(-25deg) translate(8px, -8px)" : "skew(-25deg)",
    background: active ? theme.palette.secondary.main : "unset",
  },
});

const getDesktop = ({ theme, active }) =>
  mergician(getDesktopCommon({ theme, active }), {
    "&:hover:after": {
      transition: `transform ${TRANSITION_TIME}s ease, box-shadow ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s`,
      boxShadow: theme.shadows[2],
      transform: "skew(-25deg)",
    },

    "&:hover:before": {
      transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, background 0s ${TRANSITION_TIME}s`,
      background: theme.palette.secondary.main,
      transform: "skew(-25deg) translate(8px, -8px)",
    },
  });

const getDesktopTouch = ({ theme, active }) =>
  mergician(getDesktopCommon({ theme, active }), {
    zIndex: "2",
    "&::after": {
      transition: active
        ? `transform ${TRANSITION_TIME}s ease, box-shadow ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s`
        : `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, box-shadow ${TRANSITION_TIME}s ease`,
    },

    "&::before": {
      transition: active
        ? `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, background 0s ${TRANSITION_TIME}s`
        : `transform ${TRANSITION_TIME}s ease, background 0s ${TRANSITION_TIME}s`,
    },
  });

const getMobileCommon = ({ theme, active }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  "&::after": {
    transform: "skew(-25deg)",
    transition: `box-shadow ${MOBILE_TRANSITION_TIME}s ease`,
    boxShadow: active ? theme.shadows[6] : theme.shadows[2],
  },

  "&::before": {
    bottom: 0,
    left: "-6px",
    height: "3px",
    width: active ? "100%" : "0%",
    transform: "skew(-25deg)",
    transition: `width ${MOBILE_TRANSITION_TIME}s ease`,
    background: theme.palette.secondary.main,
  },
});

const getMobileNoTouch = ({ theme }) => ({
  "&:hover:after": {
    boxShadow: theme.shadows[6],
  },
  "&:hover:before": {
    width: "100%",
  },
});

const NavItemsContainer = styled(List)({
  display: "flex",
  flexWrap: "nowrap",
  padding: "0px",
});

const NavItemContainer = styled(ListItem)({
  width: "initial",
});

const FlexContainer = styled(Box)({
  display: "flex",
  flexWrap: "nowrap",
});

const NavBarContainer = styled("nav", {
  shouldForwardProp: (prop) => prop !== "scrolling",
})(({ theme, scrolling }) => ({
  display: "flex",
  flexWrap: "nowrap",
  position: "fixed",
  top: "0",
  zIndex: "1200",
  width: "100%",
  minHeight: "25px",
  padding: `${theme.spacing(2)} ${theme.spacing(20)}`,
  paddingTop: theme.spacing(2),
  justifyContent: "space-between",
  alignItems: "center",
  transition: "background 0.5s ease",
  background: scrolling ? theme.palette.ternary.main : "unset",

  [theme.breakpoints.down("lg")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },

  [theme.breakpoints.down("touchScreen_max_800")]: {
    background: theme.palette.ternary.main,
    padding: theme.spacing(2),
    top: "unset",
    bottom: 0,
  },
}));

const LogoContainer = styled(FlexContainer)({
  background: "white",
  borderRadius: "50%",
});

const Figure = styled("figure")(({ theme }) => ({
  margin: "0px",
  width: "125px",
  height: "125px",
  [theme.breakpoints.down("lg")]: {
    width: "90px",
    height: "90px",
  },
  [theme.breakpoints.down("touchScreen_max_800")]: {
    width: "60px",
    height: "60px",
  },
}));

const LogoImg = styled("img")({
  objectFit: "cover",
  borderRadius: "50%",
  width: "100%",
  height: "100%",
});

const StyledLink = styled(Link)(getNavItem);

const StyledListItem = styled(NavItemContainer)(getNavItem);

const StyledListItemDesktop = styled(StyledListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(getDesktop);

//-------------------------------------------------------------

const StyledLinkDesktop = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(getDesktop);

const StyledLinkDesktopTouch = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  ...getDesktopTouch({ theme, active }),
  zIndex: "0",
}));

const NavMenuOpenDesktop = styled(StyledListItemDesktop)({
  "&:hover": {
    "& .desktopMenuList": {
      display: "block",
    },
  },
});

const NavMenuOpenDesktopTouch = styled(StyledListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(getDesktopTouch);

const NavMenuItemsContainer = styled(List, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  display: open ? "block" : "none",
  position: "absolute",
  left: "0",
  width: "150px",
  transform: "translate(-6.5px, 4px)",
  paddingTop: "10px",
  paddingBottom: "0px",
}));

const NavMenuItemContainer = styled(ListItem)(({ theme }) => ({
  margin: "0px",
  width: "100%",
  background: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavMenuItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  paddingLeft: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  width: "100%",
  textDecoration: "none",
  color: theme.palette.text.primary,
  position: "relative",
  "&::before": {
    position: "absolute",
    content: "''",
    bottom: "6px",
    left: "8px",
    height: "3px",
    width: active ? "88%" : "0%",
    transition: `width ${MOBILE_TRANSITION_TIME}s ease`,
    background: theme.palette.secondary.main,
  },
  "&:hover:before": {
    width: "88%",
  },
}));

const StyledLinkMobileNoTouch = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) =>
  mergician(getMobileCommon({ theme, active }), getMobileNoTouch({ theme }))
);

const StyledLinkMobileTouch = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(getMobileCommon);

export {
  NavBarContainer,
  NavItemsContainer,
  NavItemContainer,
  LogoContainer,
  Figure,
  LogoImg,
  StyledLinkDesktop,
  StyledLinkDesktopTouch,
  StyledLinkMobileNoTouch,
  StyledLinkMobileTouch,
  NavMenuOpenDesktop,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
  NavMenuOpenDesktopTouch,
};

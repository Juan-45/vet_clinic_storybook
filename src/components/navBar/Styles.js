import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const TRANSITION_TIME = 0.1;
const MOBILE_TRANSITION_TIME = 0.25;

const getNavItemStyles = ({ theme }) => ({
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

const getRootNavItemDesktopStyles = ({ theme, active }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(2.3),
  "&::after": {
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, box-shadow ${TRANSITION_TIME}s ease`,
    transform: active ? "skew(-25deg)" : "unset",
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
    transition: `transform ${TRANSITION_TIME}s ease, background 0s ${TRANSITION_TIME}s`,
    transform: active ? "skew(-25deg) translate(8px, -8px)" : "skew(-25deg)",
    background: active ? theme.palette.secondary.main : "unset",
  },
  "&:hover:before": {
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, background 0s ${TRANSITION_TIME}s`,
    background: theme.palette.secondary.main,
    transform: "skew(-25deg) translate(8px, -8px)",
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

const NavBarContainer = styled(FlexContainer)(({ theme }) => ({
  position: "fixed",
  top: "0",
  zIndex: "1200",
  width: "100%",
  minHeight: "25px",
  padding: `${theme.spacing(2)} ${theme.spacing(20)}`,
  [theme.breakpoints.down("lg")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
  paddingTop: theme.spacing(2),
  justifyContent: "space-between",
  alignItems: "center",
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
}));

const LogoImg = styled("img")({
  objectFit: "cover",
  borderRadius: "50%",
  width: "100%",
  height: "100%",
});

const StyledLink = styled(Link)(getNavItemStyles);

const StyledListItem = styled(NavItemContainer)(getNavItemStyles);

const StyledListItemDesktop = styled(StyledListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(getRootNavItemDesktopStyles);

//-------------------------------------------------------------

const StyledLinkDesktop = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(getRootNavItemDesktopStyles);

const NavMenuOpenDesktop = styled(StyledListItemDesktop)({
  position: "relative",
  "&:hover": {
    "& .desktopMenuList": {
      display: "block",
    },
  },
});

const NavMenuItemsContainer = styled(List)({
  display: "none",
  position: "absolute",
  left: "0",
  width: "150px",
  transform: "translate(-6.5px, 4px)",
  paddingTop: "10px",
  paddingBottom: "0px",
});

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
  width: "100%",
  textDecoration: "none",
  color: theme.palette.text.primary,
  position: "relative",
  "&::before": {
    position: "absolute",
    content: "''",
    bottom: "-1px",
    left: 0,
    height: "3px",
    width: active ? "100%" : "0%",
    transition: `width ${MOBILE_TRANSITION_TIME}s ease`,
    background: theme.palette.secondary.main,
  },
  "&:hover:before": {
    width: "100%",
  },
}));

const StyledLinkMobile = styled(StyledLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  marginLeft: theme.spacing(1.2),
  marginRight: theme.spacing(3),
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
    left: "-6px",
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

export {
  NavBarContainer,
  NavItemsContainer,
  NavItemContainer,
  LogoContainer,
  Figure,
  LogoImg,
  StyledLinkDesktop,
  StyledLinkMobile,
  NavMenuOpenDesktop,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
};

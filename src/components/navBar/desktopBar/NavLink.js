import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const TRANSITION_TIME = 0.25;

const getStyles = ({ theme, active }) => ({
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
    transition: `transform ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s, box-shadow ${TRANSITION_TIME}s ease`,
    boxShadow: active ? theme.shadows[2] : "unset",
    transform: active ? "skew(-25deg)" : "unset",
  },

  "&:hover:after": {
    transition: `transform ${TRANSITION_TIME}s ease, box-shadow ${TRANSITION_TIME}s ease ${TRANSITION_TIME}s`,
    boxShadow: theme.shadows[2],
    transform: "skew(-25deg)",
  },

  "&::before": {
    position: "absolute",
    zIndex: "-2",
    content: "''",
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
});

const LinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(getStyles);

const NavLink = ({ label, to, ...props }) => {
  return (
    <LinkStyled to={to} {...props}>
      {label}
    </LinkStyled>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  active: false,
};

export default NavLink;

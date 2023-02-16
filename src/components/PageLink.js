import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledLink, TRANSITION_TIME } from "components/CommonStyles";
import PropTypes from "prop-types";

const StyledPageLink = styled(StyledLink)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  background: theme.palette.background.default,
  transition: `box-shadow ${TRANSITION_TIME}s ease`,
  "&::after": {
    position: "absolute",
    content: "''",
    bottom: 0,
    left: 0,
    background: theme.palette.secondary.main,
    height: "3px",
    width: "0%",
    transition: `width ${TRANSITION_TIME}s ease`,
  },
  "&:hover:after": {
    width: "100%",
  },
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
}));

const PageLink = ({ to, children, ...props }) => (
  <StyledPageLink to={to} {...props}>
    <Typography variant='button'>{children}</Typography>
  </StyledPageLink>
);

PageLink.prototype = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default PageLink;

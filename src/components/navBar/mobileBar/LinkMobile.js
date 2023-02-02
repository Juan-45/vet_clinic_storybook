import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { StyledLinkMobile } from "components/navBar/Styles.js";

const LinkMobile = ({ children, to, ...props }) => {
  return (
    <StyledLinkMobile to={to} {...props}>
      <Typography variant="button">{children}</Typography>
    </StyledLinkMobile>
  );
};

LinkMobile.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

LinkMobile.defaultProps = {
  active: false,
};

export default LinkMobile;

import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { StyledLinkDesktop } from "components/navBar/Styles.js";

const LinkDesktop = ({ children, to, ...props }) => {
  return (
    <StyledLinkDesktop to={to} {...props}>
      <Typography variant="button">{children}</Typography>
    </StyledLinkDesktop>
  );
};

LinkDesktop.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

LinkDesktop.defaultProps = {
  active: false,
};

export default LinkDesktop;

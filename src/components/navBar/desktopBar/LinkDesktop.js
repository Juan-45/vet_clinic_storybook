import PropTypes from "prop-types";
import { StyledLinkDesktop } from "../Styles.js";

const LinkDesktop = ({ children, to, ...props }) => {
  return (
    <StyledLinkDesktop to={to} {...props}>
      {children}
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

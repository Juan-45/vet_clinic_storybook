import PropTypes from "prop-types";
import { StyledLinkMobile } from "../Styles.js";

const LinkMobile = ({ children, to, ...props }) => {
  return (
    <StyledLinkMobile to={to} {...props}>
      {children}
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

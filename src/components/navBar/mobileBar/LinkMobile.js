import PropTypes from "prop-types";
import { StyledLinkMobile } from "../Styles.js";

const LinkMobile = ({ label, to, ...props }) => {
  return (
    <StyledLinkMobile to={to} {...props}>
      {label}
    </StyledLinkMobile>
  );
};

LinkMobile.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

LinkMobile.defaultProps = {
  active: false,
};

export default LinkMobile;

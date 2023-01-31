import PropTypes from "prop-types";
import { StyledLinkDesktop } from "../Styles.js";

const LinkDesktop = ({ label, to, ...props }) => {
  return (
    <StyledLinkDesktop to={to} {...props}>
      {label}
    </StyledLinkDesktop>
  );
};

LinkDesktop.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

LinkDesktop.defaultProps = {
  active: false,
};

export default LinkDesktop;

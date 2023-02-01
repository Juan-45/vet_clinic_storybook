import PropTypes from "prop-types";
import { StyledLinkMobile, NavItemContainer } from "../Styles.js";

const LinkMobile = ({ children, to, ...props }) => {
  return (
    <NavItemContainer>
      <StyledLinkMobile to={to} {...props}>
        {children}
      </StyledLinkMobile>
    </NavItemContainer>
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

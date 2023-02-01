import PropTypes from "prop-types";
import { StyledLinkDesktop, NavItemContainer } from "../Styles.js";

const LinkDesktop = ({ children, to, ...props }) => {
  return (
    <NavItemContainer>
      <StyledLinkDesktop to={to} {...props}>
        {children}
      </StyledLinkDesktop>
    </NavItemContainer>
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

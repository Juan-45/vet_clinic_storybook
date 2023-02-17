import { Container, InnerContainer } from "components/header/Styles";
import BottomCurve from "components/BottomCurve";
import Background from "components/header/Background";
import PropTypes from "prop-types";

const Header = ({ children, ...props }) => {
  return (
    <Container>
      <Background {...props} />
      <InnerContainer>{children}</InnerContainer>
      <BottomCurve />
    </Container>
  );
};

Header.prototype = {
  children: PropTypes.node,
  src: PropTypes.string,
  sourceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcset: PropTypes.string,
    })
  ),
};

Header.defaultProps = {
  sourceOptions: {},
};

export default Header;

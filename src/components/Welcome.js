import {
  Container,
  Background,
  InnerContainer,
  BottomCurve,
} from "components/welcome/Styles";
import PropTypes from "prop-types";

const Welcome = ({ children, ...props }) => {
  return (
    <Container>
      <Background {...props} />
      <InnerContainer>{children}</InnerContainer>
      <BottomCurve />
    </Container>
  );
};

Welcome.prototype = {
  children: PropTypes.node,
  src: PropTypes.string,
  sourceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcset: PropTypes.string,
    })
  ),
};

Welcome.defaultProps = {
  sourceOptions: {},
};

export default Welcome;

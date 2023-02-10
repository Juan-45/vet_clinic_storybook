import {
  Container,
  Background,
  InnerContainer,
  BottomCurve,
} from "components/welcome/Styles";
import PropTypes from "prop-types";

const Welcome = ({ children, /*src, srcset,*/ center, fullPage, ...props }) => {
  return (
    <Container>
      <Background fullPage={fullPage} {...props} />
      <InnerContainer center={center}>{children}</InnerContainer>
      <BottomCurve />
    </Container>
  );
};

Welcome.prototype = {
  children: PropTypes.node,
  /* src: PropTypes.string,
  srcset: PropTypes.string,*/
  center: PropTypes.bool,
  fullPage: PropTypes.bool,
};

Welcome.defaultProps = {
  center: false,
  fullPage: true,
};

export default Welcome;

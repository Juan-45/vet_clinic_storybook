import PropTypes from "prop-types";
import { StyledPicture, StyledImg } from "components/header/Styles";

const Background = ({ src, sourceOptions }) => {
  let sources = null;

  if (sourceOptions.length !== 0) {
    sources = sourceOptions.map((item) => (
      <source key={item.srcset} media={item.media} srcSet={item.srcset} />
    ));
  }

  return (
    <StyledPicture>
      {sources}
      <StyledImg alt='Header background' src={src} />
    </StyledPicture>
  );
};

Background.prototype = {
  src: PropTypes.string,
  sourceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcset: PropTypes.string,
    })
  ),
};

Background.defaultProps = {
  sourceOptions: {},
};

export default Background;

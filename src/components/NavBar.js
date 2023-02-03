import PropTypes from "prop-types";
import {
  NavBarContainer,
  LogoContainer,
  Figure,
  LogoImg,
} from "components/navBar/Styles";
import DesktopBar from "components/navBar/DesktopBar";
import MobileBar from "components/navBar/MobileBar";
import RenderIf from "components/RenderIf";
import { useMediaQuery } from "@mui/material";
import useTriggerOnScroll from "hooks/useTriggerOnScroll";

const Logo = ({ homeURL, src, alt, ...props }) => (
  <LogoContainer>
    <Figure>
      <a href={homeURL}>
        <LogoImg alt={alt} src={src} {...props} />
      </a>
    </Figure>
  </LogoContainer>
);

//caso contrario renderizar componente MobileBar con botón hamburguesa y menu fixed que ocupa toda la pantalla
// agregar flecha animada para menu desplegable

const NavBar = ({ navigationOptions, logoOptions, withLogo }) => {
  const { scrolling } = useTriggerOnScroll();
  const match_max_816 = useMediaQuery((theme) =>
    theme.breakpoints.down("screen_max_816")
  );

  return (
    <NavBarContainer role='navigation' scrolling={scrolling}>
      <RenderIf condition={withLogo}>
        <Logo
          homeURL={logoOptions.homeUrl}
          alt='Logo'
          src={logoOptions.imgUrl}
        />
      </RenderIf>
      <RenderIf condition={!match_max_816}>
        <DesktopBar navigationOptions={navigationOptions} />
      </RenderIf>
      <RenderIf condition={match_max_816}>
        <MobileBar navigationOptions={navigationOptions} />
      </RenderIf>
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  navigationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      anchorProp: PropTypes.object,
      nested: PropTypes.arrayOf(
        PropTypes.shape({
          to: PropTypes.string,
          label: PropTypes.string,
          anchorProp: PropTypes.object,
        })
      ),
    })
  ).isRequired,
  logoOptions: PropTypes.shape({
    homeUrl: PropTypes.string,
    imgUrl: PropTypes.string,
  }),
  withLogo: PropTypes.bool,
};

NavBar.defaultProps = {
  logoOptions: {},
  withLogo: false,
};

export default NavBar;

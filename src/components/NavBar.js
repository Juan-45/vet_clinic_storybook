import PropTypes from "prop-types";
import {
  NavBarContainer,
  NavItemsContainer,
  NavItemContainer,
  LogoContainer,
  Figure,
  LogoImg,
} from "components/navBar/Styles";
import LinkDesktop from "components/navBar/desktopBar/LinkDesktop";
import NavMenuDesktop from "components/navBar/desktopBar/NavMenuDesktop";
import RenderIf from "components/RenderIf";
import { useLocation } from "react-router-dom";

const Logo = ({ homeURL, src, alt, ...props }) => (
  <LogoContainer>
    <Figure>
      <a href={homeURL}>
        <LogoImg alt={alt} src={src} {...props} />
      </a>
    </Figure>
  </LogoContainer>
);

const NavBar = ({ navigationOptions, logoOptions, withLogo }) => {
  const { pathname } = useLocation();

  const links = navigationOptions.map((item, index) => {
    const matchCurrentPath = (nested, currentPath) => {
      if (nested) {
        const pathsList = nested.map((i) => i.to);
        const result = pathsList.find((path) => path === currentPath);

        if (result) {
          return true;
        } else {
          return false;
        }
      }
    };

    const isActive = item.to === pathname;
    const isMenuActive = matchCurrentPath(item.nested, pathname);

    if (item.to) {
      return (
        <NavItemContainer key={`${item.label}-${index}`}>
          <LinkDesktop to={item.to} active={isActive} {...item.anchorProp}>
            {item.label}
          </LinkDesktop>
        </NavItemContainer>
      );
    } else if (item.nested) {
      return (
        <NavMenuDesktop
          key={`${item.label}-${index}`}
          label={item.label}
          active={isMenuActive}
          nested={item.nested}
        />
      );
    } else return <></>;
  });
  return (
    <NavBarContainer role='navigation'>
      <RenderIf condition={withLogo}>
        <Logo
          homeURL={logoOptions.homeUrl}
          alt='Logo'
          src={logoOptions.imgUrl}
        />
      </RenderIf>
      <NavItemsContainer>{links}</NavItemsContainer>
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

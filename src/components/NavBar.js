import PropTypes from "prop-types";
import LinkDesktop from "components/navBar/desktopBar/LinkDesktop";
import { Box } from "@mui/material";
import RenderIf from "components/RenderIf";
import { styled } from "@mui/material/styles";

const FlexContainer = styled(Box)({
  display: "flex",
  flexWrap: "nowrap",
});

const Root = styled(FlexContainer)(({ theme }) => ({
  position: "fixed",
  top: "0",
  zIndex: "1200",
  width: "100%",
  minHeight: "25px",
  padding: `${theme.spacing(2)} ${theme.spacing(20)}`,
  [theme.breakpoints.down("lg")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
  paddingTop: theme.spacing(2),
  justifyContent: "space-between",
  alignItems: "center",
}));

const LogoContainer = styled(FlexContainer)(({ theme }) => ({
  background: "white",
  borderRadius: "50%",
}));

const Figure = styled("figure")(({ theme }) => ({
  margin: "0px",
  width: "125px",
  height: "125px",
  [theme.breakpoints.down("lg")]: {
    width: "80px",
    height: "80px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  objectFit: "cover",
  borderRadius: "50%",
  width: "125px",
  height: "125px",
  [theme.breakpoints.down("lg")]: {
    width: "80px",
    height: "80px",
  },
}));

const Logo = ({ homeURL, src, alt, ...props }) => (
  <LogoContainer>
    <Figure>
      <a href={homeURL}>
        <Img alt={alt} src={src} {...props} />
      </a>
    </Figure>
  </LogoContainer>
);

// con menu != {} entonces renderizo Menu en vez de LinkDesktop
// con decisión dentro de navBar por path para dar active

const NavBar = ({ navigationOptions, logoOptions, withLogo }) => {
  const links = navigationOptions.map((item, index) => (
    <LinkDesktop
      key={`${item.to}-${index}`}
      to={item.to}
      active={item.active}
      {...item.anchorProp}
    >
      {item.label}
    </LinkDesktop>
  ));
  return (
    <Root>
      <RenderIf condition={withLogo}>
        <Logo
          homeURL={logoOptions.homeUrl}
          alt='Logo'
          src={logoOptions.imgUrl}
        />
      </RenderIf>
      <FlexContainer>{links}</FlexContainer>
    </Root>
  );
};

NavBar.propTypes = {
  navigationOptions: PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
    anchorProp: PropTypes.object,
  }).isRequired,
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

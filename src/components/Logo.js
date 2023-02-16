import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LogoContainer = styled(Box)({
  display: "flex",
  flexWrap: "nowrap",
  background: "white",
  borderRadius: "50%",
});

const Figure = styled("figure")(({ theme }) => ({
  margin: "0px",
  width: "125px",
  height: "125px",
  [theme.breakpoints.down("lg")]: {
    width: "90px",
    height: "90px",
  },
  [theme.breakpoints.down("screen_max_850")]: {
    width: "60px",
    height: "60px",
  },
}));

const LogoImg = styled("img")({
  objectFit: "cover",
  borderRadius: "50%",
  width: "100%",
  height: "100%",
});

const Logo = ({ homeURL, src, alt, ...props }) => (
  <LogoContainer>
    <Figure>
      <a href={homeURL}>
        <LogoImg alt={alt} src={src} {...props} />
      </a>
    </Figure>
  </LogoContainer>
);

export default Logo;

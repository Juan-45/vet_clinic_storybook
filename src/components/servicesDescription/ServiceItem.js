import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ResponsiveContainer, TRANSITION_TIME } from "components/CommonStyles";
import BottomCurve from "components/BottomCurve";

const ServiceContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 0,
  marginBottom: "25px",
  marginRight: "25px",
  width: "calc(100% - 25px)",
  height: "100%",
  "&::after": {
    content: "''",
    position: "absolute",
    zIndex: -1,
    display: "inline-block",
    width: "80%",
    height: "95%",
    bottom: "-25px",
    left: "calc(20% + 25px)",
    background: theme.palette.secondary.medium,
    boxShadow: theme.shadows[2],
  },
  "&::before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    width: "0%",
    height: "3px",
    transition: `width ${TRANSITION_TIME}s ease`,
    background: theme.palette.ternary.medium,
  },
  "&:hover:before": {
    width: "100%",
  },
  "& .imgContainer": {
    transition: `filter ${TRANSITION_TIME}s ease`,
  },
  "&:hover .imgContainer": {
    filter: "sepia(0.5)",
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  background: theme.palette.background.default,
  height: "100%",
}));

const ImgContainer = styled(Box)({
  width: "100%",
  position: "relative",
});

const StyledImg = styled("img")({
  objectFit: "cover",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
});

const TextContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const ServiceItem = ({ children, src, alt, pathDefinition }) => (
  <ResponsiveContainer columns={3}>
    <ServiceContainer>
      <InnerContainer>
        <ImgContainer className='imgContainer'>
          <StyledImg src={src} alt={alt} />
          <BottomCurve pathDefinition={pathDefinition} />
        </ImgContainer>
        <TextContainer>{children}</TextContainer>
      </InnerContainer>
    </ServiceContainer>
  </ResponsiveContainer>
);

ServiceItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  pathDefinition: PropTypes.string.isRequired,
};

export default ServiceItem;

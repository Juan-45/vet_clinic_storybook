import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import mergician from "mergician";

const FlexRowCenter = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const MediumContainer = styled(Box)({
  maxWidth: "900px",
});

const LargeContainer = styled(Box)({
  maxWidth: "1200px",
});

const HighlightRed = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 600,
  textDecoration: "underline",
}));

const StyledLink = styled(Link)({
  display: "inline-block",
  position: "relative",
  lineHeight: 1.4,
  cursor: "pointer",
  textDecoration: "unset",
});

const LargeContainerFlex = styled(LargeContainer)({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
});

const ResponsiveItemsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  paddingRight: "0px",
  display: "flex",
  flexWrap: "wrap",
}));

const ResponsiveContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "columns",
})(({ theme, columns }) => ({
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(3),
  width: "calc(100% - 16px)",
  [theme.breakpoints.up("sm")]: {
    width: "calc(50% - 16px)",
  },
  [theme.breakpoints.up("tablet_min_900")]: {
    width: columns === 4 ? "calc(25% - 16px)" : "calc(33.33% - 16px)",
  },
}));

ResponsiveContainer.propTypes = {
  columns: PropTypes.oneOf([3, 4]),
};

ResponsiveContainer.defaultProps = {
  columns: 4,
};

const getCommonStyles = ({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  textAlign: "center",
});

const StyledItemTitle = styled(Typography)(({ theme }) =>
  mergician(getCommonStyles({ theme }), {
    fontWeight: 600,
    textDecoration: "underline",
    overflow: "hidden",
    textOverflow: "ellipsis",
  })
);

const ItemTitle = ({ children }) => (
  <StyledItemTitle variant='h2'>{children}</StyledItemTitle>
);

const ItemDescription = styled(Typography)(({ theme }) =>
  mergician(getCommonStyles({ theme }), { marginBottom: "0px" })
);

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  position: "relative",
  marginBottom: theme.spacing(8),
  "&::after": {
    content: "''",
    position: "absolute",
    display: "inline-block",
    width: "100%",
    height: "15px",
    top: "calc(100% + 8px)",
    left: 0,
    background: theme.palette.ternary.medium,
    transform: "skew(-25deg)",
    boxShadow: theme.shadows[2],
  },
}));

const TRANSITION_TIME = 0.15;

export {
  FlexRowCenter,
  MediumContainer,
  LargeContainer,
  HighlightRed,
  StyledLink,
  LargeContainerFlex,
  ResponsiveItemsContainer,
  ResponsiveContainer,
  ItemTitle,
  Title,
  ItemDescription,
  TRANSITION_TIME,
};

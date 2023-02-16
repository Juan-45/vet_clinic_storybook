import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

const TRANSITION_TIME = 0.15;

export {
  FlexRowCenter,
  MediumContainer,
  LargeContainer,
  HighlightRed,
  StyledLink,
  TRANSITION_TIME,
};

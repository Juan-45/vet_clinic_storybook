import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MediumContainer = styled(Box)({
  maxWidth: "900px",
});

const LargeContainer = styled(Box)({
  maxWidth: "1200px",
});

const HighlightSecondary = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 600,
  textDecoration: "underline",
  paddingLeft: "8px",
}));

export { MediumContainer, LargeContainer, HighlightSecondary };

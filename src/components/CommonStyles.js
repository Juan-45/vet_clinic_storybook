import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export { MediumContainer, LargeContainer, HighlightSecondary };

